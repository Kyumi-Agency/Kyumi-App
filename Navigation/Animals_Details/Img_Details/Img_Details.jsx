import React from 'react';
import {View, Text, Image} from 'react-native';
import "./Img_Details.css";

const Img_Details = () => {
    return (
        <View>
            <Image source={{uri:"https://www.leparisien.fr/resizer/fGXimQvLycC2XjTOb9nran3rDcU=/1248x782/filters:focal(1184x745:1194x755)/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/NJE5TPKX7NDY3AL7MWIJJEXZOA.jpg"}} style={{width: 300, height: 300}} />
        </View>
    );
};
export default Img_Details;
