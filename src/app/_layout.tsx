import { CarrinhoProvider } from "../context_car/carrinho_context";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <CarrinhoProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </CarrinhoProvider>
  );
}