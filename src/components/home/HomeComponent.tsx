import React from 'react';
import {Image, Text, useColorScheme, View} from 'react-native';
import {Styles} from '../../helpers/Styles';

export const HomeComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={Styles(isDarkMode).viewStyle}>
      <View style={Styles(isDarkMode).universityCard}>
        <Image
          source={require('../../../assets/images/cuchillo-suizo.png')}
          resizeMode="cover"
        />
        <Text style={Styles(isDarkMode).weatherText}>
          Tarea 6 - Couteau Suisse
        </Text>
        <Text style={Styles(isDarkMode).weatherDesc}>By Jean Carlos</Text>
      </View>
    </View>
  );
};
