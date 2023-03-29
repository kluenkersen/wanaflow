
// import RNFS from 'react-native-fs';
// import { askAsync, MEDIA_LIBRARY_WRITE_ONLY } from 'expo-permissions';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, Platform } from 'react-native';
import { Storage, AsyncStorage } from 'expo-storage';


import { globalStyles } from '../styles/styles.js';


export default function HomeScreen({ navigation }) {

    const technique = ['CleansingBreath', 'BoxBreath']
    const [opacityStatus, setOpacityStatus] = useState(-1);
    const [fileAccess, setFileAccess] = useState(false);
    const [date, setDate] = useState();

    useEffect(() => {
        loadFile();
    }, []);

    async function loadFile() {
        if (Platform.OS !== 'web') {
            try {
                let status = await Storage.getItem({ key: "opacityStatus" });
                let date = await Storage.getItem({ key: "date" });
                if (status != null) {
                    const timeDiffHours = Math.round((Date.now() - date) / (1000 * 60 * 60));
                    const timePct = Math.min(timeDiffHours / 24 * 100, 100);
                    setOpacityStatus(timePct);
                    if ((status-timePct) < 0){
                        status = 0;
                    }else{
                        status = status - timePct;
                    }
                    setOpacityStatus(Math.round(status));
                    setDate(date);
                }
            }
            catch (e) {
                console.log(e);
            }
        }
    }

    return (
        <View style={globalStyles.container}>
            <View>
                <Text>{opacityStatus}</Text>
            </View>

            <View style={globalStyles.containerTop}>
                <Image style={{ width: 200, height: 200, resizeMode: 'contain', opacity: opacityStatus/100 }} source={require('./../assets/icon.png')} />
                <Image style={{ width: 200, height: 200, resizeMode: 'contain',  position: 'absolute',}} source={require('./../assets/icon_colorless.png')} />
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