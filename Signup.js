import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';

export default class Signup extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={styles.titlecontainer}>
                                <Text style={styles.title}>Create Your Account</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input}
                                    placeholder="First Name"
                                    placeholderTextColor='#0984e3'                                    
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtLname.focus()}
                                />
                                <TextInput style={styles.input}
                                    placeholder="Last Name"
                                    placeholderTextColor='#0984e3'                                    
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    ref={"txtname"}
                                    onSubmitEditing={() => this.refs.txtEmail.focus()}
                                />
                                <TextInput style={styles.input}
                                    placeholder="Email"
                                    placeholderTextColor='#0984e3'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    ref={"txtEmail"}
                                    onSubmitEditing={() => this.refs.txtPwd.focus()}
                                />
                                <TextInput style={styles.input}
                                    placeholder="Password"
                                    placeholderTextColor='#0984e3'                                    
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    ref={"txtPwd"}
                                    onSubmitEditing={() => this.refs.txtConPwd.focus()}
                                    secureTextEntry
                                />
                                <TextInput style={styles.input}
                                    placeholder="Confirm Password"
                                    placeholderTextColor='#0984e3'                                    
                                    returnKeyType='go'
                                    autoCorrect={false}
                                    ref={"txtConPwd"}
                                    secureTextEntry                                    
                                />
                                <TouchableOpacity style={styles.buttonContainer} onPress={Keyboard.dismiss}>
                                    <Text style={styles.buttonText}>REGISTER</Text>

                                </TouchableOpacity>
                                <Text style={styles.forgotText}>Have an Account? Sign In</Text>                                
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
        textAlign: 'center',
        marginTop: 5
    }
})