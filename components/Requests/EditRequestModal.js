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
  HStack,
  Image,
} from "native-base";
import React, { useState } from "react";
import { StyleSheet, Switch, Pressable } from "react-native";
import authStore from "../../stores/authStore";
import requestStore from "../../stores/requestStore";

const EditRequestModal = ({ request, navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [isEnable, setIsEnable] = useState(false);
  const handleChange = () => {
    setIsEnable(!isEnable);
    setUpdatedRequest({
      ...updatedRequest,
      priority: isEnable ? "Normal" : "Urgent",
    });
  };
  const [updatedRequest, setUpdatedRequest] = useState({
    name: request.name,
    fileNumber: request.fileNumber,
    bloodType: request.bloodType,
    age: request.age,
    phone: request.phone,
    civilId: request.civilId,
    gender: request.gender,
    description: request.description,
    priority: request.priority,
  });

  const toast = useToast();

  const handleSubmit = () => {
    requestStore.editRequest(request._id, updatedRequest, toast, navigation);
  };
  return (
    <>
      {request.owner._id === authStore.user._id && (
        <Pressable onPress={() => setShowModal(true)}>
          <Image
            source={require("../images/cedit.png")}
            resizeMode="center"
            style={{
              width: 40,
              height: 40,
              alignItems: "flex-start",
            }}
          />
        </Pressable>
      )}

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Create a Request</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                placeholder="Enter Your Name"
                defaultValue={request.name}
                onChangeText={(name) =>
                  setUpdatedRequest({ ...updatedRequest, name })
                }
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>File Number</FormControl.Label>
              <Input
                placeholder="Enter File Number"
                defaultValue={request.fileNumber}
                onChangeText={(fileNumber) =>
                  setUpdatedRequest({ ...updatedRequest, fileNumber })
                }
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Blood Type</FormControl.Label>
              <VStack alignItems="center" space={4}>
                <Select
                  selectedValue={updatedRequest.bloodType}
                  minWidth="200"
                  accessibilityLabel="Choose Blood Type"
                  placeholder="Choose Blood Type"
                  defaultValue={request.bloodType}
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(bloodType) =>
                    setUpdatedRequest({ ...updatedRequest, bloodType })
                  }
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
              <FormControl.Label>Age</FormControl.Label>
              <Input
                placeholder="Enter Your Age"
                defaultValue={request.age}
                onChangeText={(age) =>
                  setUpdatedRequest({ ...updatedRequest, age })
                }
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Phone Number</FormControl.Label>
              <Input
                defaultValue={request.phone}
                placeholder="Enter Phone Number"
                onChangeText={(phone) =>
                  setUpdatedRequest({ ...updatedRequest, phone })
                }
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Civil ID</FormControl.Label>
              <Input
                placeholder="Enter Civil ID"
                defaultValue={request.civilId}
                onChangeText={(civilId) =>
                  setUpdatedRequest({ ...updatedRequest, civilId })
                }
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Gender</FormControl.Label>
              <VStack alignItems="center" space={4}>
                <Select
                  selectedValue={updatedRequest.gender}
                  minWidth="200"
                  accessibilityLabel="Choose Gender"
                  placeholder="Choose Gender"
                  defaultValue={request.gender}
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(gender) =>
                    setUpdatedRequest({ ...updatedRequest, gender })
                  }
                >
                  <Select.Item label="Male" value="male" />
                  <Select.Item label="Female" value="female" />
                </Select>
              </VStack>
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Description</FormControl.Label>
              <Input
                placeholder="Write Your Description"
                defaultValue={request.description}
                onChangeText={(description) =>
                  setUpdatedRequest({ ...updatedRequest, description })
                }
              />
            </FormControl>
            <HStack alignItems="center" space={4}>
              <Switch size="md" value={isEnable} onValueChange={handleChange} />
            </HStack>
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

export default observer(EditRequestModal);

const styles = StyleSheet.create({});
