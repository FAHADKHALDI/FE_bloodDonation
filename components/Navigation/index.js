import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

// components
import Home from "../Home";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import Timeline from "../screens/Timeline";
import RequestDetail from "../RequestDetail";

//stores

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (

    <Navigator initialRouteName={"Home"}>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="Timeline"
        component={Timeline}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="RequestDetail"
        component={RequestDetail}
        options={{
          headerShown: false,
        }}
      />

    </Navigator>
  );
};

export default observer(RootNavigator);
