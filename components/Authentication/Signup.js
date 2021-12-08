import React, { useState } from "react";
import "react-native-gesture-handler";
import { Text, TextInput, View, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  Pressable,
  useToast,
  ScrollView,
  Center,
  HStack,
  KeyboardAvoidingView,
} from "native-base";

// Stores
import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const toast = useToast();

  const [user, setUser] = useState({
    name: "",
    civilId: "",
    phone: "",
    password: "",
    age: "",
  });

  const handleSubmit = () => {
    authStore.signup(user, navigation, toast);
  };

  return (
    <KeyboardAwareScrollView>
      <ScrollView>
        <SafeAreaView style={styles.body}>
          <View style={styles.container}>
            <Text style={styles.login}>Sign up</Text>

            <Text style={styles.outsidebox}>Name</Text>
            <TextInput
              style={styles.box}
              placeholder=" Enter your Full Name "
              placeholderTextColor="#ffffff"
              onChangeText={(name) => setUser({ ...user, name })}
            />

            <Text style={styles.outsidebox}>civilId</Text>
            <TextInput
              style={styles.box}
              placeholder=" Enter your Civil ID"
              placeholderTextColor="#ffffff"
              onChangeText={(civilId) => setUser({ ...user, civilId })}
            />

            <Text style={styles.outsidebox}>phoneNum</Text>
            <TextInput
              style={styles.box}
              placeholder="  Enter your phone number"
              placeholderTextColor="#ffffff"
              onChangeText={(phoneNum) => setUser({ ...user, phoneNum })}
            />
            <Text style={styles.outsidebox}>Age</Text>
            <TextInput
              style={styles.box}
              placeholder="  Enter your Age"
              placeholderTextColor="#ffffff"
              onChangeText={(age) => setUser({ ...user, age })}
            />

            <Text style={styles.outsidebox}>Password</Text>
            <TextInput
              style={styles.box}
              secureTextEntry={true}
              placeholder="  Pick a strong password"
              placeholderTextColor="#ffffff"
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
                  Create account
                </Text>
              </Pressable>
            </LinearGradient>

            <Center>
              <HStack>
                <Text style={styles.signup}>Already have an account? </Text>
                <Pressable onPress={() => navigation.navigate("Signin")}>
                  {/* REVIEW: Move inline styling to stylesheet */}
                  <Text style={{ color: "#E96A70" }}> Sign in</Text>
                </Pressable>
              </HStack>
            </Center>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 10,
  },
  body: {
    height: 900,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  box: {
    marginHorizontal: 16,
    borderWidth: 3,
    padding: 10,
    margin: 10,
    marginBottom: 20,
    color: "#858585",
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
    backgroundColor: "#4B0082",
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

export default Signup;
