import React from 'react';
import {View} from 'react-native';
import TransactionItem from '../../components/wallets/TransactionItem';
import WalletAccountInformation from '../../components/wallets/WalletAccountInformation';
import {WalletScreenStyle} from '../../styles/walletStyles';

const transactions = [
  {id: 1, type: 'send', amount: 20.15, address: '기호영'},
  {id: 2, type: 'receive', amount: 15, address: '기호영'},
  {id: 3, type: 'receive', amount: 10, address: '김수정'},
  {id: 4, type: 'send', amount: 12, address: '이준희'},
];

const TransactionListScreen = () => {
  return (
    <View style={WalletScreenStyle.container}>
      <WalletAccountInformation walletName={'지갑 이름'} walletAccount={'21'} />
      {transactions.map(transaction => (
        <TransactionItem key={transactions.id} transaction={transaction} />
      ))}
    </View>
  );
};

export default TransactionListScreen;
