import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import "./More_Details.css";

const More_Details = () => {
    return (
        <View>
            <div className="more-details">
                <h2>More details</h2>
                <p>Color: <span>Blue</span></p>
                <p>Weight: <span>2.5 kg</span></p>
                <p>Vaccinated: <span>Yes</span></p>
            </div>
        </View>
    );
};
export default More_Details;
