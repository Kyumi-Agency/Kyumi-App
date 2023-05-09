import React, {useState} from 'react';
// import {Text, View} from "react-native";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, Image, Modal, Dimensions} from 'react-native';

const Map = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [registerButton, setRegisterButton] = useState(false);

    const handleLogin = () => {
        // Gérer la connexion de l'utilisateur ici
    };

    const handleRegister = () => {
        // Gérer l'inscription de l'utilisateur ici
    };


    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/kyumi.png')} style={styles.logo}/>
            <View style={{height: screenHeight/2, width: screenWidth, backgroundColor: 'orange', position: 'absolute', top: 0}}></View>
            <Text style={styles.logoFont}>KYUMI</Text>
            <Text style={styles.logoFont}>Login</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Mot de passe"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>Se connecter</Text>
            </TouchableOpacity>

            <Text>Vous êtes nouveau ?
            </Text>
                <Pressable onPress={() => setRegisterButton(!registerButton)}>
                    <Text style={{fontWeight: 'bold'}}>S'inscrire</Text>
                </Pressable>

            <Modal
                animationType="slide"
                transparent={false}
                visible={registerButton}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{height: screenHeight/2, width: screenWidth, backgroundColor: 'orange', position: 'absolute', top: 0}}></View>
                            <Text style={styles.logoFont}>Register</Text>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Nom"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={setName}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Email"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={setEmail}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Mot de passe"
                                    placeholderTextColor="#003f5c"
                                    secureTextEntry={true}
                                    onChangeText={setPassword}
                                />
                            </View>
                            <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
                                <Text style={styles.registerText}>S'inscrire</Text>
                            </TouchableOpacity>
                            <Pressable
                                onPress={() => {setRegisterButton(!registerButton)}}
                                style={styles.modalButton}
                            >
                                <Text style={styles.buttonText}>Return to login</Text>
                            </Pressable>
                        </View>
                    </View>
            </Modal>
        </View>
    );
};

let screenHeight = Dimensions.get('window').height;
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        height: 100,
        width: 100,
        bottom: 0,
        zIndex: 0,
    },
    logoFont: {
        fontWeight: 'bold',
        fontSize: 50,
        color: 'white',
        marginBottom: 30,
        zIndex: 2,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
        zIndex: 2,
        borderWidth: 5,
        borderColor: 'orange',
    },
    inputText: {
        height: 50,
        color: '#003f5c',
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#f5ba5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    loginText: {
        color: 'white',
    },
    registerBtn: {
        width: '80%',
        backgroundColor: '#f5ba5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    registerText: {
        color: '#003f5c',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 200,
    },
    modalView: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth,
    },
    modalButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: screenWidth,
        height: screenHeight * 0.1,
        color: 'black',
        bottom: 0,
        position: 'absolute',
    },
    buttonText: {
        color: 'white',
        zIndex: 1,
        position: 'absolute',
        textAlign: 'center',
        fontSize: 20,
    }
});
export default Map;
