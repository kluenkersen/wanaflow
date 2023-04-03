import { useEffect, useState, useCallback } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, Platform } from 'react-native';
import { Storage, AsyncStorage } from 'expo-storage';
import { useFocusEffect } from '@react-navigation/native';

import { globalStyles } from '../styles/styles.js';


export default function EndScreen({ navigation, route }) {

    const charge = route.params?.charge ?? 0;


    const technique = ['CleansingBreath', 'BoxBreath']
    const [opacityStatus, setOpacityStatus] = useState(-1);
    const [fileAccess, setFileAccess] = useState(false);
    const [date, setDate] = useState();
    const [breathScreen, setBreathScreen] = useState();

    useEffect(() =>{
        // console.log(route.params)
        saveFile();
    },[])

    async function saveFile() {
        if (Platform.OS !== 'web') {
            try {
                await Storage.setItem({
                    key: "opacityStatus",
                    value: String(route.params.charge)
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

    // useFocusEffect(
    //     useCallback(() => {
    //         // set breath page to use
    //         setBreathScreen(technique[Math.floor(Math.random() * 2)]);
    //         // Your effect function goes here.
    //         if (charge == 0) {
    //             console.log('load');
    //             loadFile();
    //         } else {
    //             console.log('set directly :P');
    //             setOpacityStatus(charge);
    //         }
    //         // Optional clean-up function, if needed.
    //         return () => {
    //             console.log('HomeScreen out of focus');
    //         };
    //     }, [charge])
    // );

    return (
        <View style={globalStyles.container}>
            <View>
                <Text>{route.params.charge}</Text>
            </View>

            <View style={globalStyles.containerTop}>
                <Image style={{ width: 200, height: 200, resizeMode: 'contain', opacity: route.params.charge / 100 }} source={require('./../assets/icon.png')} />
                <Image style={{ width: 200, height: 200, resizeMode: 'contain', position: 'absolute', }} source={require('./../assets/icon_colorless.png')} />
            </View>

            {/* <View style={globalStyles.containerBottom}>
                <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Start', {opacityStatus, breathScreen})}>
                    <Text style={globalStyles.buttonText}>Again</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});