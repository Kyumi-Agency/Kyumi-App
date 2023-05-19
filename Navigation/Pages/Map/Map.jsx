import React, {useState} from 'react';
// import {Text, View} from "react-native";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Pressable,
    Image,
    Modal,
    Dimensions,
    Alert, Switch
} from 'react-native';

const Map = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRefuge, setIsRefuge] = useState(false);
    const [registerButton, setRegisterButton] = useState(false);

    const handleLogin = async () => {
        // Gérer la connexion de l'utilisateur ici
        try {
            const response = await fetch('https://kyumibdd.osc-fr1.scalingo.io/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });

            const data = await response.json();

            if (data.token) {
                // Sauvegarder le token dans le stockage local et naviguer vers l'écran d'accueil
                // await AsyncStorage.setItem('token', data.token);
                // navigation.navigate('Home');
                console.log(data.token);
                Alert.alert('Token Received', data.token);
            } else {
                // Afficher une erreur
                Alert.alert('Erreur', data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegister = async () => {
        try {
            const userData = {
                name: name,
                email: email.toLowerCase(),
                password: password,
                type: {
                    refuge: isRefuge,
                    verified: false
                }
            };

            const response = await fetch('https://kyumibdd.osc-fr1.scalingo.io/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if (data.message === 'User created successfully') {
                Alert.alert("Bravo !",'Vous venez de créer votre compte avec succès', data.status);
            } else {
                // if(data.message === 'An account with this email already exists'){
                    Alert.alert('Erreur', data.message);
                // }
            }
        } catch (error) {
            console.error(error);
            console.error("Erreur lors de l'inscription");
            Alert.alert('Erreur', "Erreur lors de l'inscription. Veuillez contacter l'administrateur");
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/login.png')} style={styles.logoTop}/>
            <Image source={require('../../../assets/kyumi.png')} style={styles.logoBottom}/>
            {/*<View style={{height: screenHeight/2, width: screenWidth, backgroundColor: 'orange', position: 'absolute', top: 0}}></View>*/}
            {/*<Text style={styles.logoFont}>KYUMI</Text>*/}
            <Text style={styles.logoFont}>Login</Text>
            <View style={styles.inputView}>
                <TextInput
                    id={"email"}
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    id={"password"}
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

            <Text style={styles.inscriptionText}>Vous êtes nouveau ?</Text>
                <Pressable style={styles.inscriptionText} onPress={() => setRegisterButton(!registerButton)}>
                    <Text>S'inscrire</Text>
                </Pressable>

            <Modal
                animationType="slide"
                transparent={false}
                visible={registerButton}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image source={require('../../../assets/login.png')} style={styles.logoTop}/>
                            {/*<View style={{height: screenHeight/2, width: screenWidth, backgroundColor: 'orange', position: 'absolute', top: 0}}></View>*/}
                            <Text style={styles.logoFont}>Register</Text>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Nom d'utilisateur"
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
                            <View style={styles.switch}>
                                <Text style={styles.inscriptionText}>Je suis un refuge : </Text>
                                <Switch
                                    trackColor={{false: '#767577', true: '#f5ba5a'}}
                                    thumbColor={'#fff'}
                                    // ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => setIsRefuge(!isRefuge)}
                                    value={isRefuge}
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
    logoTop: {
        position: 'absolute',
        height: "90%",
        width: "100%",
        top: -10,
        zIndex: 1,
    },
    logoBottom: {
        position: 'absolute',
        height: 100,
        width: 100,
        bottom: 0,
        zIndex: 2,
    },
    logoFont: {
        fontWeight: 'bold',
        fontSize: 70,
        color: 'white',
        marginBottom: 100,
        top: -90,
        zIndex: 2,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#fff',
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
        zIndex: 2,
        // borderRadius: 25,
        borderBottomWidth: 5,
        borderWidth: 1,
        borderColor: 'orange',
    },
    inputText: {
        height: 50,
        color: '#003f5c',
    },
    inscriptionText: {
        fontWeight: 'bold',
        color: 'black',
        zIndex: 2,
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#f5ba5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
        zIndex: 2,
    },
    loginText: {
        color: 'white',
    },
    switch: {
        zIndex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#fff',
        // borderRadius: 25,
        // height: 50,
        // marginBottom: 20,
        // justifyContent: 'center',
        // padding: 20,
        // borderWidth: 5,
        // borderColor: 'orange',
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
        zIndex: 2,
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
