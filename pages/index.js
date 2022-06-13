// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-base">Welcome to Expo + Next.js 👋</Text>
      </View>
    </TailwindProvider>
  );
}
