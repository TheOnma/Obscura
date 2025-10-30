import { View, Text } from 'react-native';
import { VictoryLine } from 'victory-native';

export default function AlertsScreen() {
  const data = Array.from({ length: 12 }).map((_, i) => ({ x: i, y: Math.random() * 10 }));
  return (
    <View className="flex-1 bg-black p-4">
      <Text className="text-white text-xl mb-4">MEV / hour</Text>
      <VictoryLine data={data} style={{ data: { stroke: '#ff4d4f' } }} />
    </View>
  );
}
