import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Img_Details from "./Img_Details/Img_Details";
import Description_Details from "./Description_Details/Description_Details";
import More_Details from "./More_Details/More_Details";
import Published from "./Published/Published";
import externalStyle from "../../style/externalStyle";

const Animals_Details = () => {
    return (
        <View style={externalStyle.bg}>
            <Img_Details />
            <Description_Details />
            <More_Details />
            <Published />
        </View>
    );
};
export default Animals_Details;
