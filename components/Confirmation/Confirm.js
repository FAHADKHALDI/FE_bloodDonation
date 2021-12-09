import React from "react";

import { StyleSheet, Text, Pressable } from "react-native";
import { Modal, Button, VStack, FormControl, Image } from "native-base";

import Icon from "react-native-vector-icons/Feather";
import requestStore from "../../stores/requestStore";
import { observer } from "mobx-react";

const Confirm = ({ request, navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const toast = useToast();
  const handleSubmit = () => {
    const donated = request;
    donated.donate = true;
    requestStore.confirmDonation(donated, request._id, toast);
    navigation.navigate("Timeline");
  };
  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="flex-end"
        bottom="500"
        size="lg"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Confirmation</Modal.Header>
          <Icon
            name="check-circle"
            style={{ marginLeft: 135, marginTop: 10, color: "#65CC65" }}
            size={40}
          />
          <Modal.Body style={{ marginLeft: 55 }}>
            Thank you for Donating !
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={handleSubmit}>
              Done
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <VStack space={8} alignItems="center">

{request.donate === false ? (
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Image
            source={require("../images/blood.png")}
            resizeMode="center"
            style={{
              width: 40,
              height: 40,
              alignItems: "flex-start",
            }}
          />
        </Pressable>
) : null}

      </VStack>
    </>
  );
};

export default observer(Confirm);

const styles = StyleSheet.create({});
