import React, {useEffect, useState} from 'react';
import {Text, TextInput, useColorScheme, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import useDebounce from '../../helpers/debounce';
import {Styles} from '../../helpers/Styles';
import {getGenderByName} from '../../services/apiServices';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const GenderByNameComponent = () => {
  const [name, setName] = useState<string>('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  const handleInput = (e: string) => {
    setName(e);
    if (e == '') {
      setResult(null);
    }
  };
  const debouncedValue = useDebounce(name, 800);

  const genderByName = async (value: string) => {
    setResult(null);
    setIsLoading(true);
    await getGenderByName(value).then(response => {
      setResult(response);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (name != '') {
      genderByName(name);
    }
  }, [debouncedValue]);

  return (
    <View style={Styles(isDarkMode).viewStyle}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '900',
          marginBottom: 2,
          marginTop: 8,
          color: isDarkMode ? 'white' : 'black',
        }}>
        Inserta un nombre:
      </Text>
      <TextInput
        onChangeText={handleInput}
        style={Styles(isDarkMode).inputStyle}
      />
      {isLoading && (
        <Spinner
          animation="fade"
          visible={isLoading}
          textContent={'Cargando...'}
          color="red"
        />
      )}

      {result && (
        <View
          style={{
            marginEnd: 8,
            backgroundColor: result?.gender == 'male' ? '#10D3EE' : '#EE108C',
            padding: 5,
            marginBottom: 8,
            marginTop: 9,
            display: 'flex',
            justifyContent: 'space-around',
          }}>
          <IonIcon
            name={result.gender == 'male' ? 'male' : 'female'}
            size={40}
            color={'White'}
          />
          <Text style={{fontSize: 20, color: 'white'}}>
            {result.name + ' - ' + result.gender}
          </Text>
        </View>
      )}
    </View>
  );
};
