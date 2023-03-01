
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import Screen1 from './screens/step_1';
import Screen2 from './screens/step_2';
import Screen3 from './screens/step_3';
import EndScreen from './screens/end';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Screen1" component={Screen1} options={{
                    title: 'Cleansing Breath', headerShown: true, headerTitleAlign: 'center',
                }} />
                <Stack.Screen name="Screen2" component={Screen2} options={{
                    title: 'Breath Practice', headerShown: true, headerTitleAlign: 'center',
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
