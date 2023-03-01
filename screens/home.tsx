
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { globalStyles } from '../styles/styles.js';

export default function HomeScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.containerTop}>
                <Image style={styles.logo} source={require('./../assets/icon.png')} />
            </View>
            <View style={globalStyles.containerBottom}>
                <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Screen1')}>
                    <Text style={globalStyles.buttonText}>Start</Text>
                </TouchableOpacity>
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
});