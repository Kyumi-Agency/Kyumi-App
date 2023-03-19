import React from "react";
import "./Missing_Finding.css";
import {Text, View, ScrollView} from "react-native-web";
import { Link } from '@react-navigation/native';
import Animals_Details from "../Animals_Details/Animals_Details";

function Missing_Finding({initialName}) {
    const [name, setName] = React.useState(initialName);

    return (
        <ScrollView>
            <Text>Missing_Finding</Text>
            <br/>

            {/*Faire marcher des Link avec route*/}
            <Text>Voici le detail d'un animal : </Text>
            <Animals_Details />
        </ScrollView>
    );
}

export default Missing_Finding;
