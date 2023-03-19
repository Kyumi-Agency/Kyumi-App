import React from 'react';
import {View, Text} from 'react-native';
import Animals from "./Animals/Animals";
import Categories from "./Categories/Categories";
import externalStyle from "../../style/externalStyle";
import "./Conseils.css";
const Conseils = () => {
    return (
        <View
        style={externalStyle.bg}
        >
            <Text>Conseils</Text>
            <Animals />
            <Categories />
        </View>
    );
};
export default Conseils;
