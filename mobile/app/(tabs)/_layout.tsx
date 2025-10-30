import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => (<Ionicons name="bar-chart" color={color} size={size} />) }} />
      <Tabs.Screen name="alerts" options={{ title: 'Alerts', tabBarIcon: ({ color, size }) => (<Ionicons name="notifications" color={color} size={size} />) }} />
      <Tabs.Screen name="flow" options={{ title: 'Flow', tabBarIcon: ({ color, size }) => (<Ionicons name="git-merge" color={color} size={size} />) }} />
      <Tabs.Screen name="pro" options={{ title: 'Pro', tabBarIcon: ({ color, size }) => (<Ionicons name="lock-closed" color={color} size={size} />) }} />
      <Tabs.Screen name="splash" options={{ href: null }} />
    </Tabs>
  );
}
