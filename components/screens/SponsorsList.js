import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { Block, Text } from "../../assets";
import { View, ScrollView, Image, Pressable, VStack } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { observer } from "mobx-react";

const SponsorsList = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <SafeAreaView style={styles.topContainer}>
        <Text h2 center white>
          Sponsors
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.bottomContainer}>
        <ScrollView>
          <VStack>
            <Block card shadow>
              <Image
                style={styles.logo}
                source={require("../images/bloodbank.jpg")}
                alt="blood bank"
              />
            </Block>
            <Block card shadow>
              <Image
                style={styles.logo}
                source={require("../images/coded.png")}
                alt="coded"
              />
            </Block>
            <Block card shadow>
              <Image
                style={styles.logo}
                source={require("../images/cp.jpg")}
                alt="cp"
              />
            </Block>
          </VStack>
        </ScrollView>
        <LinearGradient
          colors={["#BA181B", "#E5383B"]}
          style={styles.button}
          start={{ y: 0.0, x: 0.0 }}
          end={{ y: 0.0, x: 1.0 }}
        >
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text
              h2
              style={{
                color: "#ffff",
                alignSelf: "center",
                textAlignVertical: "center",
              }}
            >
              Back to Home
            </Text>
          </Pressable>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
};

export default observer(SponsorsList);

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
    marginTop: 30,
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
    height: 100,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    height: 150,
    zIndex: -1,
  },
  btnContainer: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  button: {
    marginHorizontal: 40,
    marginTop: 0,
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
    position: "relative",
    height: 250,
    width: 250,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
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
    marginTop: 30,
  },
  nametext: { marginLeft: 81 },
  datetext: {
    position: "absolute",
    marginLeft: 345,
    marginTop: 30,
  },
  logout: {
    width: 23,
    height: 23,
    marginLeft: 375,
    position: "absolute",
    marginTop: -10,
  },
});
