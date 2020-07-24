import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient
import {WebView} from 'react-native-webview';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      press: false,
      profile: {},
      visible: false,
      changeH: 0,
    };
  }
  async componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
    };

    let profile = await fetch(
      'http://gym.areas.su/profile?token=274965',
      requestOptions,
    );
    let data = await profile.json();
    console.log('USe', data);
    this.setState({
      profile: data[0],
    });
  }
  imgGet(vid) {
    if (vid.category == 'torso') {
      return require('../../images/back.png');
    }
    if (vid.category == 'hands') {
      return require('../../images/arm.png');
    }
    if (vid.category == 'spine') {
      return require('../../images/abs.png');
    }
    if (vid.category == 'legs') {
      return require('../../images/fitness_legs.png');
    }
  }

  page(y) {
    this.setState({
      changeH: y,
    });
    console.log('H', this.state.changeH);
  };

  Notification(){
    this.setState({
        press: !this.state.press,
      });
  }

  render() {
    console.log(this.state.visible);
    return (
      <ScrollView
        style={{backgroundColor: 'white'}}
        onScroll={(event) => {
          this.page(event.nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={90}>
        <View style={styles.container2}>
          <LinearGradient
            colors={['#6E9CD2', '#89ABD4DE', '#B0C1D6B0']}
            style={styles.linearGradient}
            start={{x: 0.01, y: 1}}
            end={{x: 1, y: 0}}>
            <Text style={styles.title2}>
              {this.state.profile.username ? this.state.profile.username : ''}
            </Text>
            <View style={styles.containerDesc2}>
              <View>
                <Text style={styles.text2}>{this.state.profile.weight}</Text>
                <Text style={styles.text2}>Weight</Text>
              </View>
              <View>
                <Text style={styles.text2}>Male</Text>
              </View>
              <View>
                <Text style={styles.text2}>{this.state.profile.height}</Text>
                <Text style={styles.text2}>Height</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <TouchableOpacity style={styles.textcont}>
          <Text style={styles.text}>Training rest</Text>
          <Text style={styles.text}>30 sec</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textcont}>
          <Text style={styles.text}>Notification</Text>
          <Switch
            trackColor={{false: '#BAD0E9', true: '#BAD0E9'}}
            thumbColor={true ? '#76A1D3' : '#76A1D3'}
            ios_backgroundColor="#BAD0E9"
            onValueChange={this.Notification.bind(this)}
            value={this.state.press}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.textcont}>
          <Text style={styles.text}>Biometric</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textcont}>
          <Text style={styles.text}>Start dialog</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textcont}>
          <Text style={styles.text}>Privacy policy</Text>
        </TouchableOpacity>
        <View style={{marginBottom: 200}}></View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  title2: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },

  text: {
    fontSize: 17,
    color: '#6E9CD2',
    margin: 10,
  },
  textcont: {
    borderBottomWidth: 1,
    marginLeft: 20,
    borderColor: '#3C3C434A',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  text2: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  container2: {
    width: '100%',
    height: 100,
    position: 'relative',
  },
  linearGradient: {
    height: 100,
    width: '100%',
    paddingHorizontal: 20,
  },
  containerDesc2: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});
