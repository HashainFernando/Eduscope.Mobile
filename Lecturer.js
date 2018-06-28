import React from 'react';
import {Text, View} from 'react-native';
import { TabNavigator } from 'react-navigation';
import FirstScreen from '../../tabs/FirstScreen';
import SecondScreen from '../../tabs/SecondScreen';
import ThirdScreen from '../../tabs/ThirdScreen';

var MainScreenNavigator = TabNavigator({
    Tab1: {screen: FirstScreen},
    Tab2: {screen: SecondScreen},
    Tab3: {screen: ThirdScreen}
}, {
    tabBarPosition:'top',
    swipeEnabled:true,
    tabBarOptions:{
        activeTintColor:'white',
        activeBackgroundColor:'red',
        inactiveTintColor:'black',
        inactiveBackgroundColor:'blue',
        labelStyle:{
            fontSize:10,
            padding:5
        }

        
    }
}
);

MainScreenNavigator.navigationOptions = {
  title:"Tab example"  
};

export default MainScreenNavigator;