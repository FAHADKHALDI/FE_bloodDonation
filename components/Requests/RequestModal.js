import React from "react";
import {
  Button,
  Modal,
  FormControl,
  Input,
  Pressable,
  NativeBaseProvider,
  Select,
  VStack,
  CheckIcon,
  useToast,
  HStack,
  Text,
} from "native-base";
import { useState } from "react";
import { Image, Switch, View } from "react-native";
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
    priority: "NORMAL",
    location:"Blood Bank",
  });

  const toast = useToast();
  const handleChange = () => {
    setIsEnable(!isEnable);
    setRequest({ ...request, priority: isEnable ? "NORMAL" : "URGENT" });
  };
  const handlelocation = () => {
    setIsEnable(!isEnable);
    setRequest({ ...request, location: isEnable ? "NORMAL" : "URGENT" });
  };
  const handleSubmit = () => {
    console.log(request);
    console.log(isEnable);
    requestStore.createRequest(request, toast);
    setShowModal(false);
  };

  return (
    <>
      <Pressable onPress={() => setShowModal(true)}>
        <View>
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              marginTop: 10,
              backgroundColor: "#D91C1F",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../images/plus.png")}
              resizeMode="center"
              style={{
                width: 50,
                height: 50,
                tintColor: "#fff",
              }}
            />
          </View>
        </View>
      </Pressable>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Create a Request</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                placeholder="Enter Full Name"
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
                placeholder="Enter Age"
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
                  <Select.Item label="Male" value="Male" />
                  <Select.Item label="Female" value="Female" />
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
            <FormControl mt="3">
              <FormControl.Label>Location</FormControl.Label>
              <VStack alignItems="center" space={4}>
                <Select
                  selectedValue={request.location}
                  minWidth="200"
                  accessibilityLabel="Choose Hosptial"
                  placeholder="Choose Hosptial"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(location) =>
                    setRequest({ ...request, location })
                  }
                >
                  <Select.Item label="Blood Bank" value="Blood Bank" />
                  <Select.Item label="Farwaniya Hospital" value="Farwaniya Hospital" />
                  <Select.Item label="Adan Hospital" value="Adan Hospital" />
                  <Select.Item label="AlAmiri Hospital" value="AlAmiri Hospital" />
                  <Select.Item label="Jahra Hospital" value="Jahra Hospital" />
                  <Select.Item label="Jaber Hospital" value="Jaber Hospital" />
                </Select>
              </VStack>
            </FormControl>
            <View alignItems="flex-end">
              <HStack alignItems="center" space={3} marginTop="1">
                <Text>URGENT</Text>
                <Switch
                  size="md"
                  value={isEnable}
                  onValueChange={handleChange}
                />
              </HStack>
            </View>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="red"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={handleSubmit}
                style={{ backgroundColor: "#D91C1F" }}
              >
                Submit
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default RequestModal;
