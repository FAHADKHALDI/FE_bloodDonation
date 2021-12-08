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
  VStack,
  Select,
  CheckIcon,
  FormControl,
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
    bloodType: "",
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
              placeholderTextColor="#BA181B"
              onChangeText={(name) => setUser({ ...user, name })}
            />

            <Text style={styles.outsidebox}>civilId</Text>
            <TextInput
              style={styles.box}
              placeholder=" Enter your Civil ID"
              placeholderTextColor="#BA181B"
              onChangeText={(civilId) => setUser({ ...user, civilId })}
            />

            <Text style={styles.outsidebox}>phoneNum</Text>
            <TextInput
              style={styles.box}
              placeholder="  Enter your phone number"
              placeholderTextColor="#BA181B"
              onChangeText={(phoneNum) => setUser({ ...user, phoneNum })}
            />
            <Text style={styles.outsidebox}>Age</Text>
            <TextInput
              style={styles.box}
              placeholder="  Enter your age"
              placeholderTextColor="#BA181B"
              onChangeText={(age) => setUser({ ...user, age })}
            />

            <Text style={styles.outsidebox}>Password</Text>
            <TextInput
              style={styles.box}
              secureTextEntry={true}
              placeholder="  Pick a strong password"
              placeholderTextColor="#BA181B"
              onChangeText={(password) => setUser({ ...user, password })}
            />
            <Text style={styles.outsidebox}>Blood Type</Text>
            <FormControl isRequired>
              <VStack alignItems="center" space={4}>
                <Select
                  color="#BA181B"
                  selectedValue={user.bloodType}
                  minWidth="200"
                  accessibilityLabel="Choose Blood Type"
                  placeholder="Choose Blood Type"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(bloodType) => setUser({ ...user, bloodType })}
                >
                  <Select.Item label="A+" value="A+" />
                  <Select.Item label="A-" value="A-" />
                  <Select.Item label="B+" value="B+" />
                  <Select.Item label="B-" value="B-" />
                  <Select.Item label="O+" value="O+" />
                  <Select.Item label="O-" value="O-" />
                  <Select.Item label="AB+" value="AB+" />
                  <Select.Item label="AB-" value="AB-" />
                </Select>
              </VStack>
            </FormControl>
            <LinearGradient
              colors={["#BA181B", "#E5383B"]}
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
    marginTop: 50,
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
    margin: 4,
    marginBottom: 3,
    color: "#BA181B",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
    height: 40,
    borderColor: "#BA181B",
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    backgroundColor: "white",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
    color: "#BA181B",
  },
  login: {
    marginBottom: 50,
    color: "#BA181B",
    marginLeft: 25,
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default Signup;
