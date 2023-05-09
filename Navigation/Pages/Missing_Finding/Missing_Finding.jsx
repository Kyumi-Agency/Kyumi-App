import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import Findings from "./Findings/Findings";

const Missing_Finding = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Findings type={"finding"} onPress={() => navigation.navigate("FindingsListPage")}/>
            <Findings type={"missing"} onPress={() => navigation.navigate("FindingsListPage")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Missing_Finding;
