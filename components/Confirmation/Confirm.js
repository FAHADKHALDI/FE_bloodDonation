import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Modal,
  Button,
  VStack,
  FormControl,
  NativeBaseProvider,
} from "native-base";
import Icon from "react-native-vector-icons/Feather";

const Confirm = ({ request, navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
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
            <Button
              flex="1"
              onPress={() => {
                navigation.navigate("Timeline");
              }}
            >
              Done
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <VStack space={8} alignItems="center">
        <Button
          w="104"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Donate
        </Button>
      </VStack>
    </>
  );
};

export default Confirm;

const styles = StyleSheet.create({});
