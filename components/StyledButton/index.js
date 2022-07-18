import React from "react";
import { View, Pressable, Text } from "react-native";
import styles from "./styles";

const StyledButton = ({ type, content, onPress }) => {
  // const type = props.type;
  // const content = props.content;
  // const onPress = props.onPress;
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const color = type === "primary" ? "#fff" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, { backgroundColor }]} onPress={onPress}>
        <Text style={[styles.text, { color }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
