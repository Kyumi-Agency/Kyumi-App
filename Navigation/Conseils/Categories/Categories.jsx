import React from 'react';
import {View, Text} from 'react-native';
import "./Categories.css";
const Categories = () => {
    return (
        <View>
            <Text>Categories</Text>
            <div className="navbar">
                <a href="#" className="active">Home</a>
                <a href="#">News</a>
                <a href="#">Contact</a>
            </div>
        </View>
    );
};
export default Categories;
