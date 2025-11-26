import { Stack } from "expo-router";
import { AuthProvider } from "../lib/providers/AuthProvider";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}
