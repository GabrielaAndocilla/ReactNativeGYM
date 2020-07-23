import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class Hello5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Height: "",
      weight: "",
    };
  }
  onChangeTextH(key,text){
    this.setState({
      Height: text
    })
  }
  onChangeTextW(key,text){
    this.setState({
      weight: text
    })
  }

  PressN() {
      this.props.navigation.navigate('SignIn');
      this.storeData()
    
  };
  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@MyApp_user', JSON.stringify({height: this.state.Height,
      weight: this.state.weight}))
    } catch (e) {
      // saving error
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Step 5/5</Text>
        <Text style={styles.subtitle}>What is your height and weight?</Text>
        <TextInput
        style={{width:312, backgroundColor:'white', height:50.5, borderRadius:50, textAlign:'center',alignSelf:'center', margin:30}}
        placeholder={'Height'} placeholderTextColor="#AAAAA9"
          onChangeText={(text) => this.onChangeTextH('Height',text)}
        />
        <TextInput

                style={{width:312, backgroundColor:'white', height:50.5, borderRadius:50, textAlign:'center',alignSelf:'center', marginBottom:90}}

        placeholder={'Weight'} placeholderTextColor="#AAAAA9"
          onChangeText={(text) => this.onChangeTextW('Weight',text)}
        />
                <TouchableOpacity
          style={
            this.state.changeW || this.state.changeK || this.state.changeB
              ? styles.subcontainerPressN
              : styles.subcontainerN
          }
          onPress={this.PressN.bind(this)}>
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
    marginTop: '2%',
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
  subcontainer: {
    width: 284,
    height: 77,
    margin: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 77,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainerPress: {
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
export default Hello5;
