import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, useColorScheme, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {Styles} from '../../helpers/Styles';
import {getWeather} from '../../services/apiServices';

export const WeatherComponent = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';
  const url = (imageName: string) => {
    console.log(`https://openweathermap.org/img/wn/${imageName}@2x.png`);
    return `https://openweathermap.org/img/wn/${imageName}@2x.png`;
  };

  const getForecast = async () => {
    await getWeather().then(response => {
      setIsLoading(false);
      setResult(response);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getForecast();
  }, []);

  return (
    <View style={Styles(isDarkMode).viewStyle}>
      <Spinner
        animation="fade"
        visible={isLoading}
        textContent={'Cargando...'}
        textStyle={{color: isDarkMode ? 'white' : 'white'}}
        color="red"
      />
      {result && (
        <>
          <ScrollView style={Styles(isDarkMode).weatherCard}>
            <Text style={Styles(isDarkMode).weatherText}>
              Weather in {result.name}
            </Text>
            {result.weather.map((w, i) => {
              return (
                <View key={i}>
                  <Image
                    source={{
                      uri: url(w.icon),
                      cache: 'force-cache',
                      width: 100,
                    }}
                    key={w.icon}
                    style={Styles(isDarkMode).weatherIcon}
                    resizeMode="cover"
                  />
                  <Text
                    key={w.id}
                    style={
                      Styles(isDarkMode).weatherDesc
                    }>{`${w.main} - ${w.description}`}</Text>
                </View>
              );
            })}
            <Text
              style={
                Styles(isDarkMode).weatherDegree
              }>{`${result.main.temp} C°`}</Text>
          </ScrollView>
        </>
      )}
    </View>
  );
};
