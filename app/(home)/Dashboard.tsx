import { View, Text, TouchableOpacity } from "react-native";
import { useAppLogout } from "../../lib/hooks/useAppLogout";
import { router } from "expo-router";

export default function Dashboard() {
  const { logout } = useAppLogout();
  const handleLogout = () => {
    logout();
    router.replace("/Login"); // lo manda al login, reemplazando la historia
  };

  return (
    <View className="flex-1 justify-center items-center p-6 bg-white">
      <Text className="text-3xl font-bold mb-6">Dashboard</Text>

      <TouchableOpacity
        onPress={handleLogout}
        className="bg-red-600 px-6 py-3 rounded-2xl"
      >
        <Text className="text-white text-lg font-semibold">Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
