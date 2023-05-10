import * as React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Cares = ({onPress, animal}) => {
    const CaresData = [
        {
            id: "1",
            name: "Day care",
            image: "https://static.thenounproject.com/png/3413825-200.png"
        },
        {
            id: "2",
            name: "Grooming",
            image: "https://cdn-icons-png.flaticon.com/512/87/87997.png"
        },
        {
            id: "3",
            name: "Vaccination",
            image: "https://cdn-icons-png.flaticon.com/512/2535/2535759.png"
        },
        {
            id: "4",
            name: "Operation",
            image: "https://cdn-icons-png.flaticon.com/512/2904/2904190.png"
        },
        {
            id: "5",
            name: "Pet Shop",
            image: "https://www.freeiconspng.com/thumbs/bone-icon/animals-dog-bone-icon-png-12.png"
        },
        {
            id: "6",
            name: "Anti Flow",
            image: "https://cdn.onlinewebfonts.com/svg/img_527545.png"
        },

    ];
    const animalIds = {
        1: 'cat',
        2: 'dog',
        3: 'bird',
        4: 'fish',
    };
    const handlePress = (care) => {
        onPress(animalIds[animal], care);
    };

    return (
        <View style={styles.CaresContainer}>
            {CaresData.map((care) => (
                <TouchableOpacity onPress={() => handlePress(care.name)} key={care.id} style={styles.animalCard}>
                    <Image source={{ uri: care.image }} style={styles.animalImage} />
                    <Text style={styles.animalName}>{care.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    CaresContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingTop: 30,
        //backgroundColor: '#f1f1f1',
    },
    animalCard: {
        width: '30%',
        height: 130,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#FFF',
        overflow: 'hidden',
        alignItems: 'center',
    },
    animalImage: {
        width: '60%',
        height: '80%',
        resizeMode: 'contain',
    },
    animalName: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 0,
        paddingHorizontal: 12,
        textAlign: 'center',
        color: '#000',
    },
});

export default Cares;
