import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Dan";

  return (
    <View>
      <Text style={styles.textHeader}>Getting started with React Native!</Text>
      <Text style={styles.textSubheader}>My name is {name}...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 45
  },
  textSubheader: {
    fontSize: 20
  }
});

export default ComponentsScreen;
