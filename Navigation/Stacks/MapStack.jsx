import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Map from "../Pages/Map/Map";
import Profile from "../Pages/Profile/Profile";

import {Ionicons} from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const mapScreenName = "MapPage";

const profileScreenName = "ProfilePage";
const MapStack = () => {

    return (
        <Stack.Navigator initialRoutName="Map">
            <Stack.Screen name={mapScreenName} component={Map} options={
                ({navigation}) => {
                    return {
                        headerTitle: "Map",
                        headerRight: () => (
                            <Ionicons
                                name="person"
                                size={24}
                                color="black"
                                onPress={() => navigation.navigate(profileScreenName)}
                                style={{ marginRight: 10 }}
                            />
                        ),
                        headerRightContainerStyle: {
                            marginRight: 10,
                        },
                    };
                }

            }/>

            <Stack.Screen name={profileScreenName} component={Profile}/>
        </Stack.Navigator>
    )
}

export default MapStack;
