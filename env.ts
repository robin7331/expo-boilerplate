import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra ?? {};

export const Env = {
  APP_ENV: (process.env.EXPO_PUBLIC_APP_ENV ?? 'development') as
    | 'development'
    | 'staging'
    | 'production',
  API_URL: process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3000',
  ...extra,
} as const;
