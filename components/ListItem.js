import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ element, deleteHandler }) {
  return (
    element.text !== '' && (
      <TouchableOpacity onPress={() => deleteHandler(element.key)}>
        <Text style={styles.text}>{element.text}</Text>
      </TouchableOpacity>
    )
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 30,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    marginTop: 20,
    width: "60%",
    marginLeft: "20%",
  },
});
