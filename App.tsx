
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import CleansingBreath from './screens/cleansing_breath';
// import BoxBreathing from './screens/box_breathing';
import Screen3 from './screens/step_3';
import EndScreen from './screens/end';
import BoxBreath from './screens/box_breath';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CleansingBreath" component={CleansingBreath} options={{
                    title: 'Cleansing Breath ', headerShown: true, headerTitleAlign: 'center',
                }} />
                <Stack.Screen name="BoxBreath" component={BoxBreath} options={{
                    title: 'Box Breathing', headerShown: true, headerTitleAlign: 'center',
                }}/>
                <Stack.Screen name="Screen3" component={Screen3} options={{
                    title: 'Practice Forward', headerShown: true, headerTitleAlign: 'center',
                }}/>
                <Stack.Screen name="End" component={EndScreen} options={{
                    title: 'End', headerShown: true, headerTitleAlign: 'center',
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
