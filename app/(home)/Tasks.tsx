import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { useTasks } from "../../lib/hooks/useTasks";
import { useTaskDelete } from "../../lib/hooks/useTaskDelete";
import { router } from "expo-router";

export default function TasksScreen() {
  const { tasks, loading, loadTasks } = useTasks();
  const { deleteTask } = useTaskDelete();

  const handleDelete = async (id: string) => {
    const ok = await deleteTask(id);
    if (ok) loadTasks();
  };

  if (loading)
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-3xl font-bold text-center mb-4">Tareas</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-gray-200 p-4 rounded-xl mb-3">
            <Text className="text-xl font-bold">{item.title}</Text>
            <Text className="text-gray-600 mb-2">{item.description}</Text>

            <View className="flex-row justify-between mt-2">
              <TouchableOpacity
                className="bg-blue-600 px-4 py-2 rounded-xl"
                onPress={() =>
                  router.push({
                    pathname: "/(home)/EditTask",
                    params: { id: item.id, title: item.title, desc: item.description },
                  })
                }
              >
                <Text className="text-white">Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-red-600 px-4 py-2 rounded-xl"
                onPress={() => handleDelete(item.id)}
              >
                <Text className="text-white">Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
