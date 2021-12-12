import { observer } from "mobx-react";
import { ScrollView, View } from "native-base";
import React, { useState } from "react";

// Components
import RequestItem from "./RequestItem";
import SearchBar from "../Search/SearchBar";
import UrgentList from "../UrgentList";
// Stores
import RequestStore from "../../stores/requestStore";



const RequestsList = ({ navigation }) => {
  const [query, setQuery] = useState("");


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
      <UrgentList filteredUrgent={filteredUrgent}/>
      <SearchBar setQuery={setQuery} />
      <ScrollView>{requestList}</ScrollView>
    </View>
  );
};

export default observer(RequestsList);
