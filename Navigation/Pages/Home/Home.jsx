import React from 'react';
import {ScrollView, View} from 'react-native';
import Reported_Missing from "./Reported_Missing/Reported_Missing";
import News from "./News/News";
import New_Arrivals from "./New_Arrivals/New_Arrivals";
const Home = ({navigation}) => {

    return (
        <ScrollView>
            <News />
            <New_Arrivals navigation={navigation} />
            <Reported_Missing navigation={navigation} />
        </ScrollView>
    );
};
export default Home;
