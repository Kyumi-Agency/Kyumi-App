import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Missing_Finding from "./Navigation/Missing_Finding/Missing_Finding";
import Conseils from "./Navigation/Conseils/Conseils";
import Home from "./Navigation/Home/Home";
import Map from "./Navigation/Map/Map";
import { Ionicons } from '@expo/vector-icons';

const tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
        <tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused ? 'ios-home' : 'ios-home-outline';
                } else if (route.name === 'Missing Finding') {
                    iconName = focused ? 'ios-paw' : 'ios-paw-outline';
                }
                else if (route.name === 'Conseils') {
                    iconName = focused ? 'ios-book' : 'ios-book-outline';
                }
                else if (route.name === 'Map') {
                    iconName = focused ? 'ios-locate' : 'ios-locate-outline';
                }
                return <Ionicons name={iconName} size={size} color={focused ? '#c18f6a' : '#8e8e8f'} />;
            },
            headerShown: false,
            tabBarActiveTintColor: '#c18f6a',
        })}
        >
            <tab.Screen name={"Home"} component={Home} />
            <tab.Screen name={"Missing Finding"} component={Missing_Finding} />
            <tab.Screen name={"Conseils"} component={Conseils} />
            <tab.Screen name={"Map"} component={Map} />
        </tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
