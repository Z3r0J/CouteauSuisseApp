import {StyleSheet} from 'react-native';

export const Styles = (isDarkMode: boolean) =>
  StyleSheet.create({
    viewStyle: {
      padding: 14,
    },
    universityCard: {
      marginStart: 8,
      marginEnd: 8,
      backgroundColor: isDarkMode ? '#F3A03B' : '#DC7E0B',
      padding: 7,
      marginBottom: 8,
      marginTop: 9,
      borderRadius: 10,
    },

    weatherCard: {
      marginStart: 8,
      marginEnd: 8,
      backgroundColor: isDarkMode ? '#EF9100' : '#EF6D00',
      padding: 5,
      marginBottom: 8,
      marginTop: 9,
      borderRadius: 4,
    },

    inputStyle: {
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#F3A03B' : '#DC7E0B',
      fontSize: 18,
      color: isDarkMode ? 'white' : 'black',
      marginBottom: 7,
    },
    weatherIcon: {
      width: 250,
      height: 250,
      display: 'flex',
      alignSelf: 'center',
    },
    weatherDegree: {
      color: 'white',
      fontSize: 30,
      alignSelf: 'center',
      marginBottom: 9,
      fontWeight: '800',
    },
    weatherText: {
      fontSize: 21,
      alignSelf: 'center',
      fontWeight: '900',
      marginBottom: 4,
      color: 'white',
    },
    weatherDesc: {
      fontSize: 16,
      alignSelf: 'center',
      fontWeight: '900',
      marginBottom: 2,
      color: 'white',
    },
    listStyle: {
      marginTop: 20,
      flexDirection: 'column',
    },
    item: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      marginTop: 8,
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderColor: isDarkMode ? 'rgb(239,145,0)' : 'rgb(239,109,0)',
      color: isDarkMode ? 'white' : '#5A5D5C',
    },
  });
