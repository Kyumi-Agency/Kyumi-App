import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from "./Navigation/TabNavigator";


function App() {
  return (
      <NavigationContainer>
        <TabNavigator />
        </NavigationContainer>
  );
}

export default App;
