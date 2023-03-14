import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Missing_Finding from "./Missing_Finding/Missing_Finding";

export default function App() {
    return (
        <NavigationContainer>{
            <Missing_Finding/>
        }</NavigationContainer>
    );
}