import Main from "./src/Pages/Main";
import Modal from "./src/Pages/Modal";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

export default function App() {
  const RootStack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator mode="modal">
          <RootStack.Screen
            name="Calculator"
            component={Main}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Preferences"
            component={Modal}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}
