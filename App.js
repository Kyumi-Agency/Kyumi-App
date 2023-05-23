import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from "./Navigation/TabNavigator";
import * as Notifications from 'expo-notifications';
import * as Permissions from "expo-permissions";
import {useEffect} from "react";

// async function registerForPushNotificationsAsync() {
//     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//     if (status !== 'granted') {
//         alert('No notification permissions!');
//         return;
//     }
//     let token = await Notifications.getExpoPushTokenAsync();
//     console.log(token);
// }

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

function App() {
  return (
      // useEffect(() => {
      //       registerForPushNotificationsAsync().then(token => console.log(token)).catch(err => console.log(err));
      //   }, []),

      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
  );
}

export default App;
