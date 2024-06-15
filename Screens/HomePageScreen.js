import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function HomePageScreen({ route }) {
  //function to watch the inputed values
  const { name, email } = route.params;

  return (
    <SafeAreaView style={style.container}>
      <View style={style.main}>
        <View>
          <Text style={name}>Welcome,{name} </Text>
          <Text style={email}>{email} </Text>
          <View></View>
        </View>
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
  name:{
    fontSize:24,
    color:'#0D0D26'

  }
});
