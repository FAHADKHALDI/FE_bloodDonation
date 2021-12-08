import { observer } from "mobx-react";
import { ScrollView, View } from "native-base";
import React, { useState } from "react";

// Components
import RequestItem from "./RequestItem";
import SearchBar from "../Search/SearchBar";

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
  return (
    <View>
      <SearchBar setQuery={setQuery} />

      <ScrollView>{requestList}</ScrollView>
    </View>
  );
};

export default observer(RequestsList);
