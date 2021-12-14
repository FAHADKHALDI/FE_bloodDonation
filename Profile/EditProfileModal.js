import { observer } from "mobx-react";
import {
  Button,
  Modal,
  FormControl,
  Input,
  NativeBaseProvider,
  Select,
  VStack,
  CheckIcon,
  useToast,
} from "native-base";
import React, { useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import { Text } from "../assets";
import authStore from "../stores/authStore";

const EditProfileModal = () => {
  const [showModal, setShowModal] = useState(false);

  const [updateProfile, setUpdatedProfile] = useState(
    authStore.user ? authStore.user : ""
  );

  const handleSubmit = () => {
    authStore.editUser(updateProfile._id, updateProfile, toast);
    setShowModal(false);
  };

  const toast = useToast();

  return (
    <>
      <Pressable onPress={() => setShowModal(true)}>
        <Text
          style={{
            color: "#ffff",
            alignSelf: "center",
            textAlignVertical: "center",
            fontSize: 20,
          }}
        >
          Edit Profile
        </Text>
      </Pressable>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Edit Profile</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                placeholder="Enter Your Name"
                defaultValue={authStore.user.name}
                onChangeText={(name) =>
                  setUpdatedProfile({ ...updateProfile, name })
                }
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Blood Type</FormControl.Label>
              <VStack alignItems="center" space={4}>
                <Select
                  minWidth="200"
                  accessibilityLabel="Choose Blood Type"
                  placeholder="Choose Blood Type"
                  defaultValue={authStore.user.bloodType}
                  onChangeText={(bloodType) =>
                    setUpdatedProfile({ ...updateProfile, bloodType })
                  }
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                >
                  <Select.Item label="A+" value="A+" />
                  <Select.Item label="A-" value="A-" />
                  <Select.Item label="B+" value="B+" />
                  <Select.Item label="B-" value="B-" />
                  <Select.Item label="O+" value="O+" />
                  <Select.Item label="O-" value="O-" />
                  <Select.Item label="AB+" value="AB+" />
                  <Select.Item label="AB-" value="AB-" />
                </Select>
              </VStack>
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Civil ID</FormControl.Label>
              <Input
                placeholder="Enter Civil ID"
                defaultValue={authStore.user.civilId}
                onChangeText={(civilId) =>
                  setUpdatedProfile({ ...updateProfile, civilId })
                }
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Age</FormControl.Label>
              <Input
                placeholder="Enter Your Age"
                defaultValue={authStore.user.age}
                onChangeText={(age) =>
                  setUpdatedProfile({ ...updateProfile, age })
                }
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Phone Number</FormControl.Label>
              <Input
                placeholder="Enter Phone Number"
                defaultValue={authStore.user.phone}
                onChangeText={(phone) =>
                  setUpdatedProfile({ ...updateProfile, phone })
                }
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button onPress={handleSubmit}>Submit</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default observer(EditProfileModal);

const styles = StyleSheet.create({});
