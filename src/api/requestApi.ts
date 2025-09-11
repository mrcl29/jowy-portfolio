// src/api/requestApi.ts
import { type Method } from "@/constants/types";

export default async function requestApi<T = unknown>(
  url: string,
  method: Method = "GET",
  body?: Record<string, unknown>,
  extraHeaders: HeadersInit = {}
): Promise<T> {
  try {
    const options: RequestInit = {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...extraHeaders,
      },
    };

    if (body && method !== "GET") {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Request error:", error.message);
      throw error; // más consistente
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
}
