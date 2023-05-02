import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Conseils from "../Pages/Conseils/Conseils";
import Animals_Details from "../Pages/Animals_Details/Animals_Details";

const Stack = createNativeStackNavigator();
const conseilsScreenName = "ConseilsPage";
const AnimalDetailsScreenName = "AnimalDetailsPage";

const ConseilsStack = () => {
    return (
        <Stack.Navigator initialRoutName="Conseils">
            <Stack.Screen name={conseilsScreenName} component={Conseils} options={
                ({navigation}) => {
                    return {
                        headerTitle: "Conseils",
                    };
                }
            }/>
            <Stack.Screen name={AnimalDetailsScreenName} component={Animals_Details}/>
        </Stack.Navigator>
    )
}

export default ConseilsStack;
