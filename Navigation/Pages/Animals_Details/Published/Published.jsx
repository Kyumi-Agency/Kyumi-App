import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const img = "https://f.maformation.fr/edito/sites/3/2022/08/animaux.jpeg";

const Published = () => {
    return (
        <View style={styles.container}>
            <View style={styles.publishedBy}>
                <Image source={{uri: img}} style={styles.publishedByImage} />
                <View style={styles.publishedByText}>
                    <Text style={styles.publishedByTextFirstSpan}>Published by</Text>
                    <Text>Refuge de l'espoire</Text>
                </View>
            </View>
        </View>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    publishedBy: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
    },
    publishedByImage: {
        borderRadius: 50,
        width: 50,
        height: 50,
    },
    publishedByText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 15,
    },
    publishedByTextFirstSpan: {
        fontWeight: 'bold',
    },
};
export default Published;
