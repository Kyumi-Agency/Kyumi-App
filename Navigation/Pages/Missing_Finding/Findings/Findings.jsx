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

const Findings = ({onPress, type}) => {
    const [tapCount, setTapCount] = useState(false);
    const animatedValue = useRef(new Animated.Value(0)).current;
    // const lastTap = useRef(0);
    const size = type === "missing" ? 30 : -30;
    const imageType = type === "missing" ? require("D:/Desktop/YNOV2/Kyumi-App/assets/Missing2.jpg") : require("D:/Desktop/YNOV2/Kyumi-App/assets/Finding2.jpg");
    const imageModal = type === "missing" ? "https://www.dogstrust.org.uk/images/800x600/assets/2023-04/FosteringHeader.jpg" : "https://cdn.shopify.com/s/files/1/1841/6603/products/Sans_titre_29_600x.jpg?v=1625621607";
    const textModal = type === "missing" ? "Help to find lost pets" : "Find a pet to adopt";

    useEffect(() => {
        if (tapCount) {
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [tapCount]);

    const tap = () => {
        // const now = Date.now();
        // const DELAY = 500;
        // if (lastTap.current && now - lastTap.current < DELAY) {
        //     onPress();
        // } else {
        //     lastTap.current = now;
        // }
        setTapCount(!tapCount);
        onPress();
    };

    const imageScale = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.1],
    });

    const imageTranslate = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, size],
    });

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={'dark-content'}
                showHideTransition={'fade'}
                translucent={true}
                hidden={true}
            />
            <Pressable
                onPress={() => {
                    setTapCount(!tapCount);
                }}
            >
                <Animated.Image
                    style={[styles.image, { transform: [{ scale: imageScale }, {translateY: imageTranslate}] }]}
                    source={imageType}
                    resizeMode={"cover"}
                />
            </Pressable>

            <Modal
                animationType="fade"
                transparent={false}
                // coverScreen={false}
                visible={tapCount}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    tap();
                }}>
                <Pressable
                    style={styles.test}
                    onPress={() => {setTapCount(!tapCount)}}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Pressable
                                onPress={() => {tap()}}
                            >
                                <Image
                                    style={styles.modalImage}
                                    source={{uri: imageModal}}
                                />
                                <Text style={styles.modalText}>{textModal}</Text>
                                <Text style={styles.clickme}>Click me</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => {setTapCount(!tapCount)}}
                                style={styles.modalButton}
                            >
                                <Text style={styles.buttonText}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Pressable>
            </Modal>
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
    },
    image: {
        flex: 1,
        width: screenWidth * 0.9,
        height: screenHeight * 0.35,

        margin: 30,

        borderRadius: 20,
        borderWidth: 8,
        borderColor: 'brown',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
    },
    // modalView: {
    //     // margin: 20,
    //     height: screenHeight,
    //     width: screenWidth,
    //     // backgroundColor: 'white',
    //     alignItems: 'center',
    //     shadowColor: '#000',
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 4,
    //     elevation: 5,
    //
    //     // borderRadius: 20,
    //     // padding: 35,
    //     // marginBottom: 100,
    // },
    test: {
        flex: 1,
        position: 'absolute',
        height: screenHeight,
        width: screenWidth,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

    modalImage: {
        height: screenHeight * 0.9,
        width: screenWidth,
        // borderRadius: 20,
        opacity: 0.5,
        backgroundColor: 'black',
    },
    modalButton: {
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 12,
        // paddingHorizontal: 32,
        // borderRadius: 4,
        // elevation: 3,
        backgroundColor: 'black',
        width: screenWidth,
        height: screenHeight * 0.1,
        color: 'black',
    },
    buttonText: {
        color: 'white',
        zIndex: 1,
        position: 'absolute',
        textAlign: 'center',
        fontSize: 20,
    },
    modalText: {
        color: 'white',
        zIndex: 1,
        position: 'absolute',
        top: '70%',
        left: '25%',
        marginTop: -10,
        marginLeft: -50,
        textAlign: 'center',
        fontSize: 30,
    },
    clickme: {
        color: 'white',
        zIndex: 1,
        position: 'absolute',
        top: '80%',
        left: '45%',
        marginTop: -10,
        marginLeft: -50,
        textAlign: 'center',
        fontSize: 30,
        opacity: 0.4,
    },
});

export default Findings;
