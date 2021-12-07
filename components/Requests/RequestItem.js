import { Pressable } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { Block, Text } from "../../assets";
import * as theme from "../../assets/theme";

const RequestItem = ({ request, navigation }) => {
  return (

    <Pressable
      onPress={() => navigation.navigate("RequestDetail", { request: request })}
    >
      <Block row card shadow color="white" style={styles.request}>
        <Block
          flex={0.25}
          card
          column
          color="secondary"
          style={styles.requestStatus}
        >
          <Block flex={0.25} middle center color={theme.colors.primary}>
            <Text small white style={{ textTransform: "uppercase" }}>
              {request.priority}
            </Text>
          </Block>
          <Block flex={0.7} center middle>
            <Text h2 white>
              {request.bloodType}
            </Text>
          </Block>
        </Block>
        <Block flex={0.75} column middle>
          <Text h3 style={{ paddingVertical: 8 }}>
            {request.name}
          </Text>
          <Text caption semibold>
            {request.age} • {request.gender} • File Number:{request.fileNumber}
          </Text>
        </Block>
      </Block>
    </Pressable>
  );
};

export default observer(RequestItem);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  requests: {
    marginTop: -55,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1,
  },
  requestsHeader: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  request: {
    padding: 20,
    marginBottom: 15,
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden",
    height: 90,
  },
});
