import { View, Text, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, TextInput, Platform } from "react-native";
import { useState } from "react";
import { useTaskCreate } from "../../lib/hooks/useTaskCreate";
import { TaskSchema } from "../../lib/schemas/TaskSchema";
import { router } from "expo-router";
import AppTabBar from "../../components/ui/AppTabBar";
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
      className="flex-1 bg-[#854221]"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ padding: 20 }}>

        <Text className="text-3xl font-bold text-center text-[#ec9b75] mb-6">
          Crear Tarea
        </Text>

        {/* TITULO */}
        <Text className="font-semibold text-[#ec9b75] mb-1">Título</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={{
            backgroundColor: "#280000",
            color: "#ec9b75",
            padding: 14,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "#ec9b75",
            marginBottom: 4,
          }}
          placeholder="Título de la tarea"
          placeholderTextColor="#b88a6f"
        />
        {errors.title && (
          <Text className="text-red-400 mb-3">{errors.title}</Text>
        )}

        {/* DESCRIPCIÓN */}
        <Text className="font-semibold text-[#ec9b75] mb-1">Descripción</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={{
            backgroundColor: "#280000",
            color: "#ec9b75",
            padding: 14,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "#ec9b75",
            marginBottom: 4,
            minHeight: 120,
          }}
          placeholder="Descripción detallada"
          placeholderTextColor="#b88a6f"
          multiline
        />
        {errors.description && (
          <Text className="text-red-400 mb-3">{errors.description}</Text>
        )}

        {/* BOTÓN */}
        <TouchableOpacity
          onPress={handleCreate}
          disabled={loading}
          style={{
            backgroundColor: "#ec9b75",
            paddingVertical: 12,
            borderRadius: 16,
            marginTop: 12,
          }}
        >
          <Text className="text-[#280000] text-center font-bold text-lg">
            {loading ? "Creando..." : "Crear Tarea"}
          </Text>
        </TouchableOpacity>

        
      </ScrollView>
      <AppTabBar />
    </KeyboardAvoidingView>
  );
}
