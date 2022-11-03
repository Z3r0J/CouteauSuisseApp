import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TextInput, useColorScheme, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import useDebounce from '../../helpers/debounce';
import debounceFunction from '../../helpers/debounce';
import {Styles} from '../../helpers/Styles';
import {
  getGenderByName,
  getUniversityByCountry,
} from '../../services/apiServices';

export const UniversityComponent = () => {
  const [search, setSearch] = useState<string>('');
  const [result, setResult] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  const handleInput = (e: string) => {
    setSearch(e);

    if (e === '') {
      setResult([]);
    }
  };
  const debouncedValue = useDebounce(search, 800);

  const searchUniversity = async (value: string) => {
    setResult([]);
    setIsLoading(true);
    await getUniversityByCountry(value).then(response => {
      setResult(response);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (search != '') {
      searchUniversity(search);
    }
  }, [debouncedValue]);

  return (
    <View style={Styles(isDarkMode).viewStyle}>
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
        <ScrollView>
          {result.map((r, i) => {
            return (
              <View key={i} style={Styles(isDarkMode).universityCard}>
                <Text style={{color: 'white'}}>
                  {r.country} {'-'}
                </Text>
                <Text style={{color: 'white'}}>{r.name}</Text>
                <Text style={{color: 'white'}}>{r.domains.map(d => d)}</Text>
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};
