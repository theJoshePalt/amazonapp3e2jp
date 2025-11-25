import { Text, View, TouchableOpacity, Alert,
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform } from "react-native";
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
      Alert.alert("Formulario válido", "¡Usuario listo para registrar!");
    };
  
    return (
      <KeyboardAvoidingView
        className="flex-1 bg-gray-100"
        behavior={Platform.OS === "ios" ? "padding" : "position"}
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
                REGISTER
              </Text>
  
              <CustomInput
                label="Usuario"
                placeholder="Elige un usuario"
                value={username}
                onChangeText={setUsername}
                error={errors.username}
              />

              <CustomInput
                label="Correo"
                placeholder="ejemplo@uets.edu"
                value={email}
                onChangeText={setEmail}
                error={errors.email}
              />
  
              <CustomInput
                label="Contraseña"
                placeholder="Ingresa una contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                error={errors.password}
              />
  
              <CustomInput
                label="Confirmar contraseña"
                placeholder="Repite tu contraseña"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                error={errors.confirmPassword}
              />
  
              <TouchableOpacity
                onPress={handleRegister}
                className="bg-green-600 px-6 py-3 rounded-2xl mt-3"
              >
                <Text className="text-white font-semibold text-lg text-center">
                  Registrarse
                </Text>
              </TouchableOpacity>
  
              <TouchableOpacity onPress={() => router.push("./Login")}>
                <Text className="text-green-600 mt-4 text-center">
                  Ya tienes cuenta? Inicia sesión.
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
  