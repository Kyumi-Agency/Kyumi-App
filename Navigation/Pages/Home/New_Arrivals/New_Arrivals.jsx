import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { fetchAnimals } from "../../api";
import AnimalCard from "../../Missing_Finding/FindingsList/AnimalCard";

const New_Arrivals = ({ navigation }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAnimals("adoption") // Vous pouvez remplacer "adoption" par le type approprié
            .then((data) => {
                const animals = data.flatMap(animalGroup => Object.values(animalGroup).slice(1)).flat();
                setData(animals);
            });
    }, []);

    const handlePress = (animal) => {
        navigation.navigate('AnimalDetailsPage', { animal });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nouveaux arrivants</Text>
            <ScrollView horizontal style={styles.scrollContainer}>
                {data.map((animal, index) => (
                    <View key={index} style={styles.cardContainer}>
                        <AnimalCard
                            onPress={() => handlePress(animal)}
                            refuge={animal.refuge}
                            image={animal.galerie[0]}
                            name={animal.nom}
                            race={animal.race}
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scrollContainer: {
        flexDirection: 'row',
    },
    cardContainer: {
        margin: 10,  // Ceci est la marge que vous pouvez ajuster pour espacer vos cartes
    }
});

export default New_Arrivals;
