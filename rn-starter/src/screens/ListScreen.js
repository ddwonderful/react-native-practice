import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const listRenderer = ({ item }) => (
  <Text style={styles.listItem}>{item.name}</Text>
);
const keyExtractor = data => data.name;

const nameDataGenerator = value => ({
  name: `Friend #${value}`
});

const data = [
  nameDataGenerator(1),
  nameDataGenerator(2),
  nameDataGenerator(3),
  nameDataGenerator(4),
  nameDataGenerator(5),
  nameDataGenerator(6),
  nameDataGenerator(7),
  nameDataGenerator(8),
  nameDataGenerator(9)
];

const ListScreen = () => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={listRenderer}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 5
  }
});

export default ListScreen;
