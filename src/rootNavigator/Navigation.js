import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationService from "./Router";
import Greeting from "../pages/Greeting";
import Home from "../pages/Home";
import MoneyRequest from "../pages/MoneyRequest";
import SearchRecipient from "../pages/SearchRecipient";

const AppStack = createStackNavigator();
const AppStackScreens = () => {
  return (
    <AppStack.Navigator
      initialRouteName={"Greeting"}
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name={"Greeting"} component={Greeting} />
      <AppStack.Screen name={"Home"} component={Home} />
      <AppStack.Screen name={"MoneyRequest"} component={MoneyRequest} />
      <AppStack.Screen name={"SearchRecipient"} component={SearchRecipient} />
    </AppStack.Navigator>
  )
}

const RootStack = createStackNavigator();

const RootStackScreens = () => {
  return (
    <RootStack.Navigator
      initialRouteName={"App"}
      screenOptions={{ headerShown: false, animationEnabled: true }}
    >
      <RootStack.Screen name="App" component={AppStackScreens} />
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    >
      <RootStackScreens />
    </NavigationContainer>
  );
};