import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const More_Details = () => {
    return (
        <View style={styles.moreDetails}>
            <Text style={styles.moreDetails}>More details</Text>
            <Text style={styles.moreDetails}>Color: <Text style={styles.moreDetailsText}>Blue</Text></Text>
            <Text style={styles.moreDetails}>Weight: <Text style={styles.moreDetailsText}>2.5 kg</Text></Text>
            <Text style={styles.moreDetails}>Vaccinated: <Text style={styles.moreDetailsText}>Yes</Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    moreDetails: {
        width: '80%',
        maxWidth: 500,
        marginHorizontal: 'auto',
        padding: 10,
        color: '#258325',
    },
    moreDetailsText: {
        color: 'black',
    },
});
export default More_Details;
