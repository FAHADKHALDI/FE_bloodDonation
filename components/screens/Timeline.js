import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import RequestsList from "../Requests/RequestsList";
import { Block, Text } from "../../assets";
import { View, ScrollView, Image, Pressable } from "native-base";
import authStore from "../../stores/authStore";
import RequestModal from "../Requests/RequestModal";
import { observer } from "mobx-react";

const Timeline = ({ navigation }) => {
  const handleLogOut = () => {
    navigation.navigate("Home");
    authStore.logOut();
  };

  // const window = Dimensions.get("window");
  // const screen = Dimensions.get("screen");

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener(
  //     "change",
  //     ({ window, screen }) => {
  //       setDimensions({ window, screen });
  //     }
  //   );
  //   return () => subscription?.remove();
  // });

  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(date + "." + month + "." + year);
  }, []);

  return (
    <View style={styles.body}>
      <SafeAreaView style={styles.topContainer}>
        <Text h2 center white>
          Hayat App
        </Text>
        <Block>
          <Pressable onPress={() => navigation.navigate("ProfilePage")}>
            <Image
              style={styles.avatar}
              source={require("../images/redavatar.png")}
              alt="avatar"
            />
            <Text white style={styles.wlctext}>
              Welcome Back!
            </Text>
            <Text white style={styles.datetext}>
              {currentDate}
            </Text>
            {authStore.user && (
              <Text h3 white style={styles.nametext}>
                {authStore.user.name}
              </Text>
            )}
          </Pressable>
          <Pressable onPress={handleLogOut}>
            <Image
              style={styles.logout}
              source={require("../images/Logout.png")}
              alt="avatar"
            />
          </Pressable>
        </Block>
      </SafeAreaView>
      <Block style={styles.blockContainer}></Block>
      <ScrollView style={styles.bottomContainer}>
        <SafeAreaView style={styles.bottomContainer}>
          <RequestsList navigation={navigation} />
        </SafeAreaView>
      </ScrollView>
      <View style={styles.btnContainer}>
        <RequestModal />
      </View>
    </View>
  );
};

export default observer(Timeline);

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
    width: 45,
    height: 45,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 30,
    alignSelf: "flex-start",
    position: "absolute",
    marginTop: 15,
  },
  blockContainer: {
    backgroundColor: "#ffffff",
    position: "relative",
    height: 2,
    borderTopWidth: 17,
    borderColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  topContainer: {
    backgroundColor: "#BA181B",
    padding: 30,
    position: "relative",
    height: 150,
  },
  bottomContainer: {
    backgroundColor: "#ffffff",
  },
  btnContainer: {
    position: "absolute",
    bottom: 30,
    right: 30,
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
    backgroundColor: "#BA181B",
  },
  requests: {
    marginTop: -55,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1,
  },
  wlctext: {
    position: "relative",
    marginLeft: 76,
    marginTop: 17,
  },
  nametext: { marginLeft: 81 },
  datetext: {
    position: "absolute",
    marginLeft: 345,
    marginTop: 17,
  },
  logout: {
    width: 23,
    height: 23,
    marginLeft: 378,
    position: "absolute",
    marginTop: -77,
  },
});
