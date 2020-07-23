import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, SafeAreaView} from 'react-native';

export class Hello1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        changeW: false,
        changeK: false,
        changeB: false


        }
    }
    PressW(){
        this.setState({
            changeW: !this.state.changeW ,
            changeB: false,
            changeK: false
        })
        this.props.navigation.navigate('Hello2');
    }
    PressK(){
        this.setState({
            changeK: !this.state.changeK,
            changeW: false,
            changeB: false
        })
        this.props.navigation.navigate('Hello2');
    }
    PressB(){
        this.setState({
            changeB: !this.state.changeB,
            changeW: false,
            changeK: false

        })
        this.props.navigation.navigate('Hello2');
    }
  render() {

    return (
        
      <View style={styles.container}>
        <Text style={styles.title}>Step 1/5</Text>
        <Text style={styles.subtitle}>What is your purpose?</Text>
        <View style={ this.state.changeW ? styles.subcontainerPress : styles.subcontainer}>
        <Image
            style={{width: 50, height: 50}}
            source={require('../../images/icon_scale.png')}
          />
          <Text style={styles.subcontainerText} onPress={this.PressW.bind(this) }>Weight loss</Text>
        </View> 
        <View style={ this.state.changeK ? styles.subcontainerPress : styles.subcontainer}>
        <Image
            style={{width: 50, height: 50}}
            source={require('../../images/icon_prenatal_yoga.png')}
          />
          <Text style={styles.subcontainerText} onPress={this.PressK.bind(this)}>Keeping fit</Text>
        </View>
        <View style={ this.state.changeB ? styles.subcontainerPress : styles.subcontainer}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../images/icon_triceps.png')}
          />
          <Text style={styles.subcontainerText} onPress={this.PressB.bind(this)}>
            Build muscle
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    title:{
        fontSize:50,
        color:'white',
        textAlign:'center',
        marginTop:'2%'

    },
    subtitle:{
        fontSize:18,
        color:'white',
        textAlign:'center',
        marginTop:'20%',
        marginBottom:'30%'
        },
    container:{
        backgroundColor:'#6E9CD2',
        width:'100%',
        height:'100%',
        padding:'20%',

    },
    subcontainer: {
        width: 284,
        height: 77,
        margin:10,
        backgroundColor: 'white',
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius:77,
        alignItems:'center',
        justifyContent:'center',


    },
    subcontainerPress: {
        width: 284,
        height: 77,
        margin:10,
        backgroundColor: '#DFDBB8',
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius:77,
        alignItems:'center',
        justifyContent:'center',


    },
    subcontainerText:{
        color: '#6E9CD2',
        fontSize:24,
        margin:20
    }
});
export default Hello1;
