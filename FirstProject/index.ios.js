/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FirstProject extends Component {
  render() {
    return (
      <View style={styles.container}> // View Layout unuz. Style ile biçimlendirilmiş.
        <Text style={styles.welcome}>// Text tag imiz
          React Navite Hoşgeldiniz.
        </Text>
        <Text style={styles.instructions}>
        index.ios.js editleyerek başlayabilirsin
        </Text>
        <Text style={styles.instructions}>
          Cmd+R ile yenileyebilirsiniz,{'\n'}
          veya Cmd+D ile menüyü açabilirsiniz.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({      // Stillerinizin özelliklerini belirlediğiniz işlem satırı..
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirstProject', () => FirstProject);
