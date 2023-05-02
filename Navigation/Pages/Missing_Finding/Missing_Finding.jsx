import React from "react";
import {Text, View, ScrollView, StyleSheet} from "react-native";
import Animals_Details from "../Animals_Details/Animals_Details";
import externalStyle from "../../../style/externalStyle";
const Missing_Finding = () => {
    return (
        <ScrollView style={externalStyle.center}>
            <Text>Missing_Finding</Text>
            <Text>Voici le detail d'un animal : </Text>
        </ScrollView>
    );
};

export default Missing_Finding;
