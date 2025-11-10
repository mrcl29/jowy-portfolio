// src/lib/BaseFetcher.ts
import { ApiError, NetworkError } from './ErrorTypes';

/** * Opciones extendidas para el fetcher base.
 * Añade una propiedad para incluir headers comunes de forma sencilla.
 */
interface FetcherOptions extends RequestInit {
  // Define headers por defecto si no son proporcionados
  headers?: Record<string, string>; 
}

/**
 * Función genérica de fetch que maneja errores de red y HTTP.
 * @param url La URL a la que se realiza la petición.
 * @param options Opciones de fetch, incluyendo headers.
 * @returns Una promesa que resuelve con el tipo de dato T.
 * @throws ApiError si la respuesta es 4xx o 5xx.
 * @throws NetworkError si hay un fallo de red.
 */
export async function baseFetcher<T>(
  url: string,
  options: FetcherOptions = {}
): Promise<T> {

  // 1. Configuración de Headers por defecto (ej. JSON)
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...options.headers // Sobrescribe si se pasan en options
  };

  try {
    console.log("BaseFetcher ejecutado.........")
    const response = await fetch(url, {
      ...options,
      headers: defaultHeaders,
    });

    // 2. Manejo de Respuestas con Status OK (200-299)
    if (response.ok) {
      // Intenta parsear el JSON. Si la respuesta es 204 (No Content), devuelve un objeto vacío o null
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return (await response.json()) as T;
      }
      // Útil para llamadas DELETE o PUT sin cuerpo de respuesta
      return null as T; 
    }

    // 3. Manejo de Errores HTTP (4xx y 5xx)
    let errorMessage = `Fallo en la petición a ${url}. Status: ${response.status}`;
    try {
      // Intenta obtener un mensaje de error detallado del cuerpo
      const errorBody = await response.json();
      if (errorBody.message) {
        errorMessage = errorBody.message;
      } else if (errorBody.error) {
        errorMessage = errorBody.error;
      }
    } catch (e) {
      // Si no se puede parsear el cuerpo, usamos el mensaje por defecto
      errorMessage = `${response.status} ${response.statusText}`;
    }

    // Lanza el error de la API con el status code
    throw new ApiError(errorMessage, response.status);

  } catch (error) {
    // 4. Manejo de Errores de Red
    if (error instanceof ApiError) {
      // Re-lanza los errores ya manejados
      throw error;
    }
    // Para otros errores (TypeError, fallos de red, CORS, timeout)
    throw new NetworkError();
  }
}