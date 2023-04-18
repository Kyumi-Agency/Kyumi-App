import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

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
        <View style={styles.animalsContainer}>
            {animalsData.map((animal) => (
                <View key={animal.id} style={styles.animalCard}>
                    <Image source={{ uri: animal.image }} style={styles.animalImage} />
                    <Text style={styles.animalName}>{animal.name}</Text>
                </View>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    animalsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: '#f1f1f1',
    },
    animalCard: {
        width: '48%',
        height: 250,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(193,143,106,0.71)',
        overflow: 'hidden',
        alignItems: 'center',
    },
    animalImage: {
        width: '100%',
        height: '85%',
    },
    animalName: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 8,
        paddingHorizontal: 12,
        textAlign: 'center',
        color: '#fff',
    },
});

export default Animals;
