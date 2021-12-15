import { observer } from "mobx-react";
import { Button, HStack, Image, useToast, VStack } from "native-base";
import React, { useCallback } from "react";
import { View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import authStore from "../../stores/authStore";
import EditRequestModal from "../Requests/EditRequestModal";
import requestStore from "../../stores/requestStore";
import Confirm from "../Confirmation/Confirm";
import { Block, Text } from "../../assets";
import * as theme from "../../assets/theme";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Feather";
import Maps from "../Maps/Maps";

const url1 = "https://goo.gl/maps/Hu87cgFfvSQDhcEW7";

const RequestDetail = ({ navigation, route }) => {
  const request = route.params.request;
  const toast = useToast();
  const handleDelete = () => {
    requestStore.deleteRequest(request._id, toast, navigation);
  };

  return (
    <View style={styles.body}>
      <SafeAreaView style={styles.topContainer}>
        <Text h2 center white>
          Request: #{request.fileNumber}
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.bottomContainer}>
        <Block row card shadow color="white" style={styles.request}>
          <Block
            flex={0.25}
            card
            column
            color="secondary"
            style={styles.requestStatus}
          >
            <Block flex={0.25} middle center color={theme.colors.primary}>
              <Text small white style={{ textTransform: "uppercase" }}>
                {request.priority}
              </Text>
            </Block>
            <Block flex={0.7} center middle>
              <Text h2 white>
                {request.bloodType}
              </Text>
            </Block>
          </Block>
          <Block flex={0.75} column middle>
            <Text h3 style={{ paddingVertical: 5 }}>
              {request.name}
            </Text>
            <Text h3>File Number: {request.fileNumber}</Text>
            {request.donate === true && (
              <Icon
                name="check-circle"
                style={{ color: "#BA181B", alignSelf: "flex-end" }}
                size="20"
              />
            )}
          </Block>
        </Block>
        <View>
          <SafeAreaView style={styles.detailsContainer}>
            <Text secondary title style={styles.requestA}>
              Gender: {request.gender}
            </Text>
            <Text style={styles.horizontal}>
              _____________________________________________________
            </Text>
            <Text secondary title style={styles.requestA}>
              Civil ID: {request.civilId}
            </Text>
            <Text style={styles.horizontal}>
              _____________________________________________________
            </Text>
            <Text title secondary style={styles.requestA}>
              Age: {request.age}
            </Text>

            <Text style={styles.horizontal}>
              _____________________________________________________
            </Text>
            <Text title secondary style={styles.requestA}>
              Phone Number: {request.phone}
            </Text>

            <Text style={styles.horizontal}>
              _____________________________________________________
            </Text>
            <Text title secondary style={styles.requestA}>
              Description: {request.description}
            </Text>

            <Text style={styles.horizontal}>
              _____________________________________________________
            </Text>
            <VStack>
              <HStack style={styles.btnContainer}>
                <Confirm request={request} navigation={navigation} />
                <Maps />
              </HStack>
              <HStack style={styles.btnContainer}>
                {request.owner._id === authStore.user._id && (
                  <LinearGradient
                    colors={["#BA181B", "#E5383B"]}
                    style={styles.button}
                    start={{ y: 0.0, x: 0.0 }}
                    end={{ y: 0.0, x: 1.0 }}
                  >
                    <Pressable onPress={handleDelete}>
                      <HStack>
                        <Icon
                          name="delete"
                          style={{ color: "#fff", alignSelf: "flex-start" }}
                          size="20"
                        />
                        <Text
                          style={{
                            color: "#ffff",
                            alignSelf: "center",
                            textAlignVertical: "center",
                            fontSize: 17,
                          }}
                        >
                          Delete
                        </Text>
                      </HStack>
                    </Pressable>
                  </LinearGradient>
                )}
                <EditRequestModal request={request} navigation={navigation} />
              </HStack>
            </VStack>
          </SafeAreaView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default observer(RequestDetail);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  topContainer: {
    backgroundColor: "#BA181B",
    padding: 30,
    position: "relative",
    height: 100,
  },
  bottomContainer: {
    backgroundColor: "#ffffff",
    marginTop: 15,
    height: 250,
  },
  detailsContainer: {
    marginTop: 125,
    height: 250,
  },
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
  btnContainer: {
    position: "relative",
    alignSelf: "center",
    marginTop: 20,
  },
  requests: {
    marginTop: -55,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1,
  },
  requestsHeader: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  request: {
    padding: 20,
    marginBottom: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    position: "absolute",
  },
  requestA: {
    padding: 5,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    position: "relative",
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden",
    height: 90,
  },
  horizontal: {
    color: "#BA181B",
    fontWeight: "300",
    alignSelf: "center",
  },
});
