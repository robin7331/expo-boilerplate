import { config } from 'dotenv';
import { type ExpoConfig } from 'expo/config';
import path from 'path';

config({ path: path.resolve(__dirname, '.env.production') });
config({ path: path.resolve(__dirname, '.env') });

const appConfig: ExpoConfig = {
  name: 'Expo Boilerplate',
  slug: 'expo-boilerplate',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'expo-boilerplateapp',
  userInterfaceStyle: 'automatic',
  ios: {
    icon: './assets/images/icon.png',
    bundleIdentifier: 'com.example.expoboilerplate',
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    package: 'com.example.expoboilerplate',
    adaptiveIcon: {
      backgroundColor: '#FFFFFF',
      foregroundImage: './assets/images/android-icon-foreground.png',
      backgroundImage: './assets/images/android-icon-background.png',
      monochromeImage: './assets/images/android-icon-monochrome.png',
    },
  },
  splash: {
    image: './assets/images/icon.png',
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF',
  },
  web: {
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#FFFFFF',
        ios: { image: './assets/images/icon.png', imageWidth: 200 },
        android: { image: './assets/images/icon.png', imageWidth: 150 },
      },
    ],
    'expo-secure-store',
    'expo-sharing',
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    router: {},
    eas: {
      projectId: 'YOUR_EAS_PROJECT_ID',
    },
  },
};

export default { expo: appConfig };
