import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }
  async componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    let videos = await fetch('http://gym.areas.su/lessons', requestOptions);
    let data = await videos.json();

    this.setState({
      videos: data,
    });
  }
  imgGet(vid){
    if(vid.category=="torso"){
      return require('../../images/back.png');

    }
    if(vid.category=="hands"){
      return require('../../images/arm.png');
    }
    if(vid.category=="spine"){
      return require('../../images/abs.png');

    }
    if(vid.category=="legs"){
      return require('../../images/fitness_legs.png');

    }
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          <LinearGradient
            colors={['#6E9CD2', '#89ABD4DE', '#BECAD9B0', '#B0C1D6B0']}
            style={styles.linearGradient}
            start={{x: 0.5, y: 1}}
            end={{x: 1, y: 1}}>
            <Text style={styles.title}>Home Gym</Text>
            <View style={styles.containerDesc}>
              <View>
                <Text style={styles.text}>0</Text>
                <Text style={styles.text}>Trainig</Text>
              </View>
              <View>
                <Text style={styles.text}>0</Text>
                <Text style={styles.text}>Kcal</Text>
              </View>
              <View>
                <Text style={styles.text}>0</Text>
                <Text style={styles.text}>Minutes</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View>
          {this.state.videos.map((vid) => (
            <ImageBackground
              source={ this.imgGet(vid)}
              style={{width: '100%', marginHorizontal: '5%'}}
              imageStyle={styles.image}>
              <Text style={styles.textI}>{vid.category}</Text>
            </ImageBackground>
          ))}
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
    margin: 50,
  },
  text: {
    fontSize: 15,
    color: '#6E9CD2',
    textAlign: 'center',
  },
  textI: {
    fontSize: 18,
    color: '#6E9CD2',
    textAlign: 'auto',
    paddingTop: 110,
    padding: 20,
  },
  container: {
    width: '100%',
    height: 212,
    marginBottom: 40,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 212,
    width: '100%',
    paddingHorizontal: 20,
  },
  containerDesc: {
    backgroundColor: 'white',
    height: 100,
    width: '100%',
    borderTopEndRadius: 60,
    borderTopStartRadius: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    textAlign: 'center',
  },
  image: {
    width: '90%',
    height: 146,
    borderRadius: 30,
  },
});
