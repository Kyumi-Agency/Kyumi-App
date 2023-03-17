import React from 'react';
import {View, Text, Image} from 'react-native';
import "./Animals_Details.css";
import Img_Details from "./Img_Details/Img_Details";
import Description_Details from "./Description_Details/Description_Details";
import More_Details from "./More_Details/More_Details";
import Published from "./Published/Published";

const Animals_Details = () => {
    return (
        <View>
            <Img_Details />
            <Description_Details />
            <More_Details />
            <Published />
        </View>
    );
};
export default Animals_Details;
