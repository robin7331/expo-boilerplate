import { apiRequest, setAuthToken, clearAuthToken } from '@/lib/api';
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
} from './types';

export async function login(data: LoginRequest): Promise<AuthResponse> {
  const response = await apiRequest<AuthResponse>('/api/v1/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  setAuthToken(response.token);
  return response;
}

export async function register(data: RegisterRequest): Promise<AuthResponse> {
  const response = await apiRequest<AuthResponse>('/api/v1/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  setAuthToken(response.token);
  return response;
}

export async function logout(): Promise<void> {
  try {
    await apiRequest('/api/v1/auth/logout', { method: 'POST' });
  } finally {
    clearAuthToken();
  }
}

export async function getUser(): Promise<User> {
  return apiRequest<User>('/api/v1/auth/user');
}
