import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeW: false,
      changeK: false,
      changeB: false,
    };
  }
  componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://gym.areas.su/lessons', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>
                Home Gym
            </Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    title: {
      fontSize: 24,
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
        width: 375,
        height: 212,
        paddingTop: '20%',
    }
  });
