import * as React from 'react';
import {View, Text, Image} from 'react-native';
const Animals = () => {
    const animalsData = [
        {
            id: "1",
            name: "cat",
            image: "https://www.leparisien.fr/resizer/fGXimQvLycC2XjTOb9nran3rDcU=/1248x782/filters:focal(1184x745:1194x755)/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/NJE5TPKX7NDY3AL7MWIJJEXZOA.jpg"
        },
        {
            id: "2",
            name: "dog",
            image: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
        },
        {
            id: "3",
            name: "bird",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/640px-Eopsaltria_australis_-_Mogo_Campground.jpg"
        },
        {
            id: "4",
            name: "fish",
            image: "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },

    ];

    return (
        <View>
            {animalsData.map((animals, index) => {
                return (
                    <View key={index}>
                        <Text>{animals.name}</Text>
                        <Image source={{uri: animals.image}} style={{width: 100, height: 100}} />
                    </View>
                );
            })}
        </View>
    );
};
export default Animals;
