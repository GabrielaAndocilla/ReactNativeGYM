import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient
import {WebView} from 'react-native-webview';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      press: false,
      videos: [],
      visible: false,
      changeH: 0,
    };
    this.Activate = this.Activate.bind(this);
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
  Activate(vid) {
    this.setState({
      press: true,
      url: vid,
      visible: true,
    });
    console.log(this.state.url);
  }

  page(y) {
    this.setState({
      changeH: y,
    });
    console.log("H",this.state.changeH);
  }

  render() {
    console.log(this.state.visible);
    return (
      <View>
        {this.state.changeH <150 ? (
          <View style={styles.container}>
            <LinearGradient
              colors={['#6E9CD2', '#89ABD4DE', '#B0C1D6B0']}
              style={styles.linearGradient}
              start={{x: 0.01, y: 1}}
              end={{x: 1, y: 0}}>
              <Text style={styles.title}>Profile</Text>
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
        ) : (
          <View style={styles.container2}>
            <LinearGradient
              colors={['#6E9CD2', '#89ABD4DE', '#B0C1D6B0']}
              style={styles.linearGradient}
              start={{x: 0.01, y: 1}}
              end={{x: 1, y: 0}}>
              <Text style={styles.title2}>Home Gym</Text>
              <View style={styles.containerDesc2}>
                <View>
                  <Text style={styles.text2}>0</Text>
                  <Text style={styles.text2}>Trainig</Text>
                </View>
                <View>
                  <Text style={styles.text2}>0</Text>
                  <Text style={styles.text2}>Kcal</Text>
                </View>
                <View>
                  <Text style={styles.text2}>0</Text>
                  <Text style={styles.text2}>Minutes</Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        )}

        <ScrollView
          style={{backgroundColor: 'white', paddingTop: 50}}
          onScroll={(event) => {

            this.page(event.nativeEvent.contentOffset.y);
          }}
          scrollEventThrottle={90}>
          {this.state.press ? (
            <WebView source={{uri: this.state.url}} />
          ) : (
            <View />
          )}

          <View style={{marginBottom: 200}}>
            {this.state.videos.map((vid, i) => (
              <TouchableOpacity
                onPress={() => this.Activate(vid.url)}
                key={i}
                style={{marginVertical: 10}}>
                <ImageBackground
                  source={this.imgGet(vid)}
                  style={{width: '100%', marginHorizontal: '5%'}}
                  imageStyle={styles.image}
                  key={i}>
                  <Text style={styles.textI}>{vid.category}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  title2: {
    fontSize: 24,
    color: 'white',
  },

  text: {
    fontSize: 15,
    color: '#6E9CD2',
    textAlign: 'center',
  },
  text2: {
    fontSize: 15,
    color: 'white',
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
    height: 200,
    position: 'relative',
  },
  container2: {
    width: '100%',
    height: 120,
    position: 'relative',
  },
  linearGradient: {
    paddingTop: 20,
    borderRadius: 5,
    height: 212,
    width: '100%',
    paddingHorizontal: 20,
  },
  linearGradient2: {
    paddingTop: 20,
    borderRadius: 5,
    height: 192,
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
  containerDesc2: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  image: {
    width: '90%',
    height: 146,
    borderRadius: 30,
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});
