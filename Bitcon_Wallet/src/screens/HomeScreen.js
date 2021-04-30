import React from 'react';
import {Button, View, Text} from 'react-native';

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
