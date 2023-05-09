import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const More_Details = () => {
    return (
        <View style={styles.container}>
            <View style={styles.moreDetails}>
                <Text style={styles.moreDetailsTitle}>More details</Text>
                <Text style={styles.moreDetailsTxt}>Color: <Text style={styles.moreDetailsTextClassic}>Brown</Text></Text>
                <Text style={styles.moreDetailsTxt}>Weight: <Text style={styles.moreDetailsTextClassic}>2.5 kg</Text></Text>
                <Text style={styles.moreDetailsTxt}>Vaccinated: <Text style={styles.moreDetailsTextClassic}>Yes</Text></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        top: -30,
    },
    moreDetails: {
        display: 'flex',
        width: '80%',
    },
    moreDetailsTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#447234',
    },
    moreDetailsTxt: {
        padding: 10,
        fontWeight: 'bold',
        color: '#447234',
    },
    moreDetailsTextClassic: {
        color: 'black',
        fontWeight: 'normal',
    },
});
export default More_Details;
