import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import WalletAccountInformation from '../../components/wallets/WalletAccountInformation';
import {SendScreenStyle, WalletScreenStyle} from '../../styles/walletStyles';

const SendScreen = ({navigation}) => {
  const [address, setAddress] = React.useState('');
  const [amount, setAmount] = React.useState('');

  return (
    <View style={WalletScreenStyle.container}>
      <WalletAccountInformation walletName={'지갑 이름'} walletAccount={21} />
      <TextInput
        style={SendScreenStyle.input}
        value={address}
        onChangeText={setAddress}
        placeholder={'받는 사람 주소를 입력해주세요.'}
      />
      <TextInput
        style={SendScreenStyle.input}
        value={amount}
        onChangeText={setAmount}
        placeholder={'보낼 금액을 입력해주세요.'}
        keyboardType={'number-pad'}
      />
      <TouchableOpacity
        style={SendScreenStyle.button}
        onPress={() => navigation.navigate('WalletScreen')}>
        <Text style={SendScreenStyle.text}>완 료</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SendScreen;
