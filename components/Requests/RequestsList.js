import { observer } from "mobx-react";
import { ScrollView, View } from "native-base";
import React, { useState } from "react";
import { Button, Center, HStack } from "native-base";
import { StyleSheet, Text } from "react-native";

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
      request.fileNumber.toLowerCase().includes(query.toLowerCase())
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
      <SearchBar setQuery={setQuery} />
      <HStack>
        <Button
          style={styles.btn}
          h="9"
          w="20"
          shadow={3}
          marginLeft={3}
          marginBottom={1}
          onPress={() => setisUrgent(!isUrgent)}
        >
          <Text style={styles.txt}>{isUrgent ? "Back" : "Urgent"}</Text>
        </Button>
        <Button
          style={styles.btn}
          h="9"
          w="20"
          shadow={3}
          marginLeft={3}
          marginBottom={1}
          marginRight={1}
          onPress={() => setDonated(!donated)}
        >
          <Text style={styles.txt}>{donated ? "Back" : "Donated"}</Text>
        </Button>

        <ScrollView horizontal={true}>
          <Button
            onPress={() => setBloodType("")}
            style={styles.btn}
            h="9"
            w="20"
            rounded="md"
            shadow={3}
            marginLeft={3}
            marginBottom={1}
          >
            <Text style={styles.txt}>ShowAll</Text>
          </Button>
          <Button
            onPress={() => setBloodType("A+")}
            h="9"
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
            h="9"
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
            h="9"
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
            h="9"
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
            h="9"
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
            h="9"
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
            h="9"
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
            h="9"
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

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#BA181B",
  },
  txt: {
    color: "#BA181B",
  },
});
