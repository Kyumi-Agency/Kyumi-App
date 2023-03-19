import React from 'react';
import {View, Text, Image} from 'react-native';
import "./Published.css";
const img = "https://www.leparisien.fr/resizer/fGXimQvLycC2XjTOb9nran3rDcU=/1248x782/filters:focal(1184x745:1194x755)/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/NJE5TPKX7NDY3AL7MWIJJEXZOA.jpg";
const Published = () => {
    return (
        <View>
            <div className="published-by">
                <img src={img} alt="Logo" className="published-by__image" />
                    <div className="published-by__text">
                        <span>Published by</span>
                        <span>Refuge de l'espoire</span>
                    </div>
            </div>
        </View>
    );
};
export default Published;
