import {StyleSheet} from 'react-native';

export const Colors = {
  dark: 'black',
  light: 'white',
  red: 'red',
  main: '#002366',
};

const baseHeaderStyles = {
  flex: 3,
  justifyContent: 'center',
  alignItems: 'center',
};

const baseBodyStyles = {
  flex: 7,
  justifyContent: 'center',
  alignItems: 'center',
};

const baseFooterStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const baseBoxStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  height: 150,
  width: 150,
};

const lightStyleSheet = StyleSheet.create({
  header: {
    ...baseHeaderStyles,
  },

  body: {
    ...baseBodyStyles,
  },

  footer: {
    ...baseFooterStyles,
  },
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.light,
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.dark,
  },
});

const darkStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.dark,
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.light,
  },
});

const redStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.red,
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.light,
  },
});

export default function getStyleSheet(themeType) {
  switch (themeType) {
    case 'dark':
      return darkStyleSheet;
    case 'light':
      return lightStyleSheet;
    case 'red':
      return redStyleSheet;
    default:
      return darkStyleSheet;
  }
}
