import { Header } from "@/components/home/header";
import { useAuth } from "@/context/authContext";
import { Link, router } from "expo-router";
import { Text, View, StyleSheet, Alert, StatusBar } from "react-native";

const Home = () => {
  const { user, logout } = useAuth();

  console.log("user Home page", user);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          logout();
          router.replace("/login");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Header username={user?.username} onLogout={handleLogout} />
      <Text>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
