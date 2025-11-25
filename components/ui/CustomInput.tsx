import React from "react";
import { View, Text, TextInput } from "react-native";

interface Props {
  label?: string;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
}

export default function CustomInput({
  label,
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  error,
}: Props) {
  return (
    <View className="mb-4 w-full">
      {label && (
        <Text className="text-gray-700 mb-1 font-semibold">{label}</Text>
      )}

      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        className={`w-full px-4 py-3 rounded-xl border 
          ${error ? "border-red-500" : "border-gray-300"} 
          bg-white text-gray-800`}
        placeholderTextColor="#888"
      />

      {/* Mostrar el error debajo del input */}
      {error && (
        <Text className="text-red-500 mt-1 text-sm">{error}</Text>
      )}
    </View>
  );
}
