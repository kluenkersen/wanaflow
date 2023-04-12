import { useEffect, useState, useCallback } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, Platform } from 'react-native';
import { Storage, AsyncStorage } from 'expo-storage';
import { useFocusEffect } from '@react-navigation/native';

import { globalStyles } from '../styles/styles.js';
import quotes from '../assets/steps/04-endquotes.json';

export default function EndScreen({ navigation, route }) {

    const charge = 0;

    const technique = ['CleansingBreath', 'BoxBreath']
    const [opacityStatus, setOpacityStatus] = useState(-1);
    const [fileAccess, setFileAccess] = useState(false);
    const [date, setDate] = useState();
    const [breathScreen, setBreathScreen] = useState();

    useEffect(() => {
        // console.log(route.params)
        saveFile();
    }, [])

    async function saveFile() {
        if (Platform.OS !== 'web') {
            try {
                await Storage.setItem({
                    key: "opacityStatus",
                    value: String(charge)
                });
                await Storage.setItem({
                    key: "date",
                    value: String(Date.now())
                });
            }
            catch (e) {
                console.log(e);
            }
        }
    }

    return (

        <View style={styles.container}>
            <View style={globalStyles.containerTop}>
            <Text style={globalStyles.description}>{charge}% charged, 2/3  left</Text>
            </View>
            <View style={globalStyles.containerMiddle}>
                <Image style={{ width: 200, height: 200, resizeMode: 'contain', opacity: charge / 100 }} source={require('./../assets/icon.png')} />
                <Image style={{ width: 200, height: 200, resizeMode: 'contain', position: 'absolute', }} source={require('./../assets/icon_colorless.png')} />
            </View>
            <View style={globalStyles.containerBottom}>
            <Text style={globalStyles.description}>{quotes[Math.floor(Math.random() * 59)]}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});