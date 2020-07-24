import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export default class SignOut extends Component {

    constructor(props) {
        super(props);

      }

    async clearAll ()  {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          // clear error
        }
      
        console.log('Done.')
      }
    componentDidMount(){
        this.clearAll();
        this.props.navigation.navigate('SignIn');
    }
      
      
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
