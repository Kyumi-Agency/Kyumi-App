import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import Img_Details from "./Img_Details/Img_Details";
import Description_Details from "./Description_Details/Description_Details";
import More_Details from "./More_Details/More_Details";
import Published from "./Published/Published";
import externalStyle from "../../../style/externalStyle";
import {useRoute} from '@react-navigation/native';
import {fetchAnimalById} from "../api";

const Animals_Details = () => {
    //const [animal, setAnimal] = useState(null);
    const route = useRoute();
    const {animal} = route.params;

    if (!animal) return null;

    return (
        <ScrollView style={externalStyle.bg}>
            <Img_Details image={animal.galerie}/>
            <Description_Details animal={animal}/>
            <More_Details animal={animal}/>
            <Published refuge={animal.refuge}/>
        </ScrollView>
    );
};
export default Animals_Details;
