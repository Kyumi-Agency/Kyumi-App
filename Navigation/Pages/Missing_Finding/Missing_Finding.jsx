import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import Findings from "./Findings/Findings";
import externalStyle from "../../../style/externalStyle";

const Missing_Finding = ({navigation}) => {
    return (
        <View style={[styles.container, externalStyle.bg]}>
            <Findings type={"finding"} onPress={(type) => navigation.navigate("FindingsListPage", {type: type})}/>
            <Findings type={"missing"} onPress={(type) => navigation.navigate("FindingsListPage", {type: type})}/>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Missing_Finding;
