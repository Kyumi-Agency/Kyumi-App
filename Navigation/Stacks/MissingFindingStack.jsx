import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Missing_Finding from "../Pages/Missing_Finding/Missing_Finding";
import Animals_Details from "../Pages/Animals_Details/Animals_Details";

const Stack = createNativeStackNavigator();
const missingFindingScreenName = "MissingFindingPage";
const AnimalDetailsScreenName = "AnimalDetailsPage";

const MissingFindingStack = () => {

    return (
        <Stack.Navigator initialRoutName="Missing_Finding">
            <Stack.Screen name={missingFindingScreenName} component={Missing_Finding} options={
                ({navigation}) => {
                    return {
                        headerTitle: "Missing & Finding",
                    };
                }

            }/>
            <Stack.Screen name={AnimalDetailsScreenName} component={Animals_Details}/>
        </Stack.Navigator>
    )
}

export default MissingFindingStack;
