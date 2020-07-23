import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export class Hello3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeH: false,
      changeS: false,
      changeT: false,
      changeL: false,
    };
  }
  PressH() {
    this.setState({
      changeH: !this.state.changeH,
      changeS: false,
      changeT: false,
      changeL: false,
    });
    this.props.navigation.navigate('Hello4')
}
  PressS() {
    this.setState({
      changeS: !this.state.changes,
      changeH: false,
      changeT: false,
      changeL: false,
    });
    this.props.navigation.navigate('Hello4')

  }
  PressT() {
    this.setState({
      changeT: !this.state.changeT,
      changeH: false,
      changeS: false,
      changeL: false,
    });
    this.props.navigation.navigate('Hello4')

  }
  PressL() {
    this.setState({
      changeL: !this.state.changeL,
      changeS: false,
      changeT: false,
      changeH: false,
    });
    this.props.navigation.navigate('Hello4')

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Step 3/5</Text>
        <Text style={styles.subtitle}>What do you want to work on?</Text>

        <View style={{zIndex: 3}}>
          <TouchableOpacity onPress={this.PressH.bind(this)}>
            <View
              style={
                this.state.changeH
                  ? styles.subcontainerPress
                  : styles.subcontainer
              }>
              <Text style={styles.subcontainerText}>Hands</Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              width: 150,
              height: 2,
              backgroundColor: 'white',
              position: 'relative',
              zIndex: 3,
              left: 140,
              top: -25,
              zIndex:-1
            }}></View>
          <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 10,
              backgroundColor: 'white',
              position: 'relative',
              zIndex: 3,
              left: 289,
              top: -33,
            }}></View>
          <TouchableOpacity onPress={this.PressS.bind(this)}>
            <View
              style={
                this.state.changeS
                  ? styles.subcontainerPress
                  : styles.subcontainer
              }>
              <Text style={styles.subcontainerText}>Spine</Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              width: 160,
              height: 2,
              backgroundColor: 'white',
              position: 'relative',
              zIndex: 3,
              left: 140,
              top: -26,
            }}></View>
          <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 10,
              backgroundColor: 'white',
              position: 'relative',
              zIndex: 3,
              left: 290,
              top: -36,
            }}></View>
          <TouchableOpacity onPress={this.PressT.bind(this)}>
            <View
              style={
                this.state.changeT
                  ? styles.subcontainerPress
                  : styles.subcontainer
              }>
              <Text style={styles.subcontainerText}>Torso</Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              width: 180,
              height: 2,
              backgroundColor: 'white',
              position: 'relative',
              zIndex: 3,
              left: 140,
              top: -25,
            }}></View>
          <View
            style={{
              width: 2,
              height: 18,
              borderRadius: 10,
              backgroundColor: 'white',
              position: 'relative',
              zIndex: 3,
              left: 319,
              top: -43,
            }}></View>
          <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 10,
              backgroundColor: 'white',
              position: 'relative',
              zIndex: 3,
              left: 312,
              top: -70,
            }}></View>
          <TouchableOpacity onPress={this.PressL.bind(this)}>
            <View
              style={
                this.state.changeL
                  ? styles.subcontainerPress
                  : styles.subcontainer
              }>
              <Text style={styles.subcontainerText}>Legs</Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              width: 145,
              height: 2,
              backgroundColor: 'white',
              position: 'relative',
              zIndex: 3,
              left: 140,
              top: -27,
            }}></View>
          <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 10,
              backgroundColor: 'white',
              position: 'relative',
              zIndex: 3,
              left: 285,
              top: -36,
            }}></View>
        </View>
        <View style={{zIndex: -1}}>
          <Image
            style={{
              width: '90%',
              height: '90%',
              top: '-63%',
              marginLeft: '50%',
              position: 'relative',
              resizeMode: 'contain',
            }}
            source={require('../../images/female_silhouette.png')}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    marginTop: '1%',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: '7%',
    marginBottom: '15%',
  },
  container: {
    backgroundColor: '#6E9CD2',
    width: '100%',
    height: '100%',
    paddingTop: '20%',
    padding: '2%',
  },
  subcontainer: {
    width: 150,
    height: 46,
    backgroundColor: 'white',
    borderRadius: 77,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainerPress: {
    width: 150,
    height: 46,
    backgroundColor: '#DFDBB8',
    borderRadius: 77,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainerText: {
    color: '#6E9CD2',
  },
});
export default Hello3;
