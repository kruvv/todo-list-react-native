import React from "react";
import { StyleSheet, TouchableHighlight, View, Text } from "react-native";

export default function ListItem({ element }) {
  return (
   <TouchableHighlight>
       <Text style={styles.text}>{element.text}</Text>
   </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    marginTop: 20,
    width: '60%',
    marginLeft: '20%'
}
});
