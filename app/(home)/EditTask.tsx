import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useState } from "react";
import { useTaskEdit } from "../../lib/hooks/useTaskEdit";

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
    <View className="flex-1 p-6 bg-white">
      <Text className="text-2xl font-bold text-center mb-4">Editar Tarea</Text>

      <TextInput
        className="bg-gray-200 p-4 rounded-xl mb-3"
        value={newTitle}
        onChangeText={setNewTitle}
      />

      <TextInput
        className="bg-gray-200 p-4 rounded-xl mb-3"
        value={newDesc}
        onChangeText={setNewDesc}
        multiline
      />

      <TouchableOpacity
        onPress={handleEdit}
        className="bg-blue-600 py-3 rounded-xl mt-4"
      >
        <Text className="text-white text-center font-semibold">Guardar cambios</Text>
      </TouchableOpacity>
    </View>
  );
}
