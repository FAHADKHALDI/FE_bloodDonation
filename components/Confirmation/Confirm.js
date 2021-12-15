import React from "react";

import { StyleSheet, Text, Pressable, Alert, Linking } from "react-native";
import { Modal, Button, VStack, Image, useToast, HStack } from "native-base";

import Icon from "react-native-vector-icons/Feather";
import requestStore from "../../stores/requestStore";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import { LinearGradient } from "expo-linear-gradient";

const Confirm = ({ request, navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const user = authStore.user;
  const toast = useToast();
  const handleSubmit = () => {
    requestStore.confirmDonation(request._id, toast);
    authStore.updateScore(user._id);
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
            style={{ marginLeft: 150, marginTop: 10, color: "#BA181B" }}
            size={40}
          />
          <Modal.Body style={{ marginLeft: 50 }}>
            Are you sure you want to donate?
          </Modal.Body>
          <Modal.Footer style={styles.row}>
            <Button
              bg="#BA181B"
              rounded="md"
              shadow={3}
              style={{ width: 100, height: 40 }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Cancel
            </Button>
            <Button
              bg="#BA181B"
              rounded="md"
              shadow={3}
              style={{ width: 100, height: 40 }}
              onPress={handleSubmit}
            >
              Ok
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <VStack space={8} alignItems="center">
        {request.owner._id !== authStore.user._id && (
          <Pressable
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            {request.donate === false && (
              <LinearGradient
                colors={["#BA181B", "#E5383B"]}
                style={styles.button}
                start={{ y: 0.0, x: 0.0 }}
                end={{ y: 0.0, x: 1.0 }}
              >
                <HStack>
                  <Icon
                    name="droplet"
                    style={{ color: "#fff", alignSelf: "flex-start" }}
                    size="20"
                  />
                  <Text
                    style={{
                      color: "#ffff",
                      alignSelf: "center",
                      textAlignVertical: "center",
                      fontSize: 17,
                    }}
                  >
                    Donate
                  </Text>
                </HStack>
              </LinearGradient>
            )}
          </Pressable>
        )}
      </VStack>
    </>
  );
};

export default observer(Confirm);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: 10,
  },
  button: {
    marginHorizontal: 17,
    marginTop: 40,
    textAlign: "center",
    margin: 3,
    color: "#a30000",
    borderRadius: 10,
    height: 40,
    width: 110,
    padding: 10,
  },
});
