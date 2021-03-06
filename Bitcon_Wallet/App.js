import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import WalletTypeScreen from './src/screens/WalletTypeScreen';
import MyWalletScreen from './src/screens/MyWalletScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WalletTypeScreen" component={WalletTypeScreen} />
        <Stack.Screen name="MyWalletScreen" component={MyWalletScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
