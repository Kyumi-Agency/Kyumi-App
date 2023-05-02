import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Map from "../Pages/Map/Map";

const Stack = createNativeStackNavigator();
const mapScreenName = "MapPage";

const MapStack = () => {

    return (
        <Stack.Navigator initialRoutName="Map">
            <Stack.Screen name={mapScreenName} component={Map} options={
                ({navigation}) => {
                    return {
                        headerTitle: "Map",
                    };
                }

            }/>
        </Stack.Navigator>
    )
}

export default MapStack;
