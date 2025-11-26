import { View, TouchableOpacity, Text } from "react-native";
import { router } from "expo-router";
import { useAppLogout } from "../../lib/hooks/useAppLogout";

export default function AppTabBar() {
  const { logout } = useAppLogout();

  const handleLogout = () => {
    logout();
    router.replace("/Login");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#280000",
        paddingVertical: 14,
        borderTopWidth: 1,
        borderColor: "#854221",
      }}
    >
      <TouchableOpacity onPress={() => router.push("/(home)/Dashboard")}>
        <Text style={{ color: "#ec9b75", fontSize: 15, fontWeight: "bold" }}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(home)/Tasks")}>
        <Text style={{ color: "#ec9b75", fontSize: 15, fontWeight: "bold" }}>
          Tareas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(home)/CreateTask")}>
        <Text style={{ color: "#ec9b75", fontSize: 15, fontWeight: "bold" }}>
          Crear
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout}>
        <Text style={{ color: "#ec9b75", fontSize: 15, fontWeight: "bold" }}>
          Salir
        </Text>
      </TouchableOpacity>
    </View>
  );
}
