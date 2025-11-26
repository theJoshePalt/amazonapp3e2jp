import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../lib/hooks/useAuth";
import { router } from "expo-router";

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
        onPress={() => router.push("/(home)/Tasks")}
        className="bg-blue-600 px-6 py-3 rounded-xl mt-8"
      >
        <Text className="text-white text-lg font-semibold">
          Ver tareas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/(home)/CreateTask")}
        className="bg-green-600 px-6 py-3 rounded-xl mt-6"
      >
        <Text className="text-white text-lg font-semibold">
          Crear nueva tarea
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        className="bg-red-600 px-6 py-3 rounded-xl"
        onPress={logout}
      >
        <Text className="text-white text-lg font-semibold">Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
