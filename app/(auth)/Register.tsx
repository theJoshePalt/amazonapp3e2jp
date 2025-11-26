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
import { RegisterSchema } from "../../lib/schemas/RegisterSchema";

export default function RegisterScreen() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<any>({});

  const handleRegister = () => {
    const result = RegisterSchema.safeParse({
      username,
      email,
      password,
      confirmPassword,
    });

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

            <CustomInput
              label="Usuario"
              placeholder="Tu nombre"
              value={username}
              onChangeText={setUsername}
              error={errors.username}
              darkMode
            />

            <CustomInput
              label="Correo"
              placeholder="ejemplo@uets.edu"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
              darkMode
            />

            <CustomInput
              label="Contraseña"
              placeholder="Contraseña segura"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              error={errors.password}
              darkMode
            />

            <CustomInput
              label="Confirmar contraseña"
              placeholder="Repite tu contraseña"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              error={errors.confirmPassword}
              darkMode
            />

            <TouchableOpacity
              onPress={handleRegister}
              className="px-6 py-3 rounded-2xl mt-5"
              style={{ backgroundColor: "#854221" }}
            >
              <Text className="text-white font-semibold text-lg text-center">
                Registrarse
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("./Login")}>
              <Text 
                className="mt-4 text-center"
                style={{ color: "#ec9b75" }}
              >
                ¿Ya tienes cuenta? Inicia sesión.
              </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
