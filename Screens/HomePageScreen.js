import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function HomePageScreen() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.main}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFD",
  },

  main: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
});
