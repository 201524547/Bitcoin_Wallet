import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Wallet App</Text>
      <Button
        title="Create"
        onPress={() => navigation.navigate('WalletTypeScreen')}
      />
    </View>
  );
}

export default HomeScreen;
