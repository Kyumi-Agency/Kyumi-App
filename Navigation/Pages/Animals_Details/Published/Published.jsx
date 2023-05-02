import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const img = "https://www.leparisien.fr/resizer/fGXimQvLycC2XjTOb9nran3rDcU=/1248x782/filters:focal(1184x745:1194x755)/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/NJE5TPKX7NDY3AL7MWIJJEXZOA.jpg";

const Published = () => {
    return (
        <View>
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
    publishedBy: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        maxWidth: 500,
        marginHorizontal: 'auto',
        padding: 10,
    },
    publishedByImage: {
        borderRadius: 50,
        width: 50,
        height: 50,
        marginRight: 10,
    },
    publishedByText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    publishedByTextFirstSpan: {
        fontWeight: 'bold',
    },
};
export default Published;
