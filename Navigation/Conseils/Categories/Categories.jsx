import React from 'react';
import {View, Text} from 'react-native';
import "./Categories.css";
const Categories = () => {
    return (
        <View>
            <nav className="vertical-nav">
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">À propos</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </View>
    );
};
export default Categories;
