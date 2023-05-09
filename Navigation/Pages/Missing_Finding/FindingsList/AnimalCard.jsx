import React, {useEffect, useRef, useState} from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    Pressable,
    Dimensions,
    Animated,
    Alert, Modal, StatusBar
} from "react-native";

const AnimalCard = ({onPress, refuge, image, name, race}) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    onPress();
                }}
            >
                <Image
                    style={styles.image}
                    source={{uri: image}}
                    resizeMode={"cover"}
                />
                {/*<View style={styles.description}>*/}
                    <Text style={[styles.text, {top: -215}]}>{refuge}</Text>
                    <Text style={[styles.text, {fontSize: 25}]}>{name}</Text>
                    <Text style={[styles.text, {bottom: -10}]}>{race}</Text>
                {/*</View>*/}
            </Pressable>
        </View>
    );
};

let screenHeight = Dimensions.get('window').height;
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        // flex: 2,
        // alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 0,
    },
    image: {
        // flex: 1,
        width: screenWidth * 0.45,
        height: screenHeight * 0.3,
        // margin: 0,
        // marginTop: 20,

        borderRadius: 20,
        borderWidth: 3.5,
        borderColor: 'orange',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        top: -90,
        left: 15,
    },
    // description: {
    //     position: 'relative',
    //     backgroundColor: 'white',
    //     height: 20,
    //     width: screenWidth * 0.40,
    //     // bottom: 0,
    // }
});

export default AnimalCard;
