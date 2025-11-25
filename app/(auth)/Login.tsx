import { Text, View, TouchableOpacity, Alert,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import CustomInput from "../../components/ui/CustomInput";
import { LoginSchema } from "../../lib/schemas/LoginSchema";

export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleLogin = () => {
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

    setErrors({});
    Alert.alert("Todo en orden. Bienvenido");
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-100"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="w-full">
            <Text className="text-3xl font-bold text-gray-800 mb-8 text-center">
              LOGIN
            </Text>

            <CustomInput
              label="Correo"
              placeholder="ejemplo@uets.edu"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
            />

            <CustomInput
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              error={errors.password}
            />

            <TouchableOpacity
              onPress={handleLogin}
              className="bg-blue-600 px-6 py-3 rounded-2xl mt-3"
            >
              <Text className="text-white font-semibold text-lg text-center">
                Iniciar sesión
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("./Register")}>
              <Text className="text-blue-600 mt-4 text-center">
                ¿No tienes cuenta? Regístrate.
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
