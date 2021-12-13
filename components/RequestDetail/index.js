import { observer } from "mobx-react";
import { Button, HStack, Image, useToast } from "native-base";
import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Pressable, TouchableOpacity} from "react-native";
import authStore from "../../stores/authStore";
import EditRequestModal from "../Requests/EditRequestModal";
import requestStore from "../../stores/requestStore";
import Confirm from "../Confirmation/Confirm";
import { Block, Text } from "../../assets";
import * as theme from "../../assets/theme";


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
            <Text caption semibold>
              {request.age} • {request.gender} • Civil ID:
              {request.civilId}
            </Text>
            <Text caption semibold>
              Phone Number: {request.phone}
            </Text>
          </Block>
        </Block>
        <HStack style={{ ignItems: "space-between" }}>
          {request.owner._id === authStore.user._id && (
            <Pressable onPress={handleDelete}>
              <Image
                source={require("../images/cdelete.png")}
                resizeMode="center"
                style={{
                  width: 40,
                  height: 40,
                  alignItems: "flex-start",
                  marginLeft: 125,
                }}
              />
              
            </Pressable>
          )}

          <EditRequestModal request={request} navigation={navigation} />
          <Confirm request={request} navigation={navigation} />  
          
        </HStack>
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
    marginTop: 10,
    height: 250,
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
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden",
    height: 90,
  },
});
