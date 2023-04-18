import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Description_Details = () => {
    return (
        <View>
            <View style={styles.profile}>
                <View style={styles.info}>
                    <View style={styles.name}>
                        <Text>Jean</Text>
                        <Image source={{uri: 'https://static.thenounproject.com/png/3682928-200.png'}} style={styles.profileImg} />
                    </View>
                    <Text style={styles.age}>Age : 25 ans</Text>
                    <Text style={styles.race}>Race : </Text>
                </View>
                <View style={styles.like}>
                    <Image source={{uri: 'https://static.vecteezy.com/system/resources/previews/001/188/163/original/heart-png.png'}} style={styles.likeImg} />
                </View>
            </View>
            <View style={styles.description}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam auctor, nisl eget ultricies tincidunt, nunc nisl
                    lacinia nisl, nec ultricies nunc nisl vel mauris. Sed
                    tincidunt, nisl eget ultricies tincidunt, nunc nisl lacinia
                    nisl, nec ultricies nunc nisl vel mauris. Sed tincidunt,
                    nisl eget ultricies tincidunt, nunc nisl lacinia nisl, nec
                    ultricies nunc nisl vel mauris. Sed tincidunt, nisl eget
                </Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    profile: {
        width: '80%',
        maxWidth: 500,
        margin: 'auto',
        borderRadius: 20,
        backgroundColor: '#c18f6a',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        color: 'white',
    },
    like: {
        width: 30,
        height: 30,
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
    },
    name: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 20,
    },
    nameImg: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    nameSpan: {
        marginLeft: 10,
    },
    age: {
        fontSize: 16,
    },
    race: {
        fontSize: 16,
    },
    description: {
        width: '80%',
        maxWidth: 500,
        margin: 'auto',
        padding: 10,
    },
});

export default Description_Details;
