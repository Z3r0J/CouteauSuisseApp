/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationDrawer} from './src/components/navigation/NavigationDrawer';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <NavigationDrawer />
    </NavigationContainer>
  );
};
export default App;
