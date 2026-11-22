import { CarrinhoProvider } from "../context_car/carrinho_context";
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <CarrinhoProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </CarrinhoProvider>
    
  );
}
