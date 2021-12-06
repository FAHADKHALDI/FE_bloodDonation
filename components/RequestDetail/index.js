import { observer } from 'mobx-react';
import { Button } from 'native-base';
import React from 'react'
import { View, Text } from 'react-native'

import requestStore from '../../stores/requestStore';

const RequestDetail = ({navigation, route}) => {
    const request = route.params.request;

    const Delete = () => {
        requestStore.deleteRequest(request._id, navigation);
      };
    return (
        <View>
            <Text> Patient name: 
               {request.name}
               </Text>
            <Text>Blood Typre: {request.bloodType}</Text>
            <Text>Description: {request.description}</Text>
            <Text>File Number: {request.fileNumber}</Text>
            <Text>Gender: {request.gender}</Text>
            <Text>Age: {request.age}</Text>
            <Text>CiviId Number:{request.civilId}</Text>
            <Text>Phone Number: {request.phone}</Text>
            <Button onPress={Delete}>Delete post</Button>
        </View>
    )
}

export default observer(RequestDetail);
