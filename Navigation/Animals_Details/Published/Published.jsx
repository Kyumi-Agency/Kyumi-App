import React from 'react';
import {View, Text, Image} from 'react-native';
import "./Published.css";

const Published = () => {
    return (
        <View>
            <Text>Published by</Text>
            <div>
                <Text>Refuge de chandler</Text>
                <Image source={{uri:"https://www.leparisien.fr/resizer/fGXimQvLycC2XjTOb9nran3rDcU=/1248x782/filters:focal(1184x745:1194x755)/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/NJE5TPKX7NDY3AL7MWIJJEXZOA.jpg"}} style={{width : 150, height : 150, borderRadius : 75}} />
            </div>
        </View>
    );
};
export default Published;
