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

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: false,
      name: '',
      email:'',
      password: '',
      password2: '',
      height:0,
      weight:0
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
      this.setState({
        height:af.height,
        weight:af.weight  
      })

      var data = await JSON.parse(currentUser);
      return data;
    } catch (e) {
    }
  };
  async  next() {
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    try{
        let resp = await fetch("http://gym.areas.su/signup?username="+this.state.name+"&email="+this.state.email+"&password="+this.state.password+"&weight="+this.state.weight+"&height="+this.state.height, requestOptions)

        let data = await resp.json();
        console.log(data)
        if(data.notice.answer == "Success"){
          this.props.navigation.navigate('BotMenu');
    
        }else{
          Alert.alert(
            'Register Failed ',
            "check if all inputs are complete",
            [
              
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
          );
          }
    
    }catch(e){
        Alert.alert(
            'Register Failed ',
            "check if all inputs are complete",
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
  onChangeTextE(txt) {
    this.setState({
      email: txt,
    });
    console.log(this.state.email)

  }
  onChangeTextPP(txt) {
    this.setState({
      password2: txt,
    });
    console.log(this.state.password2)
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
              color:"#AAAAA9"

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
            placeholder={'Email'}
            placeholderTextColor="#AAAAA9"
            onChangeText={(text) => this.onChangeTextE(text)}
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

            onChangeText={(text) => this.onChangeTextPP(text)}
          />
        </View>

        <TouchableOpacity
          style={
            this.state.next ? styles.subcontainerPressN : styles.subcontainerN
          }
          onPress={this.next.bind(this)}>
          <Text> Sign Up </Text>
        </TouchableOpacity>

        <TouchableOpacity
          
          onPress={() => this.props.navigation.goBack()}>
          <Text style={{color:'white', alignSelf:'center', textDecorationLine:'underline', fontSize:16, marginBottom:20, marginTop:50}}> Back </Text>
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

export default Register;
