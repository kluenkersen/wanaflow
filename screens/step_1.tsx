import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, Animated } from 'react-native';

import { globalStyles } from '../styles/styles';
import quotes from './../assets/steps/01-cleansing.json';

export default function Screen1({ navigation }) {

    const scaleValue1 = useRef(new Animated.Value(0.3)).current;
    const scaleValue2 = useRef(new Animated.Value(1)).current;
    const scaleValue3 = useRef(new Animated.Value(0.3)).current;
    const scaleValue4 = useRef(new Animated.Value(1)).current;

    const images = [
        require("../assets/breath/nose_in.jpeg"),
        require("../assets/breath/mouth_out.jpeg"),
    ];

    const [quote, setQuote] = useState('');
    const [countBreath, setCountBreath] = useState(0);
    const [statusIndex, setstatusIndex] = useState(0);
    const [showQuote, setShowQuote] = useState(false);

    useEffect(() => {
        Animated.timing(scaleValue1, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start(() => {
            setstatusIndex(1);
            Animated.timing(scaleValue2, {
                toValue: 0.3,
                duration: 3000,
                useNativeDriver: true,
            }).start(() => {
                setstatusIndex(2);
                Animated.timing(scaleValue3, {
                    toValue: 1,
                    duration: 3000,
                    useNativeDriver: true,
                }).start(() => {
                    setstatusIndex(3);
                    Animated.timing(scaleValue4, {
                        toValue: 0.3,
                        duration: 3000,
                        useNativeDriver: true,
                    }).start(() => {
                        setShowQuote(true);
                    });
                });
            });
        });
    }, []);

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.containerTop}>

                <View style={styles.container}>
                    {!showQuote && (
                        <View style={styles.imageContainer}>
                            <Text style={styles.text}>
                                {statusIndex === 0 || statusIndex === 2 ? "Breath in" : "Breath out"}
                            </Text>
                            <View style={styles.imageWrapper}>
                                {statusIndex === 0 && (
                                    <Animated.Image source={images[0]}
                                        style={[styles.image, { transform: [{ scale: scaleValue1 }] }]} />
                                )}
                                {statusIndex === 1 && (
                                    <Animated.Image source={images[1]}
                                        style={[styles.image, { transform: [{ scale: scaleValue2 }] }]} />
                                )}
                                {statusIndex === 2 && (
                                    <Animated.Image source={images[0]}
                                        style={[styles.image, { transform: [{ scale: scaleValue3 }] }]} />
                                )}
                                {statusIndex === 3 && (
                                    <Animated.Image source={images[1]}
                                        style={[styles.image, { transform: [{ scale: scaleValue4 }] }]} />
                                )}
                            </View>
                        </View>
                    )}
                    {showQuote === true && (
                        <Text style={styles.quote}>
                            {quotes[Math.floor(Math.random() * 78)]}
                        </Text>
                    )}
                </View>
            </View>
            <View style={globalStyles.containerBottom}>
                {showQuote === true && (
                    <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Screen2')}>
                        <Text style={globalStyles.buttonText}>Next</Text>
                    </TouchableOpacity>
                )}
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