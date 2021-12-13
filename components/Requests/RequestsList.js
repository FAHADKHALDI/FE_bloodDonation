import { observer } from "mobx-react";
import { ScrollView, View } from "native-base";
import React, { useState } from "react";
import { Button, Center, HStack } from "native-base";

// Components
import RequestItem from "./RequestItem";
import SearchBar from "../Search/SearchBar";
// Stores
import RequestStore from "../../stores/requestStore";

const RequestsList = ({ navigation }) => {
  const [query, setQuery] = useState("");

  const [isUrgent, setisUrgent] = useState(false);

  const [donated, setDonated] = useState(false);

  const [bloodType, setBloodType] = useState("");

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

  const filterDonated = RequestStore.requests
    .filter((request) => request.donate === true)
    .map((request) => (
      <RequestItem
        request={request}
        key={request._id}
        navigation={navigation}
      />
    ));

  const filterBlood = RequestStore.requests
    .filter((request) => request.bloodType === bloodType)
    .map((request) => (
      <RequestItem
        request={request}
        key={request._id}
        navigation={navigation}
      />
    ));

  return (
    <View>
      <HStack>
        <Button
          h="7"
          w="20"
          variant="outline"
          colorScheme="secondary"
          rounded="md"
          shadow={3}
          marginLeft={3}
          marginBottom={3}
          onPress={() => setisUrgent(!isUrgent)}
        >
          {isUrgent ? "Back" : "Priority"}
        </Button>
        <Button
          h="7"
          w="20"
          variant="outline"
          colorScheme="secondary"
          rounded="md"
          shadow={3}
          marginLeft={3}
          marginBottom={3}
          marginRight={1}
          onPress={() => setDonated(!donated)}
        >
          {donated ? "Back" : "Donated"}
        </Button>

        <ScrollView horizontal={true}>
          <Button
            onPress={() => setBloodType("")}
            h="7"
            w="20"
            variant="outline"
            colorScheme="secondary"
            rounded="md"
            shadow={3}
            marginLeft={3}
            marginBottom={3}
          >
            Show All
          </Button>
          <Button
            onPress={() => setBloodType("A+")}
            h="7"
            w="10"
            bg="#BA181B"
            rounded="md"
            shadow={3}
            marginLeft={3}
          >
            A+
          </Button>
          <Button
            onPress={() => setBloodType("A-")}
            h="7"
            w="10"
            bg="#BA181B"
            rounded="md"
            shadow={3}
            marginLeft={3}
          >
            A-
          </Button>
          <Button
            onPress={() => setBloodType("B+")}
            h="7"
            w="10"
            bg="#BA181B"
            rounded="md"
            shadow={3}
            marginLeft={3}
          >
            B+
          </Button>
          <Button
            onPress={() => setBloodType("B-")}
            h="7"
            w="10"
            bg="#BA181B"
            rounded="md"
            shadow={3}
            marginLeft={3}
          >
            B-
          </Button>
          <Button
            onPress={() => setBloodType("O+")}
            h="7"
            w="10"
            bg="#BA181B"
            rounded="md"
            shadow={3}
            marginLeft={3}
          >
            O+
          </Button>
          <Button
            onPress={() => setBloodType("O-")}
            h="7"
            w="10"
            bg="#BA181B"
            rounded="md"
            shadow={3}
            marginLeft={3}
          >
            O-
          </Button>
          <Button
            onPress={() => setBloodType("AB+")}
            h="7"
            w="10"
            bg="#BA181B"
            rounded="md"
            shadow={3}
            marginLeft={3}
          >
            AB+
          </Button>
          <Button
            onPress={() => setBloodType("AB-")}
            h="7"
            w="10"
            bg="#BA181B"
            rounded="md"
            shadow={3}
            marginLeft={3}
            marginRight={3}
          >
            AB-
          </Button>
        </ScrollView>
      </HStack>
      <SearchBar setQuery={setQuery} />
      <ScrollView>
        {isUrgent
          ? filteredUrgent
          : donated
          ? filterDonated
          : bloodType
          ? filterBlood
          : requestList}
      </ScrollView>
    </View>
  );
};

export default observer(RequestsList);
