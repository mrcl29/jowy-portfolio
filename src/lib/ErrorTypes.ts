// src/lib/ErrorTypes.ts

/** * Error base para todos los errores de la API.
 * Permite manejar errores con un status code específico.
 */
export class ApiError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    // Esto asegura que `instanceof ApiError` funcione correctamente
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

/** Error específico para problemas de red o fallos antes de recibir respuesta. */
export class NetworkError extends Error {
  constructor(message = 'Error de conexión de red o timeout.') {
    super(message);
    this.name = 'NetworkError';
    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}