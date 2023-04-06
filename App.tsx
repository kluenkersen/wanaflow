
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EndScreen from './screens/end';
import CleansingBreath from './screens/cleansing_breath';
import BoxBreath from './screens/box_breath';
import StartScreen from './screens/start';

const Stack = createStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Start'>
                <Stack.Screen name="Start" component={StartScreen} options={{
                    title: 'Cleansing Thought', headerShown: true, headerTitleAlign: 'center',
                }} />
                <Stack.Screen name="End" component={EndScreen} />
                <Stack.Screen name="CleansingBreath" component={CleansingBreath} options={{
                    title: 'Cleansing Breath ', headerShown: true, headerTitleAlign: 'center',
                }} />
                <Stack.Screen name="BoxBreath" component={BoxBreath} options={{
                    title: 'Box Breathing', headerShown: true, headerTitleAlign: 'center',
                }} />
               
            </Stack.Navigator>
        </NavigationContainer>
    );
}
