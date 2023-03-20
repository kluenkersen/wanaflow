
// import RNFS from 'react-native-fs';
// import { askAsync, MEDIA_LIBRARY_WRITE_ONLY } from 'expo-permissions';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, Platform } from 'react-native';
import { Storage } from 'expo-storage';


import { globalStyles } from '../styles/styles.js';


export default function HomeScreen({ navigation }) {

    const technique = ['CleansingBreath', 'BoxBreath']
    const [opacityStatus, setOpacityStatus] = useState(-1);
    const [fileAccess, setFileAccess] = useState(false);

    async function loadFile() {
        if (Platform.OS !== 'web') {
            try {
                setOpacityStatus( Storage.getItem({ key: "opacityStatus"}) );
            }
            catch(e){
                console.log(e);
            }
        }
    }


    // async function requestFileSystemAccess() {
    //     const { status } = await askAsync(MEDIA_LIBRARY_WRITE_ONLY);
    //     if (status === 'granted') {
    //         setFileAccess(true);
    //     } else {
    //         console.log('File system access denied.');
    //     }
    // }

    // useEffect(() => {
    //     requestFileSystemAccess();

    //     if (fileAccess == true) {
    //         const saveFile = async () => {
    //             const directoryPath = RNFS.ExternalDirectoryPath;
    //             const fileName = 'charge.json';
    //             try {
    //                 const fileExists = await RNFS.exists(`${directoryPath}/${fileName}`);
    //                 let fileContents = { charge: 0 }; // set the initial value of "charge" to 100

    //                 console.log(fileExists);

    //                 if (fileExists) {
    //                     const loadedFileContents = await RNFS.readFile(`${directoryPath}/${fileName}`, 'utf8');
    //                     fileContents = JSON.parse(loadedFileContents);
    //                     setCharge(fileContents.charge);
    //                     console.log(`Current charge value: ${fileContents.charge}`);
    //                 }
    //             } catch (err) {
    //                 console.error(err);
    //             }
    //         };
    //     }
    // }, [])

    return (
        <View style={globalStyles.container}>
            <View>
                <Text>{charge}</Text>
            </View>

            <View style={globalStyles.containerTop}>
                <Image style={styles.logo} source={require('./../assets/icon.png')} />
            </View>

            <View style={globalStyles.containerBottom}>
                <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate(technique[Math.floor(Math.random() * 2)])}>
                    <Text style={globalStyles.buttonText}>Wana</Text>
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