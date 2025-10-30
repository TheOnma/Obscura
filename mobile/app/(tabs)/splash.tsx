import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { connectPhantom } from '../../services/wallet';

export default function SplashScreen() {
  const router = useRouter();
  const onConnect = async () => {
    await connectPhantom();
    router.replace('/(tabs)/');
  };
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-2xl mb-6">Obscura Live</Text>
      <Text className="text-white mb-8">Loading alpha…</Text>
      <Pressable className="bg-purple-600 px-6 py-3 rounded-lg" onPress={onConnect}>
        <Text className="text-white">Connect Phantom</Text>
      </Pressable>
    </View>
  );
}
