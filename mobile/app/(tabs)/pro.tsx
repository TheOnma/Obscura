import { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { BlurView } from 'expo-blur';
import { WhaleChart } from '../../components/ChartWrapper';

export default function ProScreen() {
  const [pro, setPro] = useState(false);
  const sample = [
    { wallet: 'A', amount: 5 },
    { wallet: 'B', amount: 3 },
  ];
  return (
    <View className="flex-1 bg-black p-4">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-white text-xl">Pro</Text>
        <Switch value={pro} onValueChange={setPro} />
      </View>
      <View>
        {!pro && (
          <BlurView intensity={70} tint="dark" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
        )}
        <WhaleChart data={sample} />
        {!pro && <Text className="text-white mt-2">Go Pro $10/mo</Text>}
      </View>
    </View>
  );
}
