import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

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
        <Button
          color="red"
          title="Добавить задачу"
          onPress={() => {
            addHandler(text);
            setText("");
          }}
        />
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
  },
});
