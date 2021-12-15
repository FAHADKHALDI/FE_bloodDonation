import React, { Component } from "react";
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
import { Block } from "../../assets";
import { Pressable } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
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
              style={{
                color: "#ffff",
                alignSelf: "center",
                textAlignVertical: "auto",
                fontSize: 23,
                fontWeight: "bold",
              }}
            >
              Get Started
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
    marginHorizontal: 20,
    marginTop: 350,
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
    marginTop: -200,
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
