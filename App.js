import * as React from 'react';
import { View, Text } from 'react-native';
import {StyleSheet} from "react-native-web";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Missing_Finding from "./Navigation/Missing_Finding/Missing_Finding";
import Conseils from "./Navigation/Conseils/Conseils";
import Home from "./Navigation/Home/Home";
import Map from "./Navigation/Map/Map";

const tab = createBottomTabNavigator();

// const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <tab.Navigator>
            <tab.Screen name={"Home"} component={Home} />
            <tab.Screen name={"Missing_Finding"} component={Missing_Finding} />
            <tab.Screen name={"Conseils"} component={Conseils} />
            <tab.Screen name={"Map"} component={Map} />
        </tab.Navigator>
      </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
