export const Colors = {
  dark: 'black',
  light: 'white',
  red: 'red',
  main: '#002366',
};

const WalletButtonStyle = {
  width: '60%',
  height: 40,

  display: 'flex',
  flexDirection: 'column',
  justyfyContent: 'center',
  alignItems: 'center',

  marginBottom: 12,

  backgroundColor: Colors.main,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: Colors.light,
};

const WalletButtonTextStyle = {
  color: Colors.light,
  fontSize: 16,
  fontWeight: 'light',
  lineHeight: 36,
  textAlign: 'center',
};

const WalletScreenContainerStyle = {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justyfyContent: 'flexStart',
  alignItems: 'center',

  padding: 10,

  backgroundColor: Colors.main,
};

export const WalletScreenStyle = {
  container: WalletScreenContainerStyle,
  button: WalletButtonStyle,
  buttonText: WalletButtonTextStyle,
};

const WalletInformationContainerStyle = {
  width: '80%',
  height: 120,

  display: 'flex',
  flexDirection: 'column',
  justyfyContent: 'spaceBetween',
  alignItems: 'center',

  padding: 20,
  marginTop: 20,
  marginBottom: 20,

  backgroundColor: Colors.main,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: Colors.light,
  borderRadious: '10%',
};

const WalletNameStyle = {
  marginBottom: 16,

  color: Colors.light,
  fontSize: 20,
  fontWeight: 'bold',
  lineHeight: 24,
};

const WalletAccountStyle = {
  color: Colors.light,
  fontSize: 30,
  fontWeight: 'bold',
  lineHeight: 32,
};

export const WalletInformation = {
  container: WalletInformationContainerStyle,
  walletName: WalletNameStyle,
  walletAccount: WalletAccountStyle,
};

const TransactionItemContainerStyle = {
  width: '80%',
  height: 60,

  display: 'flex',
  flexDirection: 'row',
  justyfyContent: 'flexStart',
  alignItems: 'center',

  marginBottom: 8,
  padding: 10,

  backgroundColor: Colors.main,
  borderWidth: 1,
  borderColor: Colors.light,
  borderStyle: 'solid',
};

const TransactionTypeTextStyle = transactionType => {
  return {
    width: 80,
    marginRight: 20,

    color: transactionType == 'receive' ? 'blue' : 'red',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
    textAlign: 'center',
  };
};
const TransactionAmountStyle = {
  width: 60,
  marginRight: 20,

  color: Colors.light,
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: 28,
};

const TransactionAddressStyle = {
  color: Colors.light,
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: 28,
};

export const TransactionItemStyle = {
  container: TransactionItemContainerStyle,
  transactionType: TransactionTypeTextStyle,
  transactionAmount: TransactionAmountStyle,
  transactionAddress: TransactionAddressStyle,
};

const SendInputStyle = {
  width: '80%',
  height: 40,

  display: 'flex',

  marginBottom: 12,
  padding: 8,

  backgroundColor: '#224588',

  color: Colors.light,
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: 24,
};

const SendButtonStyle = {
  width: 160,
  height: 36,

  display: 'flex',
  justyfyContent: 'center',
  alignItems: 'center',

  marginTop: 12,

  backgroundColor: Colors.main,
  borderColor: Colors.light,
  borderStyle: 'solid',
  borderWidth: 1,
};

const SendButtonTextStyle = {
  color: Colors.light,
  fontSize: 20,
  fontWeight: 'normal',
  lineHeight: 32,
};

export const SendScreenStyle = {
  input: SendInputStyle,
  button: SendButtonStyle,
  text: SendButtonTextStyle,
};
