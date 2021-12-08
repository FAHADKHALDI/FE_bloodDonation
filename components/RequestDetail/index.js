import { observer } from "mobx-react";
import { Button, Center, useToast } from "native-base";
import React, { useState } from "react";
import { View, Text } from "react-native";
import authStore from "../../stores/authStore";
import EditRequestModal from "../Requests/EditRequestModal";
import requestStore from "../../stores/requestStore";

const RequestDetail = ({ navigation, route }) => {
  const request = route.params.request;

  const Delete = () => {
    requestStore.deleteRequest(request._id, navigation);
  };
  return (
    <Center>
      <Text>Patient name: {request.name} </Text>
      <Text>Blood Type: {request.bloodType}</Text>
      <Text>Description: {request.description}</Text>
      <Text>File Number: {request.fileNumber}</Text>
      <Text>Gender: {request.gender}</Text>
      <Text>Age: {request.age}</Text>
      <Text>Civil ID:{request.civilId}</Text>
      <Text>Phone Number: {request.phone}</Text>
      {request.owner._id === authStore.user._id && (
        <Button onPress={Delete}>Delete post</Button>
      )}
      <EditRequestModal request={request} navigation={navigation} />
    </Center>
  );
};

export default observer(RequestDetail);
