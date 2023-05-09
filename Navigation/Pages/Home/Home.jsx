import React from 'react';
import {View} from 'react-native';
import Reported_Missing from "./Reported_Missing/Reported_Missing";
import News from "./News/News";
import New_Arrivals from "./New_Arrivals/New_Arrivals";

const Home = ({navigation}) => {

    return (
        <View>
            <News />
            <New_Arrivals onPress={() => navigation.navigate("AnimalDetailsPage")}/>
            <Reported_Missing />
        </View>
    );
};
export default Home;
