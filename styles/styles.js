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
        flex: 1,        
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerMiddle: {
        flex: 2.22, // (100 - 45) / 45 = 1.22, so 1 + 1.22 = 2.22
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerBottom: {
        flex: 1,        
        alignItems: 'center',
        marginTop: -5,
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
        backgroundColor: 'rgba(181,114,249,255)',
        padding: 16,
        borderRadius: 8,
        // marginTop: 24,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
    description: {
        marginBottom: 15,
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: 'rgba(169,175,248,1)',
    },
    text: {
        marginBottom: 15,
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: 'rgba(169,175,248,1)',
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
});