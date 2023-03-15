import React from 'react';
import {View, Text} from 'react-native';
import Animals from "./Animals/Animals";
import Categories from "./Categories/Categories";
const Conseils = () => {
    return (
        <View>
            <Text>Conseils</Text>
            <Animals />
            <Categories />
        </View>
    );
};
export default Conseils;
