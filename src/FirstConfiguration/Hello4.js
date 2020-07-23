import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export class Hello4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeW: false,
      changeK: false,
      changeB: false,
    };
  }
  PressW() {
    this.setState({
      changeW: !this.state.changeW,
      changeB: false,
      changeK: false,
    });
  }
  PressK() {
    this.setState({
      changeK: !this.state.changeK,
      changeW: false,
      changeB: false,
    });
  }
  PressB() {
    this.setState({
      changeB: !this.state.changeB,
      changeW: false,
      changeK: false,
    });
  }
  PressN() {
    if (this.state.changeB || this.state.changeW || this.state.changeK) {
      this.props.navigation.navigate('Hello5');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Step 4/5</Text>
        <Text style={styles.subtitle}>How often do you exercise?</Text>
        <TouchableOpacity onPress={this.PressW.bind(this)}>
          <View
            style={
              this.state.changeW
                ? styles.subcontainerPress
                : styles.subcontainer
            }>
            <Text style={styles.subcontainerTextT}>Newbie</Text>
            <Text style={styles.subcontainerText}>Just getting started</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.PressK.bind(this)}>
          <View
            style={
              this.state.changeK
                ? styles.subcontainerPress
                : styles.subcontainer
            }>
            <Text style={styles.subcontainerTextT}>Keep on</Text>
            <Text style={styles.subcontainerText}>1-2 times a week</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.PressB.bind(this)}>
          <View
            style={
              this.state.changeB
                ? styles.subcontainerPress
                : styles.subcontainer
            }>
            <Text style={styles.subcontainerTextT}>Advanced</Text>
            <Text style={styles.subcontainerText}>
              More than 3 times a week
            </Text>
          </View>
        </TouchableOpacity>

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
    padding: '20%',
  },
  subcontainer: {
    width: 284,
    height: 77,
    margin: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
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
    borderRadius: 77,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainerText: {
    color: '#6E9CD2',
    fontSize: 18,
  },
  subcontainerTextT: {
    color: '#6E9CD2',
    fontSize: 24,
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
});
export default Hello4;
