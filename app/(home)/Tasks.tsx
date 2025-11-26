import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { useTasks } from "../../lib/hooks/useTasks";
import { useTaskDelete } from "../../lib/hooks/useTaskDelete";
import { router } from "expo-router";
import AppTabBar from "../../components/ui/AppTabBar";
export default function TasksScreen() {
  const { tasks, loading, loadTasks } = useTasks();
  const { deleteTask } = useTaskDelete();

  const handleDelete = async (id: string) => {
    const ok = await deleteTask(id);
    if (ok) loadTasks();
  };

  if (loading)
    return (
      <View className="flex-1 justify-center items-center bg-[#280000]">
        <ActivityIndicator size="large" color="#ec9b75" />
      </View>
    );

  return (
    <View className="flex-1 p-4 bg-[#854221]">
      <Text className="text-3xl font-bold text-center mb-4 text-[#ec9b75]">
        Tareas
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            className="p-4 rounded-2xl mb-3"
            style={{
              backgroundColor: "#280000",
              borderWidth: 1,
              borderColor: "#ec9b75",
            }}
          >
            <Text className="text-2xl font-bold text-[#ec9b75]">
              {item.title}
            </Text>

            <Text className="text-[#ec9b75] opacity-80 mb-3">
              {item.description}
            </Text>

            <View className="flex-row justify-between">
              
              {/* EDITAR */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#854221",
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: "#ec9b75",
                }}
                onPress={() =>
                  router.push({
                    pathname: "/(home)/EditTask",
                    params: { id: item.id, title: item.title, desc: item.description },
                  })
                }
              >
                <Text className="text-[#ec9b75] font-bold">Editar</Text>
              </TouchableOpacity>

              {/* ELIMINAR */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#280000",
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: "red",
                }}
                onPress={() => handleDelete(item.id)}
              >
                <Text className="text-red-400 font-bold">Eliminar</Text>
              </TouchableOpacity>

            </View>

          </View>
        )}
      />
      <AppTabBar />
    </View>
  );
}
