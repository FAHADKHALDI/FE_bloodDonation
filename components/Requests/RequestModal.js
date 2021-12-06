import React from "react";
import {
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
  Select,
  VStack,
  CheckIcon,
  useToast,
  HStack,
} from "native-base";
import { useState } from "react";
import { Switch } from "react-native";
import requestStore from "../../stores/requestStore";
const RequestModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEnable, setIsEnable] = useState(false);
  const [request, setRequest] = useState({
    name: "",
    fileNumber: "",
    bloodType: "",
    age: "",
    phone: "",
    civilId: "",
    gender: "",
    description: "",
    priority: "",
  });

  const toast = useToast();
  const handleChange = () => {
    setIsEnable(!isEnable);
    setRequest({ ...request, priority: isEnable ? "low" : "high" });
  };
  const handleSubmit = () => {
    console.log(request);
    console.log(isEnable);
    requestStore.createRequest(request, toast);
  };

  return (
    <>
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Create a Request</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                placeholder="Enter Your Name"
                onChangeText={(name) => setRequest({ ...request, name })}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>File Number</FormControl.Label>
              <Input
                placeholder="Enter File Number"
                onChangeText={(fileNumber) =>
                  setRequest({ ...request, fileNumber })
                }
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Blood Type</FormControl.Label>
              <VStack alignItems="center" space={4}>
                <Select
                  selectedValue={request.bloodType}
                  minWidth="200"
                  accessibilityLabel="Choose Blood Type"
                  placeholder="Choose Blood Type"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(bloodType) =>
                    setRequest({ ...request, bloodType })
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
                onChangeText={(age) => setRequest({ ...request, age })}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Phone Number</FormControl.Label>
              <Input
                placeholder="Enter Phone Number"
                onChangeText={(phone) => setRequest({ ...request, phone })}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Civil ID</FormControl.Label>
              <Input
                placeholder="Enter Civil ID"
                onChangeText={(civilId) => setRequest({ ...request, civilId })}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Gender</FormControl.Label>
              <VStack alignItems="center" space={4}>
                <Select
                  selectedValue={request.gender}
                  minWidth="200"
                  accessibilityLabel="Choose Gender"
                  placeholder="Choose Gender"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(gender) => setRequest({ ...request, gender })}
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
                onChangeText={(description) =>
                  setRequest({ ...request, description })
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

export default RequestModal;
