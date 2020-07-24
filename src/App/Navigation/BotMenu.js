// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Plan from '../Main';
import Profile from '../Profile';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function BotMenu() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Plan') {
            return (
              <Image
                style={{width: 30, height: 30}}
                source={require('../../../images/icons_list.png')}
              />
            );
          } else if (route.name === 'Lessons') {
            return (
              <Image
                style={{width: 30, height: 30}}
                source={require('../../../images/icons_dancing.png')}
              />
            );
          } else if (route.name === 'Reports') {
            return (
              <Image
                style={{width: 30, height: 30}}
                source={require('../../../images/icons_report.png')}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <Image
                style={{width: 30, height: 30}}
                source={require('../../../images/iconsuser.png')}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#007AFF',
        inactiveTintColor: '#999999',
      }}>
      <Tab.Screen name="Plan" component={Plan} />
      <Tab.Screen name="Lessons" component={Plan} />
      <Tab.Screen name="Reports" component={Plan} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  );
}

export default BotMenu;
