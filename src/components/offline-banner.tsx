import Ionicons from '@expo/vector-icons/Ionicons';
import { useNetInfo } from '@react-native-community/netinfo';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function OfflineBanner() {
  const { isConnected } = useNetInfo();
  const insets = useSafeAreaInsets();

  if (isConnected !== false) return null;

  return (
    <View
      style={{
        position: 'absolute',
        top: insets.top,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#333',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        gap: 6,
      }}
      pointerEvents="none"
    >
      <Ionicons name="cloud-offline-outline" size={14} color="#FFFFFF" />
      <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: '600' }}>
        No internet connection
      </Text>
    </View>
  );
}
