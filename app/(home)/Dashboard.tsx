import { View, Text } from "react-native";
import { useAuth } from "../../lib/hooks/useAuth";
import AppTabBar from "../../components/ui/AppTabBar";

export default function DashboardScreen() {
  const { user } = useAuth();

  return (
    <View className="flex-1 justify-between bg-[#854221] p-6">
      
      {/* Contenido principal */}
      <View style={{ width: "100%", paddingHorizontal: 20, marginTop: 60 }}>

        {/* TITULO */}
        <Text
          style={{
            fontSize: 34,
            fontWeight: "bold",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          Hola, {user?.username}
        </Text>

        {/* SUBTÍTULO */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "#ec9b75",
            textAlign: "center",
            marginBottom: 25,
          }}
        >
          ¿Qué tenemos pendiente?
        </Text>

        {/* LISTA DE INDICACIONES */}
        <View style={{ gap: 10 }}>
    
        <Text
          style={{
            fontSize: 16,
            color: "#ec9b75",
            backgroundColor: "#280000",
            padding: 12,
            borderRadius: 12,
          }}
        >
          • Pulsa <Text style={{ color: "#ffffff", fontWeight: "bold" }}>TAREAS</Text> para ver lo que has guardado.
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#ec9b75",
            backgroundColor: "#280000",
            padding: 12,
            borderRadius: 12,
          }}
        >
          • Pulsa <Text style={{ color: "#ffffff", fontWeight: "bold" }}>CREAR</Text> para añadir algún deber.
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#ec9b75",
            backgroundColor: "#280000",
            padding: 12,
            borderRadius: 12,
          }}
        >
          • Dale a <Text style={{ color: "#ffffff", fontWeight: "bold" }}>SALIR</Text> para cerrar la app.
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#ec9b75",
            backgroundColor: "#280000",
            padding: 12,
            borderRadius: 12,
          }}
        >
          • Regresa a <Text style={{ color: "#ffffff", fontWeight: "bold" }}>HOME</Text> para ver las instrucciones otra vez.
        </Text>
        </View>
      </View>

      {/* Tab inferior */}
      <AppTabBar />
    </View>
  );
}
