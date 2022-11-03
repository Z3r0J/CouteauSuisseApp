import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {useColorScheme} from 'react-native';
import {AgeByNameComponent} from '../AgeByName/AgeByNameComponent';
import {GenderByNameComponent} from '../GenderByName/GenderByNameComponent';
import {HomeComponent} from '../home/HomeComponent';
import {UniversityComponent} from '../university/UniversityComponent';
import {WeatherComponent} from '../Weather/WeatherComponent';
import IonIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Oct from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AboutMeComponent} from '../aboutme/AboutMeComponent';

const Drawer = createDrawerNavigator();

export const NavigationDrawer = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: isDarkMode ? 'white' : 'black',
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeComponent}
        options={{
          drawerIcon: () => {
            return (
              <IonIcon
                name="home-circle-outline"
                size={20}
                color={isDarkMode ? 'rgb(239,145,0)' : 'rgb(239,109,0)'}
              />
            );
          },
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="UniversityByCountry"
        component={UniversityComponent}
        options={{
          drawerIcon: () => {
            return (
              <FontAwesome
                name="university"
                size={20}
                color={isDarkMode ? 'rgb(239,145,0)' : 'rgb(239,109,0)'}
              />
            );
          },
          title: 'University',
        }}
      />
      <Drawer.Screen
        name="GenderByName"
        component={GenderByNameComponent}
        options={{
          drawerIcon: () => {
            return (
              <IonIcon
                name="gender-male"
                size={20}
                color={isDarkMode ? 'rgb(239,145,0)' : 'rgb(239,109,0)'}
              />
            );
          },
          title: 'Gender',
        }}
      />
      <Drawer.Screen
        name="AgeByName"
        component={AgeByNameComponent}
        options={{
          drawerIcon: () => {
            return (
              <Oct
                name="number"
                size={20}
                color={isDarkMode ? 'rgb(239,145,0)' : 'rgb(239,109,0)'}
              />
            );
          },

          title: 'Age',
        }}
      />
      <Drawer.Screen
        name="Weather"
        component={WeatherComponent}
        options={{
          drawerIcon: () => {
            return (
              <IonIcon
                name="weather-partly-cloudy"
                size={20}
                color={isDarkMode ? 'rgb(239,145,0)' : 'rgb(239,109,0)'}
              />
            );
          },
          title: 'Weather',
        }}
      />
      <Drawer.Screen
        name="AboutMe"
        component={AboutMeComponent}
        options={{
          drawerIcon: () => {
            return (
              <Icon
                name="information-circle-outline"
                size={20}
                color={isDarkMode ? 'rgb(239,145,0)' : 'rgb(239,109,0)'}
              />
            );
          },
          title: 'About Me',
        }}
      />
    </Drawer.Navigator>
  );
};
