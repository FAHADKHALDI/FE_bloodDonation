import React, { Component } from "react";
import "react-native-gesture-handler";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Block, Text } from "../../assets";
import { Pressable } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import Icon from "react-native-vector-icons/Feather";
// Stores
import authStore from "../../stores/authStore";

const images = [
  require("../images/slider1.png"),
  require("../images/slider2.png"),
  require("../images/slider3.png"),
  require("../images/slider4.png"),
];

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={(styles.body, { backgroundColor: "white" })}>
      <View style={styles.container}>
        <Image source={require("../images/ALogo.png")} style={styles.logo} />
        <Block style={styles.slider}>
          <SliderBox
            sliderBoxHeight={150}
            dotColor="#BA181B"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={10}
            autoplay
            circleLoop
            resizeMethod={"resize"}
            resizeMode={"center"}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
            images={images}
          />
        </Block>

        <TouchableOpacity style={styles.button}>
          <Pressable
            onPress={() => {
              if (authStore.user) {
                navigation.navigate("Timeline");
              } else {
                navigation.navigate("Signin");
              }
            }}
          >
            <Text
              h2
              style={{
                color: "#ffff",
                alignSelf: "center",
                textAlignVertical: "auto",
                fontWeight: "bold",
              }}
            >
              Sign In
            </Text>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Pressable
            onPress={() => {
              if (authStore.user) {
                navigation.navigate("Timeline");
              } else {
                navigation.navigate("Signup");
              }
            }}
          >
            <Text
              h2
              style={{
                color: "#ffff",
                alignSelf: "center",
                textAlignVertical: "auto",
                fontWeight: "bold",
              }}
            >
              Create an account
            </Text>
          </Pressable>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate("Timeline")}>
          <Text
            h3
            style={{
              color: "#BA181B",
              alignSelf: "flex-end",
              textAlignVertical: "auto",
              fontWeight: "bold",
              marginTop: 70,
              marginRight: 10,
            }}
          >
            SKIP
            <Icon
              name="chevrons-right"
              style={{ color: "#BA181B", alignSelf: "flex-start" }}
              size="20"
            />
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: 80,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    height: 800,
  },
  button: {
    marginHorizontal: 30,
    marginTop: 0,
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
    height: 350,
    width: 270,
    marginTop: -160,
    marginBottom: 300,
  },
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  slider: {
    position: "absolute",
    marginLeft: -10,
  },
});

export default Home;
