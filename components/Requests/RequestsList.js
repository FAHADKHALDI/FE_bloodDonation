import { observer } from "mobx-react";
import { ScrollView, View } from "native-base";
import React, { useState } from "react";
import { Button } from "native-base";

// Components
import RequestItem from "./RequestItem";
import SearchBar from "../Search/SearchBar";
// Stores
import RequestStore from "../../stores/requestStore";



const RequestsList = ({ navigation }) => {
  const [query, setQuery] = useState("");
  
  const [isUrgent, setisUrgent] = useState(false);


  const requestList = RequestStore.requests
    .filter((request) =>
      request.bloodType.toLowerCase().includes(query.toLowerCase())
    )
    .map((request) => (
      <RequestItem
        request={request}
        key={request._id}
        navigation={navigation}
      />
    ));
    
    const filteredUrgent = RequestStore.requests
    .filter((request) => request.priority === "URGENT")
    .map((request) => (
      <RequestItem
      request={request}
      key={request._id}
      navigation={navigation}
    />
    ));


  return (
    <View>
      <Button onPress={() => setisUrgent(!isUrgent )}> {isUrgent ? "nonurgent" : "urgent" }   </Button>
      <SearchBar setQuery={setQuery} />
      <ScrollView>{
      isUrgent ? filteredUrgent :
      requestList}</ScrollView>
    </View>
  );
};

export default observer(RequestsList);
