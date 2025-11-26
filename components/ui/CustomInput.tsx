import React from "react";
import { View, Text, TextInput } from "react-native";

interface Props {
  label?: string;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
  darkMode?: boolean; // 🔥 nueva propiedad
}

export default function CustomInput({
  label,
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  error,
  darkMode = false, // por defecto es falso
}: Props) {
  const bgColor = darkMode ? "#3a1a1a" : "#ffffff";
  const borderColor = error ? "#ff4d4d" : darkMode ? "#ffffff" : "#cccccc";
  const textColor = darkMode ? "#ffffff" : "#333333";
  const placeholderColor = darkMode ? "#b8b8b8" : "#888888";
  const labelColor = darkMode ? "#ffffff" : "#333333";

  return (
    <View className="mb-4 w-full">
      {label && (
        <Text
          className="mb-1 font-semibold"
          style={{ color: labelColor }}
        >
          {label}
        </Text>
      )}

      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={{
          width: "100%",
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 12,
          borderWidth: 1.5,
          backgroundColor: bgColor,
          color: textColor,
          borderColor: borderColor,
        }}
        placeholderTextColor={placeholderColor}
      />

      {error && (
        <Text className="text-red-500 mt-1 text-sm">{error}</Text>
      )}
    </View>
  );
}
