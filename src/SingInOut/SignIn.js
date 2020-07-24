import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: false    };
  }
  componentDidMount() {
    console.log(this.getData());
  }
  getData = async () => {
    try {
      const currentUser = await AsyncStorage.getItem('@MyApp_user');
      const a = JSON.stringify(currentUser);
      af = JSON.parse(currentUser);
      console.log('dd', af.height);
      var data = await JSON.parse(currentUser);
      return data;
    } catch (e) {
      // error reading value
    }
  };
next(){
  this.setState({
    next: true
  })
  this.props.navigation.navigate('BotMenu');
}
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: 179,
            height: 179,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
          source={require('../../images/fitness_logo.png')}
        />
        <View style={{top:-30}}>
          <Text style={styles.title}>Home</Text>
          <Text style={styles.title}>Gym</Text>
        </View>

  
        <TouchableOpacity
          style={
            this.state.next 
              ? styles.subcontainerPressN
              : styles.subcontainerN
          }
          onPress={this.next.bind(this)}
          >
          <Text> Next </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: '20%',
  },
  container: {
    backgroundColor: '#6E9CD2',
    width: '100%',
    height: '100%',
    paddingTop: '20%',
  },
  subcontainerN: {
    width: 284,
    height: 77,
    margin: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 77,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainerPressN: {
    width: 284,
    height: 77,
    margin: 10,
    backgroundColor: '#DFDBB8',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 77,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  subcontainerText: {
    color: '#6E9CD2',
    fontSize: 24,
    margin: 20,
  },
});

export default SignIn;
