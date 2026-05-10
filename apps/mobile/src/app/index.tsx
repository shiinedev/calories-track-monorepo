import { Colors } from "@/constants/theme";
import { useAuth } from "@/context/authContext";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function IndexScreen() {
  const { isAuthenticated, user, isLoading } = useAuth();

  console.log(
    "isAuthenticated in index page",
    isAuthenticated,
    "user in index page",
    user,
    "isLoading in index page",
    isLoading,
  );

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.background,
        }}
      >
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (isAuthenticated) {
    console.log("isAuthenticated", isAuthenticated);
    if (user && !user.onBoardingCompleted) {
      console.log("user", user);
      return <Redirect href="/onboarding" />;
    }
    return <Redirect href="/(tabs)/home" />;
  }

  return <Redirect href="/login" />;
}
