import { observer } from "mobx-react";
import { ScrollView, View } from "native-base";
import React from "react";

// Components
import RequestItem from "./RequestItem";

// Stores
import requestStore from "../../stores/requestStore";

const RequestsList = ({ navigation }) => {



  const requestList = requestStore.requests.map((request) => (
    <RequestItem request={request} key={request._id} navigation={navigation} />
  ));
  return (
    
  

   <ScrollView>{requestList}</ScrollView>

   
  
  )}

export default observer(RequestsList);
