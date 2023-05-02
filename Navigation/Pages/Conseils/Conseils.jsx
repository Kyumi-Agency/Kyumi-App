import React from 'react';
import {ScrollView} from 'react-native';
import Animals from "./Animals/Animals";
import externalStyle from "../../../style/externalStyle";
import Cares from "./cares/Cares";
const Conseils = ({navigation}) => {
    return (
        <ScrollView
        style={externalStyle.bg}
        >
            <Animals onPress={() => navigation.navigate("AnimalDetailsPage")}/>
            <Cares onPress={() => navigation.navigate("AnimalDetailsPage")}/>
        </ScrollView>
    );
};
export default Conseils;
