import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';

export default class Login extends Component {
     render() {        
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={styles.titlecontainer}>
                                <Text style={styles.title}>Log in to your Account</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input}
                                    placeholder="Username / Email"
                                    placeholderTextColor='#0984e3'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input}
                                    placeholder="Password"
                                    placeholderTextColor='#0984e3'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                />
                                <TouchableOpacity style={styles.buttonContainer} onPress={Keyboard.dismiss}>
                                    <Text style={styles.buttonText}>SIGN IN</Text>
                                </TouchableOpacity>
                                <Text style={styles.forgotText}>Forgot Password?</Text>
                                <TouchableOpacity style={styles.buttonContainer} onPress={Keyboard.dismiss}>
                                    <Text style={styles.buttonText}>SIGN UP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                </KeyboardAvoidingView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1
    },
    titlecontainer: {
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 10
    },
    title: {
        color: "#0984e3",
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 20
    },
    inputContainer: {
        left: 0,
        right: 0,
        bottom: 0,
        padding: 20
    },
    input: {
        color: '#0984e3',
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 12,
        fontSize: 15,
    },
    buttonContainer: {
        backgroundColor: '#0984e3',
        paddingVertical: 10,
        marginTop: 10
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    forgotText: {
        textAlign: 'right',
        marginTop: 5
    }
})