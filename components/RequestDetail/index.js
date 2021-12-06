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
            <Text>{request.name}</Text>
            <Text>{request.bloodType}</Text>
            <Text>{request.description}</Text>
            <Text>{request.fileNumber}</Text>
            <Button onPress={Delete}>Delete post</Button>
        </View>
    )
}

export default observer(RequestDetail);
