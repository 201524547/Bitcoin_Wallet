import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import getStyleSheet from '../components/styles';

function MyWalletScreen({navigation}) {
  const styles = getStyleSheet('light');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>BitCoin Wallet</Text>
      </View>

      <View style={styles.body}>
        <Text>My Wallet</Text>
      </View>

      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

export default MyWalletScreen;
