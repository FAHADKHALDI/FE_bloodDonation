import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet } from "react-native";
import { Block, Text } from "../../assets";
import { Pressable, View, Image, HStack } from "native-base";
import authStore from "../../stores/authStore";
import { LinearGradient } from "expo-linear-gradient";
import { observer } from "mobx-react";
import EditProfileModal from "../../Profile/EditProfileModal";

const ProfilePage = ({ navigation }) => {
  const logout = () => {
    authStore.logOut(navigation);
  };

  return (
    <View style={styles.body}>
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
                alignSelf: "flex-end",
              }}
              black
            >
              {" "}
              راعي فزعة{" "}
            </Text>
            <Block style={styles.ns}>
              {authStore.user && (
                <Text h2 black styles={{ alignContent: "center" }}>
                  {" "}
                  {authStore.user.name}{" "}
                </Text>
              )}

              {authStore.user && (
                <Text secondary h3 styles={{ alignContent: "center" }}>
                  {" "}
                  Score: {authStore.user.score}{" "}
                </Text>
              )}
            </Block>
          </Block>
        </Block>
      </SafeAreaView>
      <View>
        <SafeAreaView>
          <Text title secondary style={styles.request}>
            Password: ••••••••
          </Text>
          <Text style={styles.horizontal}>
            _____________________________________________________
          </Text>
          {authStore.user && (
            <Text title secondary style={styles.request}>
              Blood-Type: {authStore.user.bloodType}
            </Text>
          )}
          <Text style={styles.horizontal}>
            _____________________________________________________
          </Text>
          {authStore.user && (
            <Text secondary title style={styles.request}>
              Civil ID: {authStore.user.civilId}
            </Text>
          )}
          <Text style={styles.horizontal}>
            _____________________________________________________
          </Text>
          {authStore.user && (
            <Text title secondary style={styles.request}>
              Age: {authStore.user.age}
            </Text>
          )}
          <Text style={styles.horizontal}>
            _____________________________________________________
          </Text>
          {authStore.user && (
            <Text title secondary style={styles.request}>
              Phone Number: {authStore.user.phone}
            </Text>
          )}
          <Text style={styles.horizontal}>
            _____________________________________________________
          </Text>
          <HStack style={styles.btnContainer}>
            <LinearGradient
              colors={["#BA181B", "#E5383B"]}
              style={styles.button}
              start={{ y: 0.0, x: 0.0 }}
              end={{ y: 0.0, x: 1.0 }}
            >
              <Pressable onPress={() => navigation.navigate("SponsorsList")}>
                <Text
                  style={{
                    color: "#ffff",
                    alignSelf: "center",
                    textAlignVertical: "center",
                    fontSize: 17,
                  }}
                >
                  Our Sponsors
                </Text>
              </Pressable>
            </LinearGradient>
            <LinearGradient
              colors={["#BA181B", "#E5383B"]}
              style={styles.button}
              start={{ y: 0.0, x: 0.0 }}
              end={{ y: 0.0, x: 1.0 }}
            >
              <EditProfileModal />
            </LinearGradient>
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
                    fontSize: 17,
                  }}
                >
                  logout
                </Text>
              </Pressable>
            </LinearGradient>
          </HStack>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default observer(ProfilePage);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  ns: {
    position: "relative",
    marginTop: 55,
    alignItems: "center",
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
    marginBottom: 10,
    position: "relative",
    height: 100,
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
  bottomContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 17,
    marginTop: 40,
    textAlign: "center",
    margin: 3,
    color: "#a30000",
    borderRadius: 10,
    height: 40,
    padding: 10,
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
    marginTop: 30,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    position: "relative",
    zIndex: -1,
  },
  horizontal: {
    color: "#BA181B",
    fontWeight: "300",
    alignSelf: "center",
  },
  btnContainer: {
    alignContent: "space-between",
    alignItems: "center",
  },
});
