import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, Animated, Platform } from 'react-native';
import { Storage } from 'expo-storage';

import { globalStyles } from '../styles/styles';
import quotes from '../assets/steps/01-cleansing.json';

export default function BoxBreath({ navigation, route }) {

    const opacityStatus = route.params.opacityStatus;

    const scaleValue1 = useRef(new Animated.Value(0.3)).current;
    const scaleValue2 = useRef(new Animated.Value(1)).current;
    const scaleValue3 = useRef(new Animated.Value(0.3)).current;
    const scaleValue4 = useRef(new Animated.Value(1)).current;
    const scaleValue5 = useRef(new Animated.Value(0.3)).current;
    const scaleValue6 = useRef(new Animated.Value(1)).current;
    const scaleValueHold = useRef(new Animated.Value(1)).current;

    const images = [
        require("../assets/breath/nose_in.jpeg"),
        require("../assets/breath/mouth_out.jpeg"),
        require("../assets/breath/hold.jpeg"),
    ];

    const [onHold, setOnHold] = useState(false);
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
            duration: 4000,
            useNativeDriver: true,
        }).start(() => {
            setstatusIndex(1);
            Animated.timing(scaleValueHold, {
                toValue: 1,
                duration: 4000,
                useNativeDriver: true,
            }
            ).start(() => {
                setstatusIndex(2);
                Animated.timing(scaleValue2, {
                    toValue: 0.3,
                    duration: 4000,
                    useNativeDriver: true,
                }).start(() => {
                    setstatusIndex(3);
                    Animated.timing(scaleValueHold, {
                        toValue: 1,
                        duration: 4000,
                        useNativeDriver: true,
                    }).start(() => {
                        setstatusIndex(4);
                        Animated.timing(scaleValue3, {
                            toValue: 1,
                            duration: 4000,
                            useNativeDriver: true,
                        }).start(() => {
                            setstatusIndex(5);
                            Animated.timing(scaleValueHold, {
                                toValue: 1,
                                duration: 4000,
                                useNativeDriver: true,
                            }
                            ).start(() => {
                                setstatusIndex(6);
                                Animated.timing(scaleValue4, {
                                    toValue: 0.3,
                                    duration: 4000,
                                    useNativeDriver: true,
                                }).start(() => {
                                    setstatusIndex(7);
                                    Animated.timing(scaleValueHold, {
                                        toValue: 1,
                                        duration: 4000,
                                        useNativeDriver: true,
                                    }).start(() => {
                                        setstatusIndex(8);
                                        Animated.timing(scaleValue5, {
                                            toValue: 1,
                                            duration: 4000,
                                            useNativeDriver: true,
                                        }).start(() => {
                                            setstatusIndex(9);
                                            Animated.timing(scaleValueHold, {
                                                toValue: 1,
                                                duration: 4000,
                                                useNativeDriver: true,
                                            }
                                            ).start(() => {
                                                setstatusIndex(10);
                                                Animated.timing(scaleValue6, {
                                                    toValue: 0.3,
                                                    duration: 4000,
                                                    useNativeDriver: true,
                                                }).start(() => {
                                                    setstatusIndex(11);
                                                    Animated.timing(scaleValueHold, {
                                                        toValue: 1,
                                                        duration: 4000,
                                                        useNativeDriver: true,
                                                    }).start(() => {
                                                        setShowQuote(true);
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
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
                        <View>
                            {statusIndex === 0 && (
                                <View style={styles.imageContainer}>
                                    <Text style={styles.text}>Breath in</Text>
                                    <View style={styles.imageWrapper}>
                                        <Animated.Image source={images[0]}
                                            style={[styles.image, { transform: [{ scale: scaleValue1 }] }]} />
                                    </View>
                                    <Text style={globalStyles.description}>Breathe deeply in through your nose, counting to four as you inhale.</Text>
                                </View>
                            )}
                            {statusIndex === 1 && (
                                <View style={styles.imageContainer}>
                                    <Text style={styles.text}>Hold</Text>
                                    <View style={styles.imageWrapper}>
                                        <Animated.Image source={images[2]}
                                            style={styles.image_hold} />
                                    </View>
                                    <Text style={globalStyles.description}>Hold your breath for a count of four.</Text>
                                </View>
                            )}
                            {statusIndex === 2 && (
                                <View style={styles.imageContainer}>
                                    <Text style={styles.text}>Breath out</Text>
                                    <View style={styles.imageWrapper}>
                                        <Animated.Image source={images[1]}
                                            style={[styles.image, { transform: [{ scale: scaleValue2 }] }]} />
                                    </View>
                                    <Text style={globalStyles.description}>Exhale for a count of four through your mouth, pursing your lips slightly as you release the breath.</Text>
                                </View>
                            )}
                            {statusIndex === 3 && (
                                <View style={styles.imageContainer}>
                                    <Text style={styles.text}>Hold</Text>
                                    <View style={styles.imageWrapper}>
                                        <Animated.Image source={images[2]}
                                            style={styles.image_hold} />
                                    </View>
                                    <Text style={globalStyles.description}>Hold your breath for a count of four.</Text>
                                </View>
                            )}{statusIndex === 4 && (
                                <View style={styles.imageContainer}>
                                    <Text style={styles.text}>Breath in</Text>
                                    <View style={styles.imageWrapper}>
                                        <Animated.Image source={images[0]}
                                            style={[styles.image, { transform: [{ scale: scaleValue3 }] }]} />
                                    </View>
                                    <Text style={globalStyles.description}>Breathe deeply in through your nose, counting to four as you inhale.</Text>
                                </View>
                            )}
                            {statusIndex === 5 && (
                                <View style={styles.imageContainer}>
                                    <Text style={styles.text}>Hold</Text>
                                    <View style={styles.imageWrapper}>
                                        <Animated.Image source={images[2]}
                                            style={styles.image_hold} />
                                    </View>
                                    <Text style={globalStyles.description}>Hold your breath for a count of four.</Text>
                                </View>
                            )}
                            {statusIndex === 6 && (
                                <View style={styles.imageContainer}>
                                    <Text style={styles.text}>Breath out</Text>
                                    <View style={styles.imageWrapper}>
                                        <Animated.Image source={images[1]}
                                            style={[styles.image, { transform: [{ scale: scaleValue4 }] }]} />
                                    </View>
                                    <Text style={globalStyles.description}>Exhale for a count of four through your mouth, pursing your lips slightly as you release the breath.</Text>
                                </View>
                            )}
                            {statusIndex === 7 && (
                                <View style={styles.imageContainer}>
                                    <Text style={styles.text}>Hold</Text>
                                    <View style={styles.imageWrapper}>
                                        <Animated.Image source={images[2]}
                                            style={styles.image_hold} />
                                    </View>
                                    <Text style={globalStyles.description}>Hold your breath for a count of four.</Text>
                                </View>
                            )}{statusIndex === 8 && (
                                <View style={styles.imageContainer}>
                                    <Text style={styles.text}>Breath in</Text>
                                    <View style={styles.imageWrapper}>
                                        <Animated.Image source={images[0]}
                                            style={[styles.image, { transform: [{ scale: scaleValue5 }] }]} />
                                    </View>
                                    <Text style={globalStyles.description}>Breathe deeply in through your nose, counting to four as you inhale.</Text>
                                </View>
                            )}
                            {statusIndex === 9 && (
                                <View style={styles.imageContainer}>
                                    <Text style={styles.text}>Hold</Text>
                                    <View style={styles.imageWrapper}>
                                        <Animated.Image source={images[2]}
                                            style={styles.image_hold} />
                                    </View>
                                    <Text style={globalStyles.description}>Hold your breath for a count of four.</Text>
                                </View>
                            )}
                            {statusIndex === 10 && (
                                <View style={styles.imageContainer}>
                                    <Text style={styles.text}>Breath out</Text>
                                    <View style={styles.imageWrapper}>
                                        <Animated.Image source={images[1]}
                                            style={[styles.image, { transform: [{ scale: scaleValue6 }] }]} />
                                    </View>
                                    <Text style={globalStyles.description}>Exhale for a count of four through your mouth, pursing your lips slightly as you release the breath.</Text>
                                </View>
                            )}
                            {statusIndex === 11 && (
                                <View style={styles.imageContainer}>
                                    <Text style={styles.text}>Hold</Text>
                                    <View style={styles.imageWrapper}>
                                        <Animated.Image source={images[2]}
                                            style={styles.image_hold} />
                                    </View>
                                    <Text style={globalStyles.description}>Hold your breath for a count of four</Text>
                                </View>
                            )}

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
    image_hold: {
        width: 200,
        height: 200,
        borderRadius: 400 / 2,
        borderWidth: 5,
        borderColor: 'rgba(169,175,248,0.1)',
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