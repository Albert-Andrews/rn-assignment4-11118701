import { View } from "react-native";

export default function LongIn({ navigation }) {
  return (
    <View>
      <Text onPress={() => navigation.navigate("Home")}>Heyy</Text>
    </View>
  );
}
