import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Privacy extends Component {
  render() {
    return (
      <View>
          <WebView source={{uri: 'https://logrocket.com/'}} />
      </View>
    )
  }
}
