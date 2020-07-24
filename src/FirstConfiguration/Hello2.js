import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class Hello2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeF: false,
      changeM: false,
      nav: false,
    };
  }
  async componentDidMount() {
    
  }
  async dat(){
    console.log('DATA');
    try {
      const currentUser = await AsyncStorage.getItem('pp');
      console.log("CU",currentUser)
      if (currentUser) {
        this.setState({
          nav: true,
        });
      }
    } catch (e) {}
  }
  PressF() {
    this.setState({
      changeF: !this.state.changeF,
      changeM: false,
    });
  }
  PressM() {
    this.setState({
      changeM: !this.state.changeM,
      changeF: false,
    });
  }
  PressN() {
    this.dat();

    if (this.state.changeM) {
      this.storeData();

      if (this.state.nav) {
        this.props.navigation.navigate('Hello4');
      } else {
        this.props.navigation.navigate('Hello3M');
      }
    }
    if (this.state.changeF) {
      this.storeData();

      if (this.state.nav) {
        this.props.navigation.navigate('Hello4');
      } else {
        this.props.navigation.navigate('Hello3F');
      }
    }
  }
  storeData = async () => {
    try {
      if (this.state.changeF) {
        await AsyncStorage.setItem('gender', 'Female');
      }
      if (this.state.changeM) {
        await AsyncStorage.setItem('gender', 'Male');
      }
    } catch (e) {
      // saving error
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Step 2/5</Text>
        <Text style={styles.subtitle}>What is your gender?</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity onPress={this.PressF.bind(this)}>
            <View
              style={
                this.state.changeF
                  ? styles.subcontainerPress
                  : styles.subcontainer
              }>
              <Image
                style={{width: 50, height: 50}}
                source={require('../../images/icon_female.png')}
              />
            </View>
            <Text style={styles.textGender} onPress={this.PressF.bind(this)}>
              {' '}
              Female{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.PressM.bind(this)}>
            <View
              style={
                this.state.changeM
                  ? styles.subcontainerPress
                  : styles.subcontainer
              }>
              <Image
                style={{width: 50, height: 50}}
                source={require('../../images/icon_male.png')}
              />
            </View>
            <Text style={styles.textGender}> Male </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={
            this.state.changeF || this.state.changeM
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
    marginTop: '20%',
    marginBottom: '30%',
  },
  container: {
    backgroundColor: '#6E9CD2',
    width: '100%',
    height: '100%',
    padding: '20%',
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
  genderContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  textGender: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginTop: '20%',
    marginBottom: '30%',
  },
  subcontainer: {
    width: 77,
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
    width: 77,
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
export default Hello2;
