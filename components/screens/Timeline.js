import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet } from "react-native";
import RequestsList from "../Requests/RequestsList";

import SearchRequestList from "../Search/SearchRequestList";
import { Block, Text } from "../../assets";
import { View, Button } from "native-base";

import authStore from "../../stores/authStore";

import RequestModal from "../Requests/RequestModal";




// Components

const Timeline = ({ navigation }) => {
  const logout = () => {
    authStore.logOut(navigation);
  };
  return (
    <View>
      <SafeAreaView style={styles.topContainer}>
        <Text h2 center white>
          Blood Requests
        </Text>
        <Block card shadow color="white" style={styles.request}>
          <Text>Welcome Back!</Text>
        </Block>
      </SafeAreaView>
      <SafeAreaView style={(styles.body, { backgroundColor: "#ffffff" })}>
        <RequestsList navigation={navigation} />
        <RequestModal />
      </SafeAreaView>
      <Button onPress={logout}>logout</Button>
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
  topContainer: {
    flex: 1,
    backgroundColor: "#BA181B",
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
    padding: 20,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },
});
