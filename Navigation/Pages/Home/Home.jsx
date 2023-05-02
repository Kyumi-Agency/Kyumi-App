import React from 'react';
import {View} from 'react-native';
import Reported_Missing from "./Reported_Missing/Reported_Missing";
import News from "./News/News";
import New_Arrivals from "./New_Arrivals/New_Arrivals";

const Home = (navigation) => {
    const handlePress = (id) => {
        console.log(`Element with id ${id} clicked`);
        navigation.navigate("AnimalDetailsPage");
    };

    return (
        <View>
            <News />
            <New_Arrivals onPress={handlePress}/>
            <Reported_Missing />
        </View>
    );
};
export default Home;
