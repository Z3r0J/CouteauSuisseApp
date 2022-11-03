import {StyleSheet} from 'react-native';

export const Styles = (isDarkMode: boolean) =>
  StyleSheet.create({
    viewStyle: {
      padding: 10,
    },
    universityCard: {
      marginStart: 8,
      marginEnd: 8,
      backgroundColor: isDarkMode ? '#F3A03B' : '#DC7E0B',
      padding: 5,
      marginBottom: 8,
      marginTop: 9,
    },
    inputStyle: {
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#F3A03B' : '#DC7E0B',
      fontSize: 18,
      color: isDarkMode ? 'white' : 'black',
    },
  });
