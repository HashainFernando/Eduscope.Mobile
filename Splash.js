import React, {Component} from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';

export default class Splash extends Component {
    
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.titlewrapper}>
                    <View style={styles.imagewrapper}>
                        <Image
                            style={{width: 121, height: 127}}
                            source={require('./logo.png')} />                
                    </View>
                    <Text style={styles.title}>Welcome!</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Powered by React Native</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'#F5FCFF', 
        flex: 1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    title:{
        color: '#0984e3',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle:{
        color: '#0984e3',
        fontWeight: '200',
        paddingBottom: 10
    },
    titlewrapper:{
        justifyContent:'center',
        flex: 1
    },
    imagewrapper:{
        justifyContent:'center',
        alignItems:'center'
    }
});

