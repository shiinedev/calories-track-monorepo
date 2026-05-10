import { ReplaceLink } from "@/components/replace-link";
import { Colors } from "@/constants/theme";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <ReplaceLink to="login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});
