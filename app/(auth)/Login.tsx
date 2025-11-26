import { Text, View, TouchableOpacity, Alert,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import CustomInput from "../../components/ui/CustomInput";
import { LoginSchema } from "../../lib/schemas/LoginSchema";
import { useAppLogin } from "../../lib/hooks/useAppLogin";

export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const { authenticate, loading } = useAppLogin();

  const handleLogin = async () => {
    const result = LoginSchema.safeParse({ email, password });

    if (!result.success) {
      const formErrors: any = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0];
        formErrors[field] = err.message;
      });
      setErrors(formErrors);
      return;
    }

    const ok = await authenticate(email, password);

    if (!ok) {
      Alert.alert("Error", "Credenciales incorrectas o usuario no existe");
      return;
    }

    router.replace("/(home)/Dashboard");
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ backgroundColor: "#280000" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="w-full">

            {/* INPUTS */}
            <CustomInput
              label="Correo"
              placeholder="ejemplo@uets.edu"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
              darkMode // 🔥 Nueva prop que agregarás en CustomInput
            />

            <CustomInput
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              error={errors.password}
              darkMode
            />

            {/* BOTÓN */}
            <TouchableOpacity
              onPress={handleLogin}
              className="px-6 py-3 rounded-2xl mt-5"
              style={{ backgroundColor: "#854221" }}
            >
              <Text className="text-white font-semibold text-lg text-center">
                Iniciar sesión
              </Text>
            </TouchableOpacity>

            {/* LINK */}
            <TouchableOpacity onPress={() => router.push("./Register")}>
              <Text 
                className="mt-4 text-center"
                style={{ color: "#ec9b75" }}
              >
                ¿No tienes cuenta? Regístrate.
              </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
