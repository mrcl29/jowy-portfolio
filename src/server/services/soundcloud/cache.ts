// src/server/services/soundcloud/cache.ts
import type { CachedItem } from "@/types/cache.d";

/**
 * Caché en memoria del servidor para almacenar respuestas de la API.
 * Usamos un Map para poder almacenar múltiples entradas bajo diferentes claves.
 */
const apiCache = new Map<string, CachedItem<any>>();

/**
 * Obtiene un dato de la caché si es válido.
 * @param key La clave única para el dato cacheado.
 * @returns El dato si se encuentra y no ha expirado, de lo contrario null.
 */
export function getFromCache<T>(key: string): T | null {
  const cached = apiCache.get(key);
  if (cached && cached.expiresAt > Date.now() / 1000) {
    console.log(`[Cache] HIT para la clave: ${key}`);
    return cached.data as T;
  }
  console.log(`[Cache] MISS para la clave: ${key}`);
  return null;
}

/**
 * Almacena un dato en la caché con una duración específica.
 * @param key La clave única para el dato cacheado.
 * @param data El dato a cachear.
 * @param durationSeconds La duración en segundos que el dato debe permanecer en caché.
 */
export function setInCache<T>(
  key: string,
  data: T,
  durationSeconds: number
): void {
  const expiresAt = Date.now() / 1000 + durationSeconds;
  apiCache.set(key, { data, expiresAt });
  console.log(
    `[Cache] SET para la clave: ${key}. Duración: ${durationSeconds}s`
  );
}
