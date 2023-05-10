import React, { useState } from 'react';
import {ScrollView} from 'react-native';
import Animals from "./Animals/Animals";
import externalStyle from "../../../style/externalStyle";
import Cares from "./cares/Cares";

const Conseils = ({navigation}) => {
    const animalsData = [
        { id: 1, name: 'cat' },
        { id: 2, name: 'dog' },
        { id: 3, name: 'bird' },
        { id: 4, name: 'fish' },
    ];

    const [selectedAnimal, setSelectedAnimal] = useState(1);
    const [selectedCare, setSelectedCare] = useState(null);

    const handleAnimalPress = (animalId) => {
        setSelectedAnimal(animalId);
    };

    const handleCarePress = (animal, care) => {
        setSelectedAnimal(animal);
        setSelectedCare(care);
        navigation.navigate('AnimalCaresPage', { animal, care });
    };
    const selectedAnimalName = animalsData.find(animal => animal.id === selectedAnimal)?.name;
    return (
        <ScrollView
            style={externalStyle.bg}
        >
            <Animals onPress={handleAnimalPress} selectedAnimal={selectedAnimal} />
            <Cares onPress={handleCarePress} selectedAnimal={selectedAnimalName} animal={selectedAnimal} />
        </ScrollView>
    );
};

export default Conseils;
