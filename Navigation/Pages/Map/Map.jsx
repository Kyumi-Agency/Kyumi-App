import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import * as Notifications from "expo-notifications";
import externalStyle from "../../../style/externalStyle";
const Map = () => {
    const triggerNotificationHandler = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "Notification de test",
                body: "Une notif oh oui !",
                data: { mySpecialData: 'Some text' },
            },
            trigger: null,
        });
    };

    return (
        <View style={[externalStyle.bg]}>
            <Text>Map</Text>
            <TouchableOpacity title="Send Notification" onPress={triggerNotificationHandler} style={styles.button}>
                <Text>Send Notification</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    //style for TouchableOpacity
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginTop: '50%',
    }
});
export default Map;
