import { ReplaceLink } from "@/components/replace-link";
import {
  borderRadius,
  Colors,
  fontSize,
  fontWeight,
  spacing,
} from "@/constants/theme";
import { useAuth } from "@/context/authContext";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";

export default function RegisterScreen() {
  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
    dailyColorieTarget: 2000,
  });

  const onChangefield = (field: string, value: string) => {
    setFields((prev) => ({ ...prev, [field]: value }));
  };

  const { register } = useAuth();

  const handleLogin = async () => {
    console.log("feilds", fields);
    if (
      fields.username.trim() === "" ||
      fields.email.trim() === "" ||
      fields.password.trim() === ""
    ) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("username", fields.username);
    formData.append("email", fields.email);
    formData.append("password", fields.password);
    formData.append("dailyColorieTarget", fields.dailyColorieTarget.toString());

    try {
      await register.mutateAsync(
        {
          email: fields.email,
          password: fields.password,
          dailyColorieTarget: fields.dailyColorieTarget,
          username: fields.username,
        },
        {
          onSuccess: () => {
            Alert.alert("Success", "You have successfully registered.");
            router.replace("/onboarding");
            setFields({
              username: "",
              email: "",
              password: "",
              dailyColorieTarget: 0,
            });
          },
          onError: (error) => {
            console.error("error from login", error);
            Alert.alert("Error", error.message || "registering user");
          },
        },
      );
    } catch (error) {
      console.error("error from login", error);
      Alert.alert("Error", error as string);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar barStyle={"dark-content"} />
      <ScrollView style={styles.scrollContent}>
        <View style={styles.content}>
          {/*header*/}
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Ionicons name="restaurant" size={24} color={Colors.primary} />
            </View>
            <Text style={styles.title}>sign in</Text>
            <Text style={styles.subtitle}>
              Sign in to continue tracking your meals
            </Text>
          </View>

          {/*form*/}

          <View style={styles.form}>
            {/*Input group for email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your username"
                placeholderTextColor={Colors.placeholder}
                value={fields.username}
                onChangeText={(value) => onChangefield("username", value)}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor={Colors.placeholder}
                value={fields.email}
                onChangeText={(value) => onChangefield("email", value)}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            {/*Input group for password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor={Colors.placeholder}
                value={fields.password}
                onChangeText={(value) => onChangefield("password", value)}
                secureTextEntry
              />
            </View>

            {/*register button */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
              disabled={register.isPending}
              activeOpacity={0.8}
            >
              {register.isPending ? (
                <ActivityIndicator size="small" color={Colors.white} />
              ) : (
                <Text style={styles.buttonText}>Register</Text>
              )}
            </TouchableOpacity>
            {/*register link */}
            <ReplaceLink to="login" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: 80,
  },
  header: {
    alignItems: "center",
    marginBottom: spacing.xxl,
  },
  iconContainer: {
    backgroundColor: Colors.blueDark,
    width: 80,
    height: 80,
    borderRadius: borderRadius.lg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.black,
    textAlign: "center",
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: fontSize.md,
    color: Colors.textSecondary,
    textAlign: "center",
  },

  form: {
    marginBottom: spacing.lg,
  },
  inputGroup: {
    marginBottom: spacing.md,
  },
  label: {
    color: Colors.black,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    marginBottom: spacing.sm,
    marginLeft: 4,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: borderRadius.md,
    fontSize: 16,
    color: Colors.black,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: borderRadius.md,
    elevation: 8,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
  },

  error: {
    color: "red",
    fontSize: fontSize.sm,
    marginLeft: 4,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
