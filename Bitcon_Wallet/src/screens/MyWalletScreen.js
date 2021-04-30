import React from 'react';
import {View, Text, Button} from 'react-native';
import getStyleSheet from '../styles/styles';

function MyWalletScreen({navigation}) {
  const styles = getStyleSheet('light');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>BitCoin Wallet</Text>
      </View>

      <View style={styles.body}>
        <Text>My Wallet</Text>
        <Button
          title="지갑"
          onPress={() => navigation.navigate('WalletScreen')}
        />
      </View>

      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

export default MyWalletScreen;
