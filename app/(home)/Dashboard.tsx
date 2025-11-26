import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../lib/hooks/useAuth";

export default function DashboardScreen() {
  const { user, logout } = useAuth();

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-3xl font-bold text-gray-800 mb-3">
        Hola, {user?.username}
      </Text>

      <Text className="text-lg text-gray-600 mb-10">
        Bienvenido a tu Dashboard
      </Text>

      <TouchableOpacity
        className="bg-red-600 px-6 py-3 rounded-xl"
        onPress={logout}
      >
        <Text className="text-white text-lg font-semibold">Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
