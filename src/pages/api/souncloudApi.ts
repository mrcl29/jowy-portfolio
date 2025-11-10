// scr/pages/api/souncloudApi.ts 

import type { APIRoute } from 'astro';
import { baseFetcher } from '@/lib/BaseFetcher';
import { ApiError, NetworkError } from '@/lib/ErrorTypes';
import {
    soundCloudURLGetToken, 
    soundCloudClientID, 
    soundCloudClientSecret, 
    soundCloudAuthHeaders, 
    soundCloudAuthBody,
    soundCloudAuthorization
} from "@/pages/api/apiConstants";

// -----------------------------------------------------
// 1. LÓGICA DE CACHÉ Y FUNCIÓN HELPER
// -----------------------------------------------------

interface SoundCloudTokenResponse {
    access_token: string;
    expires_in: number; // Duración en segundos
    token_type: string;
    refresh_token: string;
    scope: string;
}

// Interfaz para el token que devolvemos
interface Tokens {
    access_token: string;
    refresh_token: string;
}

// Interfaz para nuestro caché interno (incluye la marca de tiempo de expiración)
interface CachedToken extends Tokens {
    expiresAt: number; // Almacenará el tiempo UNIX en segundos
}

/**
 * Variable global (a nivel de módulo) para almacenar el token en caché.
 * Esta variable SÓLO existe en el servidor, es inaccesible para el cliente.
 */
let tokenCache: CachedToken | null = null;

/** * Función que realiza la petición y devuelve el token directamente.
 * Comprueba si hay un token válido en caché antes de solicitar uno nuevo.
 */
export async function obtenerToken(): Promise<string> {
    
    const nowInSeconds = Date.now() / 1000;
    const bufferSeconds = 60; // Un búfer de 60 segundos para refrescar antes de que expire

    // 1. Comprobar el caché
    if (tokenCache && tokenCache.expiresAt > (nowInSeconds + bufferSeconds)) {
        console.log("Usando token de SoundCloud desde caché.");
        return tokenCache.access_token;
    }

    // 2. Si el caché está vacío o ha expirado, obtener un nuevo token
    console.log("Token de SoundCloud caducado o no existente. Obteniendo nuevo token...");

    // Unificar headers y secretos
    const bodyData = { ...soundCloudAuthBody };
    const bodyUrlEncoded = new URLSearchParams(bodyData).toString();

    // Headers para URL-encoded
    const headers = {
        ...soundCloudAuthHeaders, 
        client_id: soundCloudClientID, 
        client_secret: soundCloudClientSecret,
        Authorization: soundCloudAuthorization
    };

    try {
        // Usamos POST y el body URL-encoded
        const res = await baseFetcher<SoundCloudTokenResponse>(
            soundCloudURLGetToken, 
            { 
                headers, 
                method: 'POST',
                body: bodyUrlEncoded,
            }
        );
        
        // Calcular la nueva fecha de expiración (en segundos)
        const newExpiresAt = nowInSeconds + res.expires_in;

        // Almacenar el nuevo token en el caché
        tokenCache = {
            access_token: res.access_token,
            refresh_token: res.refresh_token,
            expiresAt: newExpiresAt
        };
        
        console.log("Nuevo token de SoundCloud obtenido y cacheado.");

        // Devolver el nuevo token
        return res.access_token;

    } catch (error) {
        // Lógica de manejo de errores, luego re-lanzamos para que la página Astro la capture
        console.error("Error al obtener token de SoundCloud:", error);
        // Invalidar el caché en caso de error
        tokenCache = null; 
        throw new Error("Fallo en la autenticación de SoundCloud");
    }
}

// -----------------------------------------------------
// 2. EXPORTACIÓN DE LA API ROUTE (Endpoint)
// -----------------------------------------------------

// Este endpoint ahora también se beneficia del caché
// si es llamado varias veces seguidas.
export const GET: APIRoute = async () => {
    try {
        const tokenData = await obtenerToken();
        // Devuelve el tokenData como JSON al cliente
        return new Response(JSON.stringify(tokenData), { status: 200 });

    } catch (error) {
        if (error instanceof ApiError) {
             return new Response(JSON.stringify({ message: error.message }), { status: error.status });
        }
        if (error instanceof NetworkError) {
             return new Response(JSON.stringify({ message: "No se pudo conectar." }), { status: 503 });
        }
        return new Response(JSON.stringify({ message: "Error interno." }), { status: 500 });
    }
};