import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text style={{ fontSize: 64 }}>🚀</Text>
      <Text className="mt-4 text-2xl font-bold text-foreground">Ship!</Text>
    </View>
  );
}
