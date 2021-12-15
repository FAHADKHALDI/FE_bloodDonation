import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet } from "react-native";
import RequestsList from "../Requests/RequestsList";
import { Block, Text } from "../../assets";
import { View, ScrollView, Image, Pressable } from "native-base";
import authStore from "../../stores/authStore";
import RequestModal from "../Requests/RequestModal";
import { observer } from "mobx-react";

const Timeline = ({ navigation }) => {
  const handleLogOut = () => {
    authStore.logOut(navigation);
  };

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
        <Image
          style={styles.logo}
          source={require("../images/WALogo.png")}
          alt="white hayah logo"
        />
        <Pressable onPress={handleLogOut}>
          <Image
            style={styles.logout}
            source={require("../images/Logout.png")}
            alt="logout"
          />
        </Pressable>
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
            {authStore.user && (
              <Text h3 white style={styles.nametext}>
                {authStore.user.name}
              </Text>
            )}
          </Pressable>
          <Text white style={styles.datetext}>
            {currentDate}
          </Text>
        </Block>
      </SafeAreaView>
      <Block style={styles.blockContainer}></Block>
      <SafeAreaView style={styles.bottomContainer}>
        <RequestsList navigation={navigation} />
      </SafeAreaView>
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
    marginTop: 65,
    marginLeft: 30,
    alignSelf: "flex-start",
    position: "absolute",
  },
  blockContainer: {
    backgroundColor: "#ffffff",
    position: "relative",
    height: 1,
    borderTopWidth: 10,
    borderColor: "#ffffff",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    marginTop: 18,
  },
  topContainer: {
    backgroundColor: "#BA181B",
    padding: 30,
    position: "relative",
    height: 150,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: -675,
    height: 150,
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
    height: 120,
    width: 100,
    marginTop: 30,
    position: "absolute",
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
    marginTop: 65,
    zIndex: -1,
  },
  nametext: { marginLeft: 81 },
  datetext: {
    position: "absolute",
    marginLeft: 345,
    marginTop: 65,
  },
  logout: {
    width: 23,
    height: 23,
    marginLeft: 375,
    position: "absolute",
    marginTop: 15,
  },
});
