import { View, Text, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, TextInput, Platform } from "react-native";
import { useState } from "react";
import { useTaskCreate } from "../../lib/hooks/useTaskCreate";
import { TaskSchema } from "../../lib/schemas/TaskSchema";
import { router } from "expo-router";

export default function CreateTaskScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<any>({});

  const { createTask, loading } = useTaskCreate();

  const handleCreate = async () => {
    const result = TaskSchema.safeParse({ title, description });

    if (!result.success) {
      const newErrors: any = {};
      result.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    const ok = await createTask(title, description);

    if (!ok) {
      Alert.alert("Error", "No se pudo crear la tarea");
      return;
    }

    Alert.alert("Éxito", "Tarea creada correctamente");
    router.push("/(home)/Tasks");
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-100"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text className="text-3xl font-bold text-center text-black mb-6">
          Crear Tarea
        </Text>

        <Text className="font-semibold text-black mb-1">Título</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          className="bg-white p-3 rounded-xl mb-1"
          placeholder="Título de la tarea"
        />
        {errors.title && (
          <Text className="text-red-600 mb-3">{errors.title}</Text>
        )}

        <Text className="font-semibold text-black mb-1">Descripción</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          className="bg-white p-3 rounded-xl mb-1"
          placeholder="Descripción detallada"
          multiline
        />
        {errors.description && (
          <Text className="text-red-600 mb-3">{errors.description}</Text>
        )}

        <TouchableOpacity
          onPress={handleCreate}
          disabled={loading}
          className="bg-green-600 py-3 rounded-xl mt-4"
        >
          <Text className="text-white text-center font-semibold text-lg">
            {loading ? "Creando..." : "Crear Tarea"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
