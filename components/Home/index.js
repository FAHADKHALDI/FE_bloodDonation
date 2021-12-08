import React from "react";
import "react-native-gesture-handler";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Pressable } from "native-base";
// REVIEW: Remove unused imports

// Stores
import authStore from "../../stores/authStore";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={(styles.body, { backgroundColor: "white" })}>
      <View style={styles.container}>
        <Image source={require("../images/Logo.png")} style={styles.logo} />
        <TouchableOpacity style={styles.button}>
          <Pressable
            onPress={() => {
              // REVIEW: A cleaner way to do this without the if and else:
              // navigation.navigate(authStore.user ? "Timeline" : "Signin");
              if (authStore.user) {
                navigation.navigate("Timeline");
              } else {
                navigation.navigate("Signin");
              }
            }}
          >
            <Text
              // REVIEW: Move inline styling to stylesheet
              style={{
                color: "#ffff",
                alignSelf: "center",
                textAlignVertical: "auto",
                fontSize: 23,
                fontWeight: "bold",
              }}
            >
              Get started
            </Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    marginTop: 80,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  button: {
    marginHorizontal: 20,
    marginTop: 300,
    textAlign: "center",
    margin: 5,
    color: "#E63946",
    borderRadius: 10,
    height: 60,
    width: 350,
    padding: 15,
    backgroundColor: "#E63946",
  },
  logo: {
    alignSelf: "center",
    height: 80,
    width: 270,
    marginTop: 70,
  },
  body: {
    flex: 1,
  },
});

export default Home;
