import React from 'react';
import {View, Text, Image} from 'react-native';

const temp = 'https://www.leparisien.fr/resizer/fGXimQvLycC2XjTOb9nran3rDcU=/1248x782/filters:focal(1184x745:1194x755)/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/NJE5TPKX7NDY3AL7MWIJJEXZOA.jpg';
const Img_Details = () => {
    return (
        <View style={{flex: 1 }}>
            <Image resizeMode={'cover'}
                   style={{ width: '100%', height: 200} }
                   source={{uri: temp}}/>
        </View>
    );
};
export default Img_Details;
