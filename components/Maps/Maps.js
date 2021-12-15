import React from "react";
import {
  Linking,
  Alert,
  StyleSheet,
  Pressable,
  HStack,
  Text,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Feather";
import { Button } from "native-base";

const url1 = "https://goo.gl/maps/Hu87cgFfvSQDhcEW7";

const Maps = () => {
  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`can not open this url: ${url}`);
    }
  };
  return (
    <Button
      style={{ width: 100, height: 60 }}
      bg="#BA181B"
      rounded="md"
      shadow={3}
      onPress={() => openUrl(url1)}
    >
      <Icon
        name="map-pin"
        style={{ color: "#ffff", alignSelf: "flex-start" }}
        size="20"
      />
      On Map
    </Button>
  );
};

export default Maps;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 17,
    marginTop: 40,
    textAlign: "center",
    margin: 3,
    color: "#a30000",
    borderRadius: 10,
    height: 40,
    width: 110,
    padding: 10,
  },
});
