import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Missing_Finding from "../Pages/Missing_Finding/Missing_Finding";
import Animals_Details from "../Pages/Animals_Details/Animals_Details";
import FindingsList from "../Pages/Missing_Finding/FindingsList";
import Profile from "../Pages/Profile/Profile";
import {Ionicons} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const missingFindingScreenName = "MissingFindingPage";
const AnimalDetailsScreenName = "AnimalDetailsPage";
const FindingsListPageScreenName = "FindingsListPage";

const profileScreenName = "ProfilePage";
const MissingFindingStack = () => {

    return (
        <Stack.Navigator initialRoutName="Missing_Finding">
            <Stack.Screen name={missingFindingScreenName} component={Missing_Finding} options={
                ({navigation}) => {
                    return {
                        headerTitle: "Missing & Finding",
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
            <Stack.Screen name={FindingsListPageScreenName} component={FindingsList}/>
            <Stack.Screen name={profileScreenName} component={Profile}/>
        </Stack.Navigator>
    )
}

export default MissingFindingStack;
