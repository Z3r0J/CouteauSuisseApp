import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TextInput, useColorScheme, View} from 'react-native';
import useDebounce from '../../helpers/debounce';
import {Styles} from '../../helpers/Styles';
import {getAgeByName} from '../../services/apiServices';

export const AgeByNameComponent = () => {
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
    await getAgeByName(value).then(response => {
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
      <TextInput
        onChangeText={handleInput}
        style={Styles(isDarkMode).inputStyle}
      />
      {result && (
        <ScrollView style={Styles(isDarkMode).universityCard}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}>{`${result.name} - ${result.age}`}</Text>
        </ScrollView>
      )}
    </View>
  );
};
