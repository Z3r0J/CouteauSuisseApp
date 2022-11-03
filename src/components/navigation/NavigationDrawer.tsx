import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {useColorScheme} from 'react-native';
import {AgeByNameComponent} from '../AgeByName/AgeByNameComponent';
import {GenderByNameComponent} from '../GenderByName/GenderByNameComponent';
import {HomeComponent} from '../home/HomeComponent';
import {UniversityComponent} from '../university/UniversityComponent';

const Drawer = createDrawerNavigator();

export const NavigationDrawer = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: isDarkMode ? 'white' : 'black',
      }}>
      <Drawer.Screen name="Home" component={HomeComponent} />
      <Drawer.Screen
        name="UniversityByCountry"
        component={UniversityComponent}
      />
      <Drawer.Screen name="GenderByName" component={GenderByNameComponent} />
      <Drawer.Screen name="AgeByName" component={AgeByNameComponent} />
    </Drawer.Navigator>
  );
};
