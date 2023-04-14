// Popup.js
import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Popup = (props) => {
    const { onClose, message } = props;
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            } else {
                onClose();
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [countdown, onClose]);

    return (
        <View style={styles.popupContent}>
            <Text style={styles.text}>{message}{"\n"}{"\n"}</Text>
            <Text>The app closes in: {countdown}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    popupContent: {
        justifyContent: 'center',
        margin: 80,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    text:{
        justifyContent: "center",
        textAlign: "center"
    }
});

export default Popup;
