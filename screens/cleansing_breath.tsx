import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, Animated, Platform } from 'react-native';
import { Storage } from 'expo-storage';

import { useFocusEffect, useIsFocused } from '@react-navigation/native';

import { globalStyles } from '../styles/styles';
import quotes from '../assets/steps/01-cleansing.json';

export default function CleansingBreath({ navigation, route }) {

    let scaleValue1 = useRef(new Animated.Value(0.3)).current;
    let scaleValue2 = useRef(new Animated.Value(0.9)).current;
    const isFocused = useIsFocused();
    const isFocusedRef = useRef(isFocused);

    // Update the isFocusedRef whenever isFocused changes
    useEffect(() => {
        isFocusedRef.current = isFocused;
    }, [isFocused]);


    const images = [
        require("../assets/breath/nose_in.jpeg"),
        require("../assets/breath/mouth_out.jpeg"),
    ];

    const [statusIndex, setstatusIndex] = useState(0);
    const [maxLoop, setMaxLoop] = useState(5);

    function goAgain() {
        if (!isFocusedRef.current) {
            return;
        } else {
            setstatusIndex(0);
            const looped = (route.params.looped + 1)
            scaleValue1.setValue(0.3);
            scaleValue2.setValue(0.9);
            navigation.navigate("CleansingBreath", { looped })
        }
    }

    useFocusEffect(
        useCallback(() => {
            Animated.timing(scaleValue1, {
                toValue: 0.9,
                duration: 3000,
                useNativeDriver: true,
            }).start(() => {
                setstatusIndex(1);
                Animated.timing(scaleValue2, {
                    toValue: 0.3,
                    duration: 3000,
                    useNativeDriver: true,
                }).start(() => {
                    if (route.params.looped != maxLoop) {
                        goAgain();
                    } else {
                        route.params.looped = 1;
                        setstatusIndex(0);
                        scaleValue1.setValue(0.3);
                        scaleValue2.setValue(0.9);
                        navigation.navigate('End');
                    }
                });
            });
        }, [route.params.looped, isFocused])
    );

    return (

        <View style={styles.container}>
            <View style={globalStyles.containerTop}>
                <Text>{route.params.looped}/{maxLoop}</Text>
            </View>
            <View style={globalStyles.containerMiddle}>
                <View style={globalStyles.imageContainer}>
                    {statusIndex === 0 && (
                        <View>
                            <Text style={globalStyles.text}>Breathe in</Text>
                            <View style={globalStyles.imageWrapper}>
                                <Animated.Image source={images[0]} style={[globalStyles.image, { transform: [{ scale: scaleValue1 }] }]} />
                            </View>
                        </View>
                    )}
                    {statusIndex === 1 && (
                        <View>
                            <Text style={globalStyles.text}>Breathe out</Text>
                            <View style={globalStyles.imageWrapper}>
                                <Animated.Image source={images[1]} style={[globalStyles.image, { transform: [{ scale: scaleValue2 }] }]} />
                            </View>
                        </View>
                    )}
                </View>
            </View>
            <View style={globalStyles.containerBottom}>
                {statusIndex === 0 && (
                    <Text style={globalStyles.description}>Breathe deeply in through your nose.</Text>
                )}
                {statusIndex === 1 && (
                    <Text style={globalStyles.description}>Exhale through your mouth.</Text>
                )}
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
