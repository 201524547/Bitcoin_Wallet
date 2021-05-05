import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {WalletInformation} from '../../styles/walletStyles';

const WalletAccountInformation = ({walletName, walletAccount, onPress}) => {
  return (
    <View style={WalletInformation.container}>
      <Text style={WalletInformation.walletName}>{walletName}</Text>

      <TouchableOpacity onPress={onPress}>
        <Text style={WalletInformation.walletAccount}>{walletAccount} BTC</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WalletAccountInformation;
