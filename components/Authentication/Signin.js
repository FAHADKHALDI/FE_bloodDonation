import React, { useState } from "react";
import "react-native-gesture-handler";
import { Text, TextInput, View, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Center, HStack, Pressable, useToast } from "native-base";
import authStore from "../../stores/authStore";

const Signin = ({ navigation }) => {
  const toast = useToast();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    authStore.signin(user, navigation, toast);
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.login}>Sign in</Text>
        <Text style={styles.outsidebox}>Username</Text>
        <TextInput
          style={styles.box}
          placeholder="  Enter your Civil ID"
          placeholderTextColor="white"
          onChangeText={(username) => setUser({ ...user, username })}
        />
        <Text style={styles.outsidebox}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.box}
          placeholder="  Enter your password"
          placeholderTextColor="white"
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <LinearGradient
          colors={["#E63946", "#E96A70"]}
          style={styles.button}
          start={{ y: 0.0, x: 0.0 }}
          end={{ y: 0.0, x: 1.0 }}
        >
          <Pressable onPress={handleSubmit}>
            <Text
              style={{
                color: "#ffff",
                alignSelf: "center",
                textAlignVertical: "center",
                fontSize: 20,
              }}
            >
              Sign in
            </Text>
          </Pressable>
        </LinearGradient>

        <Center>
          <HStack>
            <Text style={styles.signup}>Don't have an account? </Text>
            <Pressable onPress={() => navigation.navigate("Signup")}>
              <Text style={{ color: "#E96A70" }}> Sign up</Text>
            </Pressable>
          </HStack>
        </Center>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginLeft: 10,
  },
  body: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  box: {
    marginHorizontal: 16,
    borderWidth: 3,
    padding: 10,
    margin: 10,
    marginBottom: 20,
    color: "#white",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 65,
    borderColor: "#E74651",
    backgroundColor: "#E74651",
  },
  button: {
    marginHorizontal: 17,
    marginTop: 40,
    textAlign: "center",
    margin: 10,
    color: "#a30000",
    borderRadius: 10,
    height: 55,
    padding: 15,
  },
  outsidebox: {
    marginHorizontal: 22,
    color: "white",
  },
  signup: {
    alignContent: "center",
    textAlign: "center",
    color: "#E74651",
  },
  login: {
    marginBottom: 50,
    color: "#E74651",
    marginLeft: 25,
    fontSize: 35,
    fontWeight: "bold",
  },
});
