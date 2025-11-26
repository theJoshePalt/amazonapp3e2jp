import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function HomeLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#280000" }}>

      {/* ENCABEZADO */}
      <View
        style={{
          paddingTop: 60,
          paddingBottom: 20,
          backgroundColor: "#280000",
          alignItems: "center",
          borderBottomWidth: 1,
          borderColor: "#854221",
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: "#ec9b75",
          }}
        >
          Bonjour TAREAS
        </Text>
      </View>

      {/* CHILDREN (pantallas como Dashboard, Tasks, CreateTask) */}
      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}
