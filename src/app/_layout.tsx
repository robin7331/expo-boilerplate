import '../global.css';

import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  SafeAreaListener,
} from 'react-native-safe-area-context';
import { HeroUINativeProvider } from 'heroui-native';
import { Uniwind } from 'uniwind';

import { QueryProvider } from '@/lib/query';
import { OfflineBanner } from '@/components/offline-banner';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaListener
          onChange={({ insets }) => {
            Uniwind.updateInsets(insets);
          }}
        >
          <HeroUINativeProvider>
            <QueryProvider>
              <Stack
                screenOptions={{
                  headerShown: false,
                }}
              />
              <OfflineBanner />
            </QueryProvider>
          </HeroUINativeProvider>
        </SafeAreaListener>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
