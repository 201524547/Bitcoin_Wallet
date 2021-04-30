import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import WalletTypeScreen from './src/screens/WalletTypeScreen';
import MyWalletScreen from './src/screens/MyWalletScreen';
import WalletScreen from './src/screens/wallets/WalletScreen';
import SendScreen from './src/screens/wallets/SendScreen';
import ReceiveScreen from './src/screens/wallets/ReceiveScreen.js';
import TransactionListScreen from './src/screens/wallets/TransactionListScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WalletTypeScreen" component={WalletTypeScreen} />
        <Stack.Screen name="MyWalletScreen" component={MyWalletScreen} />
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
        <Stack.Screen
          name="TransactionList"
          component={TransactionListScreen}
        />
        <Stack.Screen name="SendScreen" component={SendScreen} />
        <Stack.Screen name="RecieveScreen" component={ReceiveScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
