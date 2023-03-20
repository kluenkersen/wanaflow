import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, Animated, Platform } from 'react-native';
import { Storage } from 'expo-storage';

import { globalStyles } from '../styles/styles';
import quotes from '../assets/steps/01-cleansing.json';

export default function BoxBreath({ navigation }) {

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
        saveFile();
        navigation.navigate('Home')
    }

    async function saveFile(){
        if( Platform.OS !== 'web') {
          await Storage.setItem({
            key: "opacityStatus",
            value: String(70)
          });
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
                            <View>
                                <Text style={styles.text}>Breath in</Text>
                                <View style={styles.imageWrapper}>
                                    <Animated.Image source={images[0]}
                                        style={[styles.image, { transform: [{ scale: scaleValue1 }] }]} />
                                </View>
                            </View>
                        )}
                        {statusIndex === 1 && (
                            <View>
                                <Text style={styles.text}>Hold</Text>
                                <View style={styles.imageWrapper}>
                                    <Animated.Image source={images[2]}
                                        style={styles.image_hold} />
                                </View>
                            </View>
                        )}
                        {statusIndex === 2 && (
                            <View>
                                <Text style={styles.text}>Breath out</Text>
                                <View style={styles.imageWrapper}>
                                    <Animated.Image source={images[1]}
                                        style={[styles.image, { transform: [{ scale: scaleValue2 }] }]} />
                                </View>
                            </View>
                        )}
                        {statusIndex === 3 && (
                            <View>
                                <Text style={styles.text}>Hold</Text>
                                <View style={styles.imageWrapper}>
                                    <Animated.Image source={images[2]}
                                        style={styles.image_hold} />
                                </View>
                            </View>
                        )}{statusIndex === 4 && (
                            <View>
                                <Text style={styles.text}>Breath in</Text>
                                <View style={styles.imageWrapper}>
                                    <Animated.Image source={images[0]}
                                        style={[styles.image, { transform: [{ scale: scaleValue3 }] }]} />
                                </View>
                            </View>
                        )}
                        {statusIndex === 5 && (
                            <View>
                                <Text style={styles.text}>Hold</Text>
                                <View style={styles.imageWrapper}>
                                    <Animated.Image source={images[2]}
                                        style={styles.image_hold} />
                                </View>
                            </View>
                        )}
                        {statusIndex === 6 && (
                            <View>
                                <Text style={styles.text}>Breath out</Text>
                                <View style={styles.imageWrapper}>
                                    <Animated.Image source={images[1]}
                                        style={[styles.image, { transform: [{ scale: scaleValue4 }] }]} />
                                </View>
                            </View>
                        )}
                        {statusIndex === 7 && (
                            <View>
                                <Text style={styles.text}>Hold</Text>
                                <View style={styles.imageWrapper}>
                                    <Animated.Image source={images[2]}
                                        style={styles.image_hold} />
                                </View>
                            </View>
                        )}{statusIndex === 8 && (
                            <View>
                                <Text style={styles.text}>Breath in</Text>
                                <View style={styles.imageWrapper}>
                                    <Animated.Image source={images[0]}
                                        style={[styles.image, { transform: [{ scale: scaleValue5 }] }]} />
                                </View>
                            </View>
                        )}
                        {statusIndex === 9 && (
                            <View>
                                <Text style={styles.text}>Hold</Text>
                                <View style={styles.imageWrapper}>
                                    <Animated.Image source={images[2]}
                                        style={styles.image_hold} />
                                </View>
                            </View>
                        )}
                        {statusIndex === 10 && (
                            <View>
                                <Text style={styles.text}>Breath out</Text>
                                <View style={styles.imageWrapper}>
                                    <Animated.Image source={images[1]}
                                        style={[styles.image, { transform: [{ scale: scaleValue6 }] }]} />
                                </View>
                            </View>
                        )}
                        {statusIndex === 11 && (
                            <View>
                                <Text style={styles.text}>Hold</Text>
                                <View style={styles.imageWrapper}>
                                    <Animated.Image source={images[2]}
                                        style={styles.image_hold} />
                                </View>
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