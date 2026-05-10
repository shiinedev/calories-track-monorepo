import { Colors, fontSize, fontWeight, spacing } from "@/constants/theme";
import { router } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

interface ReplaceLinkProps {
  to: "login" | "register" | "home";
}

export const ReplaceLink = ({ to }: ReplaceLinkProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Don't have an account? </Text>
      <TouchableOpacity
        onPress={() =>
          router.replace(
            to === "login"
              ? "/login"
              : to === "register"
                ? "/register"
                : "/home",
          )
        }
      >
        <Text style={styles.LinkText}>
          {to === "login" ? "Login" : to === "register" ? "Register" : "Home"}
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
