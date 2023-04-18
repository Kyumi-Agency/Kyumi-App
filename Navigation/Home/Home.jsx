import React from 'react';
import {View, Text} from 'react-native';
import Reported_Missing from "./Reported_Missing/Reported_Missing";
import News from "./News/News";
import New_Arrivals from "./New_Arrivals/New_Arrivals";

const Home = () => {
    return (
        <View>
            <News />
            <New_Arrivals />
            <Reported_Missing />
        </View>
    );
};
export default Home;
