import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import AnimalList from "./FindingsList/AnimalList";

const FindingsList = ({navigation}) => {
    // const listType = type === "missing" ? `https://kyumibdd.osc-fr1.scalingo.io/api/get/findings/adoption` : `https://kyumibdd.osc-fr1.scalingo.io/api/get/findings/adoption`;
    const listType = `https://kyumibdd.osc-fr1.scalingo.io/api/get/findings/adoption`;
    const [species, setSpecies] = useState([])

    useEffect(() => {
        fetch(listType)
            .then((response) => response.json())
            .then((data) => setSpecies(data))
            .catch((error) => console.error(error))
    }, []);

    // console.log(species[1]);

    return (
        <ScrollView style={styles.container}>
            {/*<Text>{console.log(species[1])}</Text>*/}
            {species.length > 0 &&
                species[1].chien.map((chien, index) => (
                    // <Text>Hello</Text>
                    <AnimalList
                        key={index}
                        onPress={() => navigation.navigate("AnimalDetailsPage")}
                        species={"Chien"}
                        refuge={chien.refuge}
                        image={chien.galerie[0]}
                        name={chien.nom}
                        race={chien.race}
                    />
                ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default FindingsList;
