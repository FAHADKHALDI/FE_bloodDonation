import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet } from "react-native";
import { Block, Text } from "../../assets";
import { View, Button, ScrollView, Image } from "native-base";
import authStore from "../../stores/authStore";

const Timeline = ({ navigation }) => {
  const logout = () => {
    authStore.logOut(navigation);
  };
  return (
    <View>
      <ScrollView>
        <SafeAreaView style={styles.topContainer}>
          <Text h2 center white>
            Hayat App
          </Text>
          <Block>
            <Image
              style={styles.avatar}
              source={require("../images/avatar.png")}
              alt="avatar"
            />
            <Block card shadow color="white" style={styles.request}>
              <Text black>Welcome Back! </Text>
              <Text black>Welcome Back! </Text>
              <Text black>Welcome Back! </Text>
            </Block>
          </Block>
          <Button onPress={logout}>logout</Button>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Timeline;

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
    flexDirection: "column",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 15,
  },
  topContainer: {
    flex: 1,
    backgroundColor: "#BA181B",
    padding: 30,
    marginBottom: 15,
    position: "relative",
    height: 250,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  button: {
    marginHorizontal: 20,
    marginTop: 500,
    textAlign: "center",
    margin: 5,
    color: "#171717",
    borderRadius: 10,
    height: 60,
    width: 350,
    padding: 15,
    backgroundColor: "#171717",
  },
  logo: {
    alignSelf: "center",
    height: 150,
    width: 130,
    marginTop: -40,
  },
  body: {
    flex: 1,
  },
  requests: {
    marginTop: -55,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1,
  },
  request: {
    padding: 10,
    marginTop: 75,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    position: "relative",
    zIndex: -1,
  },
});
