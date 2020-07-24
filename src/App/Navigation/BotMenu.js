// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Plan from '../Main';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

function BotMenu() {
  return (
    <Tab.Navigator
      >
      <Tab.Screen name="Plan" component={Plan} />
    </Tab.Navigator>
  );
}

export default BotMenu;
