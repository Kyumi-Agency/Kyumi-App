import * as React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Animals = ({onPress}) => {
    const animalsData = [
        {
            id: "1",
            name: "cat",
            image: "https://cdn-icons-png.flaticon.com/512/616/616430.png"
        },
        {
            id: "2",
            name: "dog",
            image: "https://cdn-icons-png.flaticon.com/512/616/616408.png"
        },
        {
            id: "3",
            name: "bird",
            image: "https://cdn-icons-png.flaticon.com/512/2129/2129122.png"
        },
        {
            id: "4",
            name: "fish",
            image: "https://cdn-icons-png.flaticon.com/512/2970/2970068.png"
        },

    ];

    return (
        <View style={styles.animalsContainer}>
            {animalsData.map((animal) => (
                <TouchableOpacity
                    onPress={onPress}
                    key={animal.id}
                    style={styles.animalCard}
                >
                    <View style={styles.animalContent}>
                        <Text style={styles.animalName}>{animal.name}</Text>
                        <Image
                            source={{ uri: animal.image }}
                            style={styles.animalImage}
                        />
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
        backgroundColor: '#f1f1f1',
    },
    animalCard: {
        width: '44%',
        height: 100,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(117,77,65,0.71)',
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
