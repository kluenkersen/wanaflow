import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const window = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    containerTop: {
        alignItems: 'center',
        justifyContent: 'center',
        height: window.height * 0.30,
    },
    containerBottom: {
        alignItems: 'center',
        justifyContent: 'center',
        // height: window.height * 0.50,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    subtitle: {
        fontSize: 24,
        fontStyle: 'italic',
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#00bcd4',
        padding: 16,
        borderRadius: 8,
        marginTop: 24,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});