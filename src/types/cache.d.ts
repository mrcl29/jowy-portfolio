/**
 * Interfaz para un objeto cacheado con tiempo de expiración.
 */
export interface CachedItem<T> {
  data: T;
  expiresAt: number; // Timestamp en segundos
}
