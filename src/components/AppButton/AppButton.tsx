import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import { styles } from "./styles";

export interface AppButtonProps {
  title: string;
  onPress?: () => void;
  color?: keyof typeof colors;
}

const AppButton = ({ title, onPress, color = "primary" }: AppButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
