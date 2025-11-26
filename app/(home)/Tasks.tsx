import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useTasks } from "../../lib/hooks/useTasks";

export default function TasksScreen() {
  const { tasks, loading } = useTasks();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#2563eb" />
        <Text className="mt-4 text-gray-600">Cargando tareas...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 p-4">

      <Text className="text-3xl font-bold text-gray-800 mb-4">Tus tareas</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-white p-4 mb-3 rounded-xl shadow">
            <Text className="text-xl font-bold text-gray-800">{item.title}</Text>
            <Text className="text-gray-600 mt-1">{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}
