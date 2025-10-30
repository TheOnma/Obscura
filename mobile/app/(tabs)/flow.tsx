import { View, Text } from 'react-native';
import { VictorySankey } from 'victory-native';

export default function FlowScreen() {
  const links = [
    { source: 'SOL', target: 'Jito', value: 10 },
    { source: 'SOL', target: 'DEX', value: 4 },
    { source: 'DEX', target: 'Jito', value: 2 },
  ];
  return (
    <View className="flex-1 bg-black p-4">
      <Text className="text-white text-xl mb-4">Smart Money Flow</Text>
      <VictorySankey data={{ links }} />
      <Text className="text-white mt-4">SOL → Jito: 10</Text>
    </View>
  );
}
