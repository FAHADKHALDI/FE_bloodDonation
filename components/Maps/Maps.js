import React from 'react'
import {   Linking, Alert,  TouchableOpacity } from 'react-native'
import { Button } from 'native-base';


const url1 = "https://goo.gl/maps/Hu87cgFfvSQDhcEW7";

const Maps = () => {
    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported){
            await Linking.openURL(url);
        }else{
            Alert.alert(`can not open this url: ${url}`)
        }
    }
    return (<Button onPress={() => openUrl(url1)}>Go</Button>)
}

export default Maps
