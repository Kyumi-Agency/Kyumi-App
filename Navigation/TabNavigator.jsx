import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Missing_Finding from "./Pages/Missing_Finding/Missing_Finding";
import {Ionicons} from "@expo/vector-icons";
import Home from "./Pages/Home/Home";
import Conseils from "./Pages/Conseils/Conseils";
import Map from "./Pages/Map/Map";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ConseilsStack from "./Stacks/ConseilsStack";
import MissingFindingStack from "./Stacks/MissingFindingStack";
import MapStack from "./Stacks/MapStack";
import HomeStack from "./Stacks/HomeStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
            <Tab.Navigator
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
                        return <Ionicons name={iconName} size={size} color={focused ? '#eb9026' : '#8e8e8f'} />;
                    },
                    headerShown: false,
                    tabBarActiveTintColor: '#eb9026',
                })}
            >
                <Tab.Screen name={"Home"} component={HomeStack} />
                <Tab.Screen name={"Missing Finding"} component={MissingFindingStack} />
                <Tab.Screen name={"Conseils"} component={ConseilsStack} />
                <Tab.Screen name={"Map"} component={MapStack} />
            </Tab.Navigator>
    );
}

export default TabNavigator;
