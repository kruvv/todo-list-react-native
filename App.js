import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Form from "./components/Form";
import Header from "./components/Haeder";
import ListItem from "./components/ListItem";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Выучить JavaScript", key: "1" },
    { text: "Решить тесты  JS", key: "2" },
    { text: "Переделать сервер на Node.js", key: "3" },
    { text: "Добавить в проект фреймворк Express", key: "4" },
    { text: "Написать запрос к тестовой базе Postgresql", key: "5" },
    { text: "Собрать Docker контейнер", key: "6" },
  ]);

  const renderItem = ({ item }) => (
    <ListItem element={item} deleteHandler={deleteHandler} />
  );

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [{ text: text, key: String(new Date().getTime()) }, ...list];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems(listOfItems.filter((item) => item.key !== key));
  };

  const scrollToEnd = () => {
    const wait = new Promise((resolve) => setTimeout(resolve, 0));
    wait.then(() => {
      this.flatList.scrollToEnd({ animated: true });
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={renderItem}
          onScroll={scrollToEnd}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
});
