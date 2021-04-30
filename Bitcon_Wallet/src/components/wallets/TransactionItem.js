import React from 'react';
import {Text, View} from 'react-native';
import {TransactionItemStyle} from '../../styles/walletStyles';

const TransactionItem = ({transaction}) => {
  return (
    <View style={TransactionItemStyle.container}>
      <Text style={TransactionItemStyle.transactionType(transaction.type)}>
        {transaction.type}
      </Text>
      <Text style={TransactionItemStyle.transactionAmount}>
        {transaction.amount} BTC
      </Text>
      <Text style={TransactionItemStyle.transactionAddress}>
        {transaction.address}
      </Text>
    </View>
  );
};

export default TransactionItem;
