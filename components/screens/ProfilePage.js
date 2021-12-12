import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet } from "react-native";
import { Block, Text } from "../../assets";
import { Pressable, View, Button, ScrollView, Image } from "native-base";
import authStore from "../../stores/authStore";
import { LinearGradient } from "expo-linear-gradient";

const ProfilePage = ({ navigation }) => {
  const logout = () => {
    authStore.logOut(navigation);
  };
  return (
    <View>
      <ScrollView>
        <SafeAreaView style={styles.topContainer}>
          <Text h2 center white>
            Profile Page
          </Text>
          <Block>
            <Image
              style={styles.avatar}
              source={require("../images/redavatar.png")}
              alt="avatar"
            />
            <Block card shadow color="white" style={styles.request}>
              <Text
                style={{
                  fontSize: 17,
                }}
                black
              >
                {" "}
                راعي فزعة{" "}
              </Text>
              <Text black> {authStore.user.name} </Text>
              <Text black> Your Score: 500 </Text>
            </Block>
          </Block>
        </SafeAreaView>
      </ScrollView>
      <LinearGradient
        colors={["#BA181B", "#E5383B"]}
        style={styles.button}
        start={{ y: 0.0, x: 0.0 }}
        end={{ y: 0.0, x: 1.0 }}
      >
        <Pressable onPress={logout}>
          <Text
            style={{
              color: "#ffff",
              alignSelf: "center",
              textAlignVertical: "center",
              fontSize: 20,
            }}
          >
            logout
          </Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default ProfilePage;

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
    marginHorizontal: 17,
    marginTop: 40,
    textAlign: "center",
    margin: 10,
    color: "#a30000",
    borderRadius: 10,
    height: 55,
    padding: 15,
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
