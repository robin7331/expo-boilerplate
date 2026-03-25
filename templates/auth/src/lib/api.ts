import { Env } from '../../env';
import { Storage } from './storage';

const AUTH_TOKEN_KEY = 'auth_token';

export function getAuthToken(): string | undefined {
  return Storage.getString(AUTH_TOKEN_KEY);
}

export function setAuthToken(token: string): void {
  Storage.set(AUTH_TOKEN_KEY, token);
}

export function clearAuthToken(): void {
  Storage.delete(AUTH_TOKEN_KEY);
}

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const token = getAuthToken();
  const url = `${Env.API_URL}${path}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...((options.headers as Record<string, string>) ?? {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new ApiError(
      response.status,
      error.message ?? 'Request failed',
      error.errors,
    );
  }

  return response.json();
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public errors?: Record<string, string[]>,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
