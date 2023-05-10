import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Animals = ({ onPress, selectedAnimal }) => {
    const animalsData = [
        {
            id: '1',
            name: 'cat',
            image: 'https://cdn-icons-png.flaticon.com/512/616/616430.png',
        },
        {
            id: '2',
            name: 'dog',
            image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
        },
        {
            id: '3',
            name: 'bird',
            image: 'https://cdn-icons-png.flaticon.com/512/2129/2129122.png',
        },
        {
            id: '4',
            name: 'fish',
            image: 'https://cdn-icons-png.flaticon.com/512/2970/2970068.png',
        },
    ];
    const [selectedAnimalId, setSelectedAnimalId] = useState(
        parseInt(animalsData[0].id),
    );

    const handleAnimalPress = (animalId) => {
        setSelectedAnimalId(parseInt(animalId));
        onPress(animalId);
    };

    useEffect(() => {
        setSelectedAnimalId(parseInt(selectedAnimal));
    }, [selectedAnimal]);

    useEffect(() => {
        setSelectedAnimalId(parseInt(animalsData[0].id));
    }, []);

    return (
        <View style={styles.animalsContainer}>
            {animalsData.map((animal) => (
                <TouchableOpacity
                    onPress={() => handleAnimalPress(animal.id)}
                    key={animal.id}
                    style={[
                        styles.animalCard,
                        {
                            backgroundColor:
                                selectedAnimalId === parseInt(animal.id)
                                    ? '#EB9026'
                                    : '#EBCAA4',
                        },
                    ]}>
                    <View style={styles.animalContent}>
                        <Text style={styles.animalName}>{animal.name}</Text>
                        <Image source={{ uri: animal.image }} style={styles.animalImage} />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    animalsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingTop: 30,
    },
    animalCard: {
        width: '44%',
        height: 100,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#EBCAA4',
    },
    animalContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '80%',
    },
    animalImage: {
        width: '60%', // réduit la taille de l'image et la place à droite
        height: '100%',
        overflow: 'visible',
        alignSelf: 'flex-end', // permet de centrer l'image à droite
    },
    animalName: {
        alignSelf: 'flex-start', // permet de centrer le texte à gauche
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 35,
        paddingHorizontal: 12,
        color: '#fff',
    },
});

export default Animals;
