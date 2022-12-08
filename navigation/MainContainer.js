import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import AddNavigator from "./screens/AddNavigator";
import AboutScreen from "./screens/AboutScreen";

//Screen names
const homeName = "Home";
const searchName = "Search";
const addName = "Add";
const aboutName = "About";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (rn === "Add") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (rn === "About") {
              iconName = focused ? "person" : "person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#554AF0",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={searchName} component={SearchScreen} />
        <Tab.Screen name={addName} component={AddNavigator} />
        <Tab.Screen name={aboutName} component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
