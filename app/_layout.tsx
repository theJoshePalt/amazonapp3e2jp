import { Stack } from "expo-router";
import { AuthProvider } from "../lib/providers/AuthProvider";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

export default function RootLayout() {

  useEffect(() => {
    // Oculta completamente los botones
    NavigationBar.setVisibilityAsync("hidden");

    // Evita que vuelvan a aparecer
    NavigationBar.setBehaviorAsync("overlay-swipe");
  }, []);

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}
