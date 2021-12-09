import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function SearchBar({ setQuery }) {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#ffffff",
        margin: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#BA181B",
      }}
    >
      <TextInput
        onChangeText={(value) => setQuery(value)}
        placeholder="Search for Blood Type!"
        placeholderTextColor="#BA181B"
        style={{ fontSize: 15, color: "#BA181B", paddingHorizontal: 5 }}
      />
    </View>
  );
}
