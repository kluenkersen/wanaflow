import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, Animated, Platform } from 'react-native';
import { Storage } from 'expo-storage';

import { globalStyles } from '../styles/styles';
import quotes from '../assets/steps/01-cleansing.json';

import { useKeepAwake } from 'expo-keep-awake';

export default function StartScreen({ navigation }) {
    useKeepAwake();

    const technique = ['CleansingBreath', 'BoxBreath'];
    const [opacityStatus, setOpacityStatus] = useState(-1);
    const [date, setDate] = useState();

    function navigate() {
        let looped = 1;
        navigation.navigate(technique[Math.floor(Math.random() * 2)], { looped });
        // navigation.navigate("BoxBreath", { looped });
    }

    async function loadFile() {
        if (Platform.OS !== 'web') {
            try {
                let status = await Storage.getItem({ key: "opacityStatus" });
                let date = await Storage.getItem({ key: "date" });
                if (status != null) {
                    const timeDiffHours = Math.round((Date.now() - date) / (1000 * 60 * 60));
                    const timePct = Math.min(timeDiffHours / 24 * 100, 100);
                    setOpacityStatus(timePct);
                    if ((status - timePct) < 0) {
                        status = 0;
                    } else {
                        status = status - timePct;
                    }
                    setOpacityStatus(Math.round(status));
                    setDate(date);
                }
            }
            catch (e) {
                console.log(e);
            }
        }
    }

    useEffect(() => {
        loadFile();
    }, [])

    return (

        <View style={styles.container}>
            <View style={globalStyles.containerTop}>
            </View>
            <View style={globalStyles.containerMiddle}>
                <Text style={styles.quote}>
                    {quotes[Math.floor(Math.random() * 78)]}
                </Text>
            </View>
            <View style={globalStyles.containerBottom}>
                <TouchableOpacity style={globalStyles.button} onPress={navigate}>
                    <Text style={globalStyles.buttonText}>Flow</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        alignContent: 'center',
        marginRight: 15,
        marginLeft: 15,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        marginBottom: 15,
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: 'rgba(169,175,248,1)',
    },
    quote: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: 'rgba(169,175,248,1)',
    }
})