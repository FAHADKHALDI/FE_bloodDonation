import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet } from "react-native";
import RequestsList from "../Requests/RequestsList";

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
    <SafeAreaView style={(styles.body, { backgroundColor: "##ffffff" })}>
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
});
