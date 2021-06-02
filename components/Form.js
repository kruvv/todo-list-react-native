import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

export default function Form({ addHandler }) {
  const [text, setText] = useState("");

  const onChange = (text) => {
    setText(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={text}
        placeholder="Введите название задачи"
      />
      <View>
        <TouchableOpacity
          onPress={() => {
            addHandler(text);
            setText("");
          }}
        >
          <Text style={styles.text}>ДОБАВИТЬ ЗАДАЧУ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#ff0000",
    borderWidth: 1,
    width: "80%",
    marginLeft: "10%",
    color: "white",
  },
});
