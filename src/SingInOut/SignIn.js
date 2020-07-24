import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: false,
      name: '',
      password: '',
    };
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
  async  next() {
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    let resp = await fetch("http://gym.areas.su/signin?username="+this.state.name+"&password="+this.state.password, requestOptions)
     
    let data = await resp.json();
    if(data.notice.answer != "Error username or password"){
      this.props.navigation.navigate('BotMenu');

    }else{
      Alert.alert(
        'Login Failed ',
        "Error username or password",
        [
          
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
      }

    this.setState({
      next: true,
    });
    
  }
  onChangeTextN(txt) {
    this.setState({
      name: txt,
    });
    console.log(this.state.name)

  }
  onChangeTextP(txt) {
    this.setState({
      password: txt,
    });
    console.log(this.state.password)
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={{
            width: 179,
            height: 179,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
          source={require('../../images/fitness_logo.png')}
        />
        <View style={{top: -30}}>
          <Text style={styles.title}>Home</Text>
          <Text style={styles.title}>Gym</Text>
        </View>
        <View
          style={{
            width: 312,
            backgroundColor: 'white',
            height: 50.5,
            borderRadius: 50,
            alignSelf: 'center',
            marginBottom: 20,
            flexDirection: 'row',

          }}>
          <Image
            style={{
              width: 30,
              height: 30,
              resizeMode: 'contain',
              alignItems: 'center',
              margin: 10,

                      }}
            source={require('../../images/iconsuser.png')}
          />
          <View style={{height:51, width:0.99, backgroundColor:'#999999', marginRight:5, opacity:0.5}}/>
          <TextInput
            style={{
              width: 200,
              backgroundColor: 'white',
              height: 50.5,
              borderRadius: 50,
              alignSelf: 'center',
            }}
            placeholder={'Name'}
            placeholderTextColor="#AAAAA9"
            onChangeText={(text) => this.onChangeTextN(text)}
          />
        </View>
        <View
          style={{
            width: 312,
            backgroundColor: 'white',
            height: 50.5,
            borderRadius: 50,
            alignSelf: 'center',
            marginBottom: 20,
            flexDirection: 'row',

          }}>
          <Image
            style={{
              width: 30,
              height: 30,
              resizeMode: 'contain',
              alignItems: 'center',
              margin: 10,

                      }}
            source={require('../../images/iconsuser.png')}
          />
          <View style={{height:51, width:0.99, backgroundColor:'#999999', marginRight:5, opacity:0.5}}/>
          <TextInput
            style={{
              width: 200,
              backgroundColor: 'white',
              height: 50.5,
              borderRadius: 50,
              alignSelf: 'center',
              color:"#AAAAA9"
            }}
            placeholder={'Password'}
            placeholderTextColor="#AAAAA9"
            secureTextEntry={true}

            onChangeText={(text) => this.onChangeTextP(text)}
          />
        </View>

        <TouchableOpacity
          style={
            this.state.next ? styles.subcontainerPressN : styles.subcontainerN
          }
          onPress={this.next.bind(this)}>
          <Text> Sign In </Text>
        </TouchableOpacity>
        <TouchableOpacity
          
          onPress={()=>{this.props.navigation.navigate('Register')}}>
          <Text style={{color:'white', alignSelf:'center', textDecorationLine:'underline', fontSize:24, margin:10, marginBottom:60}}> Sign Up </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('BotMenu')}}>
          <Text style={{color:'white', alignSelf:'center', textDecorationLine:'underline', fontSize:16}}> Skip </Text>
        </TouchableOpacity>
      </ScrollView>
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
  },
  subcontainerN: {
    width: 284,
    height: 50,
    margin: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 77,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainerPressN: {
    width: 284,
    height: 50,
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
