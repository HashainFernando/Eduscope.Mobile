import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import Splash from './Splash';
import Login from './src/components/Login/Login';
import Signup from './src/components/Signup/Signup';
import Lecturer from './src/components/Lecturer/Lecturer';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {currentScreen:'Splash'};
        console.log('Start doing some tasks for about 3 seconds')
        setTimeout(()=>{
            console.log('Start doing some tasks for about 3 seconds')
            this.setState({currentScreen:'Login'})
        },3000)
    }
    render(){
        const {currentScreen}=this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash />:<Login />
        return mainScreen
    }
}
AppRegistry.registerComponent('Whiteboard', () => Lecturer);
