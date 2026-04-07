import { Colors } from "@/constants/theme";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export const Add = () => {
  return (
    <View style={styles.container}>
      <Text>Add Page</Text>
      <Link href="/login">
        <Text>Go to Login</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});

export default Add;
