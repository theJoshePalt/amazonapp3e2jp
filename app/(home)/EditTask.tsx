import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useState } from "react";
import { useTaskEdit } from "../../lib/hooks/useTaskEdit";
import AppTabBar from "../../components/ui/AppTabBar";
export default function EditTaskScreen() {
  const params = useLocalSearchParams();
  const { id, title, desc } = params;

  const [newTitle, setNewTitle] = useState(title as string);
  const [newDesc, setNewDesc] = useState(desc as string);

  const { editTask } = useTaskEdit();

  const handleEdit = async () => {
    const ok = await editTask(id as string, newTitle, newDesc);

    if (!ok) {
      Alert.alert("Error", "No se pudo editar");
      return;
    }

    Alert.alert("Actualizado", "La tarea se editó correctamente");
    router.push("/(home)/Tasks");
  };

  return (
    <View className="flex-1 p-6 bg-[#854221]">

      <Text className="text-3xl text-center font-bold text-[#ec9b75] mb-4">
        Editar Tarea
      </Text>

      <TextInput
        value={newTitle}
        onChangeText={setNewTitle}
        style={{
          backgroundColor: "#280000",
          color: "#ec9b75",
          padding: 16,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "#ec9b75",
          marginBottom: 12,
        }}
      />

      <TextInput
        value={newDesc}
        onChangeText={setNewDesc}
        multiline
        style={{
          backgroundColor: "#280000",
          color: "#ec9b75",
          padding: 16,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "#ec9b75",
          marginBottom: 12,
          minHeight: 120,
        }}
      />

      <TouchableOpacity
        onPress={handleEdit}
        className="py-3 rounded-xl mt-4"
        style={{
          backgroundColor: "#ec9b75",
        }}
      >
        <Text className="text-[#280000] text-center font-bold text-lg">
          Guardar cambios
        </Text>
      </TouchableOpacity>
        <AppTabBar />
    </View>
  );
}
