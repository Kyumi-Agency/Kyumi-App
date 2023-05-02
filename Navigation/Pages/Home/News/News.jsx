import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 2 / 4);

const News = () => {
    const newsData = [
        {
            id: "1",
            image: "https://f.maformation.fr/edito/sites/3/2022/08/animaux.jpeg"
        },
        {
            id: "2",
            image: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
        },
        {
            id: "3",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/640px-Eopsaltria_australis_-_Mogo_Campground.jpg"
        },
        {
            id: "4",
            image: "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },

    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Image
                    source={{ uri: item.image }}
                    style={{ width: '100%', height: '100%', borderRadius: 8 }}
                    resizeMode="cover"
                />
            </View>
        );
    };

    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>News</Text>
            <Carousel
                layout="default"
                data={newsData}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
            <Pagination
                dotsLength={newsData.length}
                activeDotIndex={activeIndex}
                containerStyle={styles.pagination}
                dotStyle={styles.dotStyle}
                inactiveDotStyle={styles.incativeDotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    pagination: {
        position: 'absolute',
        bottom: -30,
        alignSelf: 'center',
        paddingVertical: 8,
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: '#754d41',
    },
    incativeDotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: '#ccc',
    }
});
export default News;
