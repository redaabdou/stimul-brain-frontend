import React from "react";
import { WebView } from 'react-native-webview';
import {
    StyleSheet,
} from "react-native";
import * as Font from 'expo-font';

export default function Brain() {

    return (

        <WebView

            source={{ html: '<iframe src="https://my.spline.design/3dbrain-d84acc2750a039cc7e6cb85fb5bc55f5/" frameborder="0" width="100%" height="100%"></iframe>' }}
            style={{ marginTop: 20 }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
});