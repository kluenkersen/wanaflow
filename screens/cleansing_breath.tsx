import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, Animated, Platform } from 'react-native';
import { Storage } from 'expo-storage';

import { useFocusEffect } from '@react-navigation/native';

import { globalStyles } from '../styles/styles';
import quotes from '../assets/steps/01-cleansing.json';

export default function CleansingBreath({ navigation, route }) {

    let scaleValue1 = useRef(new Animated.Value(0.3)).current;
    let scaleValue2 = useRef(new Animated.Value(0.9)).current;

    const images = [
        require("../assets/breath/nose_in.jpeg"),
        require("../assets/breath/mouth_out.jpeg"),
    ];

    const [statusIndex, setstatusIndex] = useState(0);
    const [maxLoop, setMaxLoop] = useState(5);

    function goAgain() {
        setstatusIndex(0);
        const looped = (route.params.looped + 1)
        scaleValue1.setValue(0.3);
        scaleValue2.setValue(0.9);
        navigation.navigate("CleansingBreath", { looped })
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
        }, [route.params.looped])
    );

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.containerTop}>
                <Text>{route.params.looped}/{maxLoop}</Text>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Text style={styles.text}>
                            {statusIndex === 0 || statusIndex === 2 || statusIndex === 4 ? "Breathe in" : "Breathe out"}
                        </Text>
                        <View style={styles.imageWrapper}>
                            {statusIndex === 0 && (
                                <View>
                                    <Animated.Image source={images[0]}
                                        style={[styles.image, { transform: [{ scale: scaleValue1 }] }]} />
                                    {/* <Text></Text> */}
                                </View>
                            )}
                            {statusIndex === 1 && (
                                <View>
                                    <Animated.Image source={images[1]}
                                        style={[styles.image, { transform: [{ scale: scaleValue2 }] }]} />
                                    {/* <Text></Text> */}
                                </View>
                            )}
                        </View>
                    </View>

                </View>
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
    imageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageWrapper: {
        borderRadius: 400 / 2,
        borderColor: "#c2c0c4",
        backgroundColor: 'rgba(169,175,248,0.1)',
        overflow: "hidden",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 400 / 2,
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