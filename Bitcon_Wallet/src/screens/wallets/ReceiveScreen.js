import React from 'react';
import {View} from 'react-native';
import WalletAccountInformation from '../../components/wallets/WalletAccountInformation';
import {WalletScreenStyle} from '../../styles/walletStyles';

const ReceiveScreen = () => {
  return (
    <View style={WalletScreenStyle.container}>
      <WalletAccountInformation walletName={'지갑 이름'} walletAccount={21} />
    </View>
  );
};

export default ReceiveScreen;
