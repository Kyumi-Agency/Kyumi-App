import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Conseils from "../Pages/Conseils/Conseils";
import AnimalCaresPage from "../Pages/Conseils/AnimalCaresPage/AnimalCaresPage";
import Profile from "../Pages/Profile/Profile";

import {Ionicons} from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const conseilsScreenName = "ConseilsPage";
const AnimalCaresScreenName = "AnimalCaresPage";

const profileScreenName = "ProfilePage";
const ConseilsStack = () => {
    return (
        <Stack.Navigator initialRoutName="Conseils">
            <Stack.Screen name={conseilsScreenName} component={Conseils} options={
                ({navigation}) => {
                    return {
                        headerTitle: "Conseils",
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
            <Stack.Screen name={AnimalCaresScreenName} component={AnimalCaresPage}/>
            <Stack.Screen name={profileScreenName} component={Profile}/>
        </Stack.Navigator>
    )
}
export default ConseilsStack;
