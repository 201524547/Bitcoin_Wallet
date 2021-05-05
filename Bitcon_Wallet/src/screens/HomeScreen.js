import React, {Component, useState} from 'react';
import {Button, View, Text, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PINCode, {
  hasUserSetPinCode,
  resetPinCodeInternalStates,
  deleteUserPinCode,
} from '@haskkor/react-native-pincode';

function HomeScreen({navigation}) {
  const [showPinLock, setShowPinLock] = useState(false);
  const [PINCodeStatus, setPINCodeStatus] = useState('not choose');
  const _setPinLock = () => {
    setPINCodeStatus('choose');
    setShowPinLock(true);
  };

  const _finishProcess = async () => {
    const hasPin = await hasUserSetPinCode();
    if (hasPin) {
      Alert.alert(null, 'You have successfully set/entered your pin.', [
        {
          title: 'Ok',
          onPress: () => {
            // do nothing
          },
        },
      ]);
      setShowPinLock(!showPinLock);
    }
  };

  const _showEnterPinLock = async () => {
    const hasPin = await hasUserSetPinCode();
    if (hasPin) {
      setPINCodeStatus('enter');
      setShowPinLock(true);
      await navigation.navigate('WalletTypeScreen');
    } else {
      Alert.alert(null, 'You have not set your pin.', [
        {
          title: 'Ok',
          onPress: () => {
            // do nothing
          },
        },
      ]);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {!showPinLock && (
        <View>
          <Text>{PINCodeStatus}</Text>
          <Button
            title="Create"
            onPress={() => navigation.navigate('WalletTypeScreen')}
          />
          <Button title="Sign up" onPress={() => _setPinLock()} />
          <Button title="Sign in" onPress={() => _showEnterPinLock()} />
        </View>
      )}
      {showPinLock && (
        <PINCode
          status={PINCodeStatus}
          touchIDDisabled={true}
          finishProcess={() => _finishProcess()}
        />
      )}
    </View>
  );
}

export default HomeScreen;
