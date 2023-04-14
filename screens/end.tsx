import { useEffect, useState, useCallback } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { Storage, AsyncStorage } from 'expo-storage';
import RNExitApp from 'react-native-exit-app';

import { globalStyles } from '../styles/styles.js';
import quotes from '../assets/steps/04-endquotes.json';
import approvals from '../assets/steps/05-endapproval.json';
import triggers from '../assets/steps/06-endtrigger.json';
import Popup from "../components/popup";

export default function EndScreen({ navigation, route }) {

    const [showPopup, setShowPopup] = useState(false);
    const [approval, setApproval] = useState("");
    const [quote, setQuote] = useState("");
    const [trigger, setTrigger] = useState("");

    function handleButtonClick() {
        setShowPopup(true);
    }

    function handleClosePopup() {
        setShowPopup(false);
        RNExitApp.exitApp();
    }

    useEffect(() => {
        setApproval(approvals[Math.floor(Math.random() * 3)]);
        setQuote(quotes[Math.floor(Math.random() * 59)]);
        setTrigger(triggers[Math.floor(Math.random() * 3)]);
    }, [])

    // async function saveFile() {
    //     if (Platform.OS !== 'web') {
    //         try {
    //             await Storage.setItem({
    //                 key: "opacityStatus",
    //                 value: String(charge)
    //             });
    //             await Storage.setItem({
    //                 key: "date",
    //                 value: String(Date.now())
    //             });
    //         }
    //         catch (e) {
    //             console.log(e);
    //         }
    //     }
    // }

    return (

        <View style={styles.container}>
            {showPopup &&
                <Modal visible={showPopup}
                    animationType="slide"
                    transparent={true}
                    style={styles.modal}>
                    <Popup onClose={handleClosePopup} message={trigger} />
                </Modal>
            }
            <View style={globalStyles.containerTop}>
                <Text style={globalStyles.description}>
                    {approval}</Text>
            </View>

            <View style={globalStyles.containerMiddle}>
            
                {/* <Image style={{ width: 200, height: 200, resizeMode: 'contain', opacity: charge / 100 }} source={require('./../assets/icon.png')} />
                <Image style={{ width: 200, height: 200, resizeMode: 'contain', position: 'absolute', }} source={require('./../assets/icon_colorless.png')} /> */}
                <Text>Your Breathing inside:</Text>
                <Text style={globalStyles.description}>{quote}</Text>
            </View>
            <View style={globalStyles.containerBottom}>
                <TouchableOpacity style={globalStyles.button} onPress={handleButtonClick}>
                    <Text style={globalStyles.buttonText}>Finish</Text>
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
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
});