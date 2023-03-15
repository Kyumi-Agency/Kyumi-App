import * as React from 'react';
import { View, Text } from 'react-native';
import {StyleSheet} from "react-native-web";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Missing_Finding from "./Navigation/Missing_Finding/Missing_Finding";
import Conseils from "./Navigation/Conseils/Conseils";

const tab = createBottomTabNavigator();

// const Stack = createNativeStackNavigator();

function Test(){
    return(
        <View>
            <Text>Test Page</Text>
        </View>
    )
}

function App() {
  return (
      <NavigationContainer>
        <tab.Navigator>
            <tab.Screen name={"Home"} component={Missing_Finding} />
            <tab.Screen name={"TestPage"} component={Test} />
            <tab.Screen name={"Conseils"} component={Conseils} />
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
