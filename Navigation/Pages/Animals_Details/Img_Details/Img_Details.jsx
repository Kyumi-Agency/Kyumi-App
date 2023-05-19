import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Carousel from "react-native-snap-carousel";

const {width: screenWidth} = Dimensions.get('window')
const Img_Details = ({image}) => {
    const _renderItem = ({item}) => {
        return (
            <View>
                <Image resizeMode={'cover'}
                       style={{ width: '100%', height: 300 }}
                       source={{uri: item}}
                />
            </View>
        );
    };

    return (
        <View>
            <Carousel
                data={image}
                renderItem={_renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout={"default"}
                loop={true}
            />
        </View>
    );
};
export default Img_Details;
