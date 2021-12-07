import { observer } from 'mobx-react';
import { View, Button } from 'native-base';
import React from 'react'



const SearchRequestItem = ({request , navigation}) => {
    const user = request.owner
    return (
        <View>
        <Button onPress={() => navigation.navigate("RequestDetail", { request: request })}></Button>
        <Text>{user.name}</Text>
        </View>
    )
}

export default observer(SearchRequestItem);
