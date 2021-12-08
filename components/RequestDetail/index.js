import { observer } from "mobx-react";
import { Button, useToast } from "native-base";
import React, { useState } from "react";
import { View, Text } from "react-native";

import requestStore from "../../stores/requestStore";

const RequestDetail = ({ navigation, route }) => {
  const request = route.params.request;

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
  );
};

export default observer(RequestDetail);
