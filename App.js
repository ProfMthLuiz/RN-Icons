// node_modules/@expo/vector-icons
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <FontAwesome size={50} color="brown" name="envelope" />
      <FontAwesome size={50} color="yellow" name="eye" />
      <AntDesign name="stepforward" size={50} color="black" />
      <Ionicons name="md-checkmark-circle" size={50} color="green" />
      <FontAwesome size={50} color="red" name="facebook" />
      <Text style={{ fontSize: 50 }}>acebook</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
