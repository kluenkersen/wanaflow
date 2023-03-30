import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, Animated, Platform } from 'react-native';
import { Storage } from 'expo-storage';

import { globalStyles } from '../styles/styles';
import quotes from '../assets/steps/01-cleansing.json';

export default function CleansingBreath({ navigation, route }) {

    const opacityStatus = route.params.opacityStatus;

    const scaleValue1 = useRef(new Animated.Value(0.3)).current;
    const scaleValue2 = useRef(new Animated.Value(1)).current;
    const scaleValue3 = useRef(new Animated.Value(0.3)).current;
    const scaleValue4 = useRef(new Animated.Value(1)).current;
    const scaleValue5 = useRef(new Animated.Value(0.3)).current;
    const scaleValue6 = useRef(new Animated.Value(1)).current;

    const images = [
        require("../assets/breath/nose_in.jpeg"),
        require("../assets/breath/mouth_out.jpeg"),
    ];

    const [quote, setQuote] = useState('');
    const [countBreath, setCountBreath] = useState(0);
    const [statusIndex, setstatusIndex] = useState(0);
    const [showQuote, setShowQuote] = useState(false);

    function flow() {
        // calculate charge
        let charge = Math.floor(Math.random() * (100 - 70 + 1) + 70);
        charge = opacityStatus + charge;
        if (charge > 100) {
            charge = 100;
        }
        // save it to file
        saveFile(charge);
        // switch screen
        navigation.navigate('Home', { charge })
    }

    async function saveFile(charge) {
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
                        setstatusIndex(4);
                        Animated.timing(scaleValue5, {
                            toValue: 1,
                            duration: 3000,
                            useNativeDriver: true,
                        }).start(() => {
                            setstatusIndex(5);
                            Animated.timing(scaleValue6, {
                                toValue: 0.3,
                                duration: 3000,
                                useNativeDriver: true,
                            }).start(() => {
                                setShowQuote(true);
                            });
                        });
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
                                {statusIndex === 0 || statusIndex === 2 || statusIndex === 4 ? "Breath in" : "Breath out"}
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
                                {statusIndex === 2 && (
                                    <View>
                                        <Animated.Image source={images[0]}
                                            style={[styles.image, { transform: [{ scale: scaleValue3 }] }]} />
                                        {/* <Text></Text> */}
                                    </View>
                                )}
                                {statusIndex === 3 && (
                                    <View>
                                        <Animated.Image source={images[1]}
                                            style={[styles.image, { transform: [{ scale: scaleValue4 }] }]} />
                                        {/* <Text></Text> */}
                                    </View>
                                )}
                                {statusIndex === 4 && (
                                    <View>
                                        <Animated.Image source={images[0]}
                                            style={[styles.image, { transform: [{ scale: scaleValue5 }] }]} />
                                        {/* <Text></Text> */}
                                    </View>
                                )}
                                {statusIndex === 5 && (
                                    <View>
                                        <Animated.Image source={images[1]}
                                            style={[styles.image, { transform: [{ scale: scaleValue6 }] }]} />
                                        {/* <Text></Text> */}
                                    </View>
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
                    <TouchableOpacity style={globalStyles.button} onPress={(flow)}>
                        <Text style={globalStyles.buttonText}>Flow</Text>
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