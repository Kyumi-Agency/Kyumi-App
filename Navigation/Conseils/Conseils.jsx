import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Animals from "./Animals/Animals";
import externalStyle from "../../style/externalStyle";
const Conseils = () => {
    return (
        <ScrollView
        style={externalStyle.bg}
        >
            <Animals />
        </ScrollView>
    );
};
export default Conseils;
