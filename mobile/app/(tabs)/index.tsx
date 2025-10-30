import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { WhaleChart } from '../../components/ChartWrapper';
import { subscribeToEvents } from '../../services/solana';

export default function HomeScreen() {
  const [whales, setWhales] = useState<Array<{ wallet: string; amount: number }>>([]);
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const unsub = subscribeToEvents((event) => {
      if (event.type === 'whale') {
        setWhales((prev) => {
          const next = [...prev, { wallet: event.wallet?.slice(0, 4) + '…', amount: Number(event.amount || 0) }];
          return next.slice(-5);
        });
        setList((prev) => [{ ts: Date.now(), ...event }, ...prev].slice(0, 20));
      }
    });
    return () => unsub?.();
  }, []);

  return (
    <View className="flex-1 bg-black p-4 gap-4">
      <Text className="text-white text-xl">Top 5 Whales</Text>
      <WhaleChart data={whales} />
      <Text className="text-white text-xl mt-4">Live</Text>
      <FlatList
        data={list}
        keyExtractor={(item) => String(item.ts)}
        renderItem={({ item }) => (
          <Text className="text-white">🐋 {item.wallet} → {item.destination || ''} {item.amount}</Text>
        )}
      />
    </View>
  );
}
