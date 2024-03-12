// node_modules/@expo/vector-icons
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={styles.container}>
      <FontAwesome size={100} color="red" name="facebook" />
      <Text style={{ fontSize: 50 }}>facebook</Text>
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
