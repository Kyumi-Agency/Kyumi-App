import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../Pages/Home/Home";
import Animals_Details from "../Pages/Animals_Details/Animals_Details";

const Stack = createNativeStackNavigator();
const homeScreenName = "HomePage";
const AnimalDetailsScreenName = "AnimalDetailsPage";

const HomeStack = () => {
    return (
        <Stack.Navigator initialRoutName="Home">
            <Stack.Screen name={homeScreenName} component={Home} options={
                ({navigation}) => {
                    return {
                        headerTitle: "Home",
                    };
                }
            }/>
            <Stack.Screen name={AnimalDetailsScreenName} component={Animals_Details}/>
        </Stack.Navigator>
    )
}

export default HomeStack;
