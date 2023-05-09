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

const AnimalList = ({onPress, species, refuge, image, name, race}) => {
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
                <Text style={[styles.text, {top:-250}]}>{refuge}</Text>
                <Text style={[styles.text, {fontSize: 30}]}>{name}</Text>
                {/*<Text style={[styles.text, {}]}>{species}</Text>*/}
                <Text style={[styles.text, {}]}>{race}</Text>
            </Pressable>
        </View>
    );
};

let screenHeight = Dimensions.get('window').height;
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        // height: screenHeight/2,
        // bottom: -50,
    },
    image: {
        flex: 1,
        width: screenWidth * 0.4,
        height: screenHeight * 0.1,

        // margin: 30,
        // marginTop: 20,

        borderRadius: 20,
        borderWidth: 5,
        borderColor: 'brown',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        top: -120,
        left: 20,
    }
});

export default AnimalList;
