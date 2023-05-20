import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../Pages/Home/Home";
import Animals_Details from "../Pages/Animals_Details/Animals_Details";
import Profile from "../Pages/Profile/Profile";
import {Button} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const homeScreenName = "HomePage";
const AnimalDetailsScreenName = "AnimalDetailsPage";
const profileScreenName = "ProfilePage";

const HomeStack = () => {
    return (
        <Stack.Navigator initialRoutName="Home">
            <Stack.Screen name={homeScreenName} component={Home} options={
                ({navigation}) => {
                    return {
                        headerTitle: "Home",
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
            <Stack.Screen name={AnimalDetailsScreenName} component={Animals_Details}/>
            <Stack.Screen name={profileScreenName} component={Profile}/>
        </Stack.Navigator>
    )
}

export default HomeStack;
