import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <Text style={styles.text}>What a NICE APP! I mean it - I love the app</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
