import { View, Text } from "react-native";
import { useAuth } from "../../lib/hooks/useAuth";
import AppTabBar from "../../components/ui/AppTabBar";

export default function DashboardScreen() {
  const { user } = useAuth();

  return (
    <View className="flex-1 justify-between bg-[#854221] p-6">
      
      {/* Contenido principal */}
      <View style={{ alignItems: "center", marginTop: 60 }}>
        <Text className="text-3xl font-bold text-[#280000] mb-3">
          Hola, {user?.username}
        </Text>

        <Text className="text-lg text-[#280000] opacity-80">
          Bienvenido a tu Dashboard
        </Text>
      </View>

      {/* Tab inferior */}
      <AppTabBar />
    </View>
  );
}
