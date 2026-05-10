import { Colors, fontSize, fontWeight, spacing } from "@/constants/theme";
import { router } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

interface ReplaceLinkProps {
  to: "login" | "register";
}

export const ReplaceLink = ({ to }: ReplaceLinkProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {to === "login"
          ? "Don't have an account? "
          : "Already have an account? "}
      </Text>
      <TouchableOpacity
        onPress={() => router.replace(to === "login" ? "/login" : "/register")}
      >
        <Text style={styles.LinkText}>
          {to === "login" ? "Login" : "Register"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.md,
  },
  text: {
    color: Colors.textSecondary,
    fontSize: 16,
  },
  LinkText: {
    color: Colors.primary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
  },
});
