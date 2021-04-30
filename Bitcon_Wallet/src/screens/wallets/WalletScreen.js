import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import WalletAccountInformation from '../../components/wallets/WalletAccountInformation';
import {WalletScreenStyle} from '../../styles/walletStyles';

const WalletScreen = ({navigation}) => {
  return (
    <View style={WalletScreenStyle.container}>
      <WalletAccountInformation
        walletName={'지갑 이름'}
        walletAccount={21}
        onPress={() => navigation.navigate('TransactionList')}
      />
      <TouchableOpacity
        style={WalletScreenStyle.button}
        onPress={() => navigation.navigate('SendScreen')}>
        <Text style={WalletScreenStyle.buttonText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={WalletScreenStyle.button}
        onPress={() => navigation.navigate('RecieveScreen')}>
        <Text style={WalletScreenStyle.buttonText}>Recieve</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WalletScreen;
