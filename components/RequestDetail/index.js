import { observer } from "mobx-react";
import { Button, useToast } from "native-base";
import React, { useState } from "react";
import { View, Text } from "react-native";
import authStore from "../../stores/authStore";

import requestStore from "../../stores/requestStore";
import EditRequestModal from "../Requests/EditRequestModal";

const RequestDetail = ({ navigation, route }) => {
  const request = route.params.request;
  const Delete = () => {
    requestStore.deleteRequest(request._id, navigation);
  };
  const toast = useToast();


  return (
    <View>
      <Text>{request.name}</Text>
      <Text>{request.bloodType}</Text>
      <Text>{request.description}</Text>
      <Text>{request.fileNumber}</Text>
      {request.owner._id === authStore.user._id && (
        <Button onPress={Delete}>Delete post</Button>
      )}
      {/* // in JS "&&" can be used as a ternary operator if there is no else
      condition */}
      <EditRequestModal request={request} navigation={navigation} />
    </View>
  );
};

    const Delete = () => {
        requestStore.deleteRequest(request._id, navigation);
      };
    return (
        <View>
            <Text>Patient name: {request.name} </Text>
            <Text>Blood Type: {request.bloodType}</Text>
            <Text>Description: {request.description}</Text>
            <Text>File Number: {request.fileNumber}</Text>
            <Text>Gender: {request.gender}</Text>
            <Text>Age: {request.age}</Text>
            <Text>Civil ID:{request.civilId}</Text>
            <Text>Phone Number: {request.phone}</Text>
            <Button onPress={Delete}>Delete post</Button>
        </View>
    )
}

export default observer(RequestDetail);
