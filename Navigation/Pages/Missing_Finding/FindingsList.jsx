import React, {useEffect, useState} from "react";
import {Text, View, ScrollView, StyleSheet, Pressable, Image, TouchableOpacity, TextInput} from "react-native";
import AnimalCard from "./FindingsList/AnimalCard";
import SearchBar from "./FindingsList/SearchBar";
import externalStyle from "../../../style/externalStyle";

const FindingsList = ({navigation}) => {
    // const listType = type === "missing" ? `https://kyumibdd.osc-fr1.scalingo.io/api/get/findings/adoption` : `https://kyumibdd.osc-fr1.scalingo.io/api/get/findings/adoption`;
    const listType = `https://kyumibdd.osc-fr1.scalingo.io/api/get/findings/adoption`;
    const [species, setSpecies] = useState([])
    const [selectedAnimal, setSelectedAnimal] = useState(1);
    const [queryAnimal, setQueryAnimal] = useState('chien');
    const [searchText, setSearchText] = React.useState('');

    useEffect(() => {
        fetch(listType)
            .then((response) => response.json())
            .then((data) => setSpecies(data))
            .catch((error) => console.error(error))
    }, [queryAnimal]);

    const handleAnimalPress = () => {
        // selectedAnimal === 1 ? setSelectedAnimal(2) : setSelectedAnimal(1);
        if (selectedAnimal === 1) {
            setSelectedAnimal(2)
            setQueryAnimal('chat')
        } else {
            setSelectedAnimal(1)
            setQueryAnimal('chien')
        }
    };

    function handleSearchTextChange(value) {
        setSearchText(value);
    }

    return (
        <ScrollView style={externalStyle.bg} removeClippedSubviews={false}>
            <Text style={styles.text}>Find your pet</Text>
            {/*<Text style={styles.text}>Catégorie</Text>*/}

            <View style={styles.animalsContainer} removeClippedSubviews={false}>
                <Pressable
                    onPress={() => handleAnimalPress()}
                    key={1}
                    style={[
                        styles.animalCard,
                        { backgroundColor: selectedAnimal === 1 ? '#EB9026' : '#EBCAA4' },
                    ]}
                >
                    <View style={styles.animalContent}>
                        <Text style={styles.animalName}>Chien</Text>
                        <Image
                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/616/616408.png" }}
                            style={styles.animalImage}
                        />
                    </View>
                </Pressable>
                <Pressable
                    onPress={() => handleAnimalPress()}
                    key={2}
                    style={[
                        styles.animalCard,
                        { backgroundColor: selectedAnimal === 2 ? '#EB9026' : '#EBCAA4' },
                    ]}
                >
                    <View style={styles.animalContent}>
                        <Text style={styles.animalName}>Chat</Text>
                        <Image
                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/616/616430.png" }}
                            style={styles.animalImage}
                        />
                    </View>
                </Pressable>
            </View>
            <TextInput
                style={styles.searchInput}
                placeholder="🔍 Rechercher"
                value={searchText}
                onChangeText={handleSearchTextChange}
                // onSubmitEditing={handleSearch}
            />

            <View style={styles.cardsContainer}>
                {species.length > 0 &&
                    species[selectedAnimal][queryAnimal]
                        .filter((animal) => animal.nom.toLowerCase().includes(searchText.toLowerCase()))
                        .map((animal, index) => (
                        // <Text>Hello</Text>
                        <AnimalCard
                            style={styles.animalCard}
                            key={index}
                            onPress={() => navigation.navigate("AnimalDetailsPage")}
                            refuge={animal.refuge}
                            image={animal.galerie[0]}
                            name={animal.nom}
                            race={animal.race}
                        />
                    ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingTop: 30,
    },

    animalsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingTop: 30,
    },
    animalCard: {
        width: '40%',
        height: 60,
        marginBottom: 20,
        borderRadius: 50,
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
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 20,
        color: '#fff',
    },

    searchInput: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        marginVertical: 10,
        width: "90%",
        alignSelf: "center",
    },
});

export default FindingsList;
