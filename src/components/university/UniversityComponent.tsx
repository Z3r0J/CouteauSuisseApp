import React, {useEffect, useMemo, useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import useDebounce from '../../helpers/debounce';
import debounceFunction from '../../helpers/debounce';
import {
  getGenderByName,
  getUniversityByCountry,
} from '../../services/apiServices';

export const UniversityComponent = () => {
  const [search, setSearch] = useState<string>('');
  const [result, setResult] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInput = (e: string) => {
    setSearch(e);
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
    console.log('Value', debouncedValue);
    if (search != '') {
      searchUniversity(search);
    }
  }, [debouncedValue]);

  return (
    <View style={}>
      <TextInput onChangeText={handleInput} />
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
              <Text style={{color: 'red'}} key={i}>
                {r.name}
              </Text>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};
