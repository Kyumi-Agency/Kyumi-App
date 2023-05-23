import React from "react";
import {Text, View, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import externalStyle from "../../../style/externalStyle";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

const Profile = () => {
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
            <Text>Profile</Text>
            <TouchableOpacity title="Send Notification" onPress={triggerNotificationHandler}>
                <Text>Send Notification</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;
