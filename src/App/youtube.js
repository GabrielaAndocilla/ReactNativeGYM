import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'
import { WebView } from 'react-native-webview';
/*
export default class youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {
          videos: [],
        };
        //const { itemId } = this.props.params;
        // console.log(itemId)
        console.log(this.props.navigation.state.params)
          }

  render() {

    return (
        <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
    )
  }
}
*/
function DetailsScreen({ route, navigation }) {
    /* 2. Get the param */
    const { url } = route.params;
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <WebView source={{ uri: url }} />

      </View>
    );
  }
export default DetailsScreen;
