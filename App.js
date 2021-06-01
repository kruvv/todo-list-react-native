import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Haeder";
import ListItem from "./components/ListItem";


export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Выучить JavaScript", index: 1 },
    { text: "Решить тесты на Java", index: 2 },
    { text: "Переделать сервер на Node.js", index: 3 },
    { text: "Добавить в проект фреймворк Express", index: 4 },
    { text: "Написать запрос к тестовой базе Postgresql", index: 5 },
    { text: "Собрать Docker контейнер", index: 6 },
  ]);

  const renderItem = ({ item }) => <ListItem element={item} />;

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
