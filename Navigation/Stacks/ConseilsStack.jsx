import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Conseils from "../Pages/Conseils/Conseils";
import AnimalCaresPage from "../Pages/Conseils/AnimalCaresPage/AnimalCaresPage";

const Stack = createNativeStackNavigator();
const conseilsScreenName = "ConseilsPage";
const AnimalCaresScreenName = "AnimalCaresPage";

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
            <Stack.Screen name={AnimalCaresScreenName} component={AnimalCaresPage}/>
        </Stack.Navigator>
    )
}
export default ConseilsStack;
