import React from 'react';
import {Button, View, Text} from 'react-native';

function WalletTypeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Wallet Type</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('MyWalletScreen')}
      />
    </View>
  );
}

export default WalletTypeScreen;
