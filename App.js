/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState } from 'react';
import {
  View,
  Text,
} from 'react-native';
import RadioButton from './src/components/RadioButton'

const PROP = [
  {
    key: 'VIE',
    text: 'Việt Nam',
    url: require('./src/images/vietnam.jpg'),
  },
  {
    key: 'ENG',
    text: 'English',
    url: require('./src/images/england.jpg'),
  },
  {
    key: 'KOR',
    text: 'KOREA',
    url: require('./src/images/korea.jpg'),
  },
  {
    key: 'CHI',
    text: 'CHINA',
    url: require('./src/images/china.jpg'),
  },
  {
    key: 'JAP',
    text: 'JAPAN',
    url: require('./src/images/japan.jpg'),
  },
  {
    key: 'FRA',
    text: 'FRANCE',
    url: require('./src/images/france.jpg'),
  },
];


const App = () => {
  let [value, setValue] = useState('VIE');
  const getState = (result) => {
      setValue(result.val);
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 30}}>
      <View style={{alignItems: 'center', margin: 10}}>
        <Text style={{color: 'orange', fontSize: 20, fontWeight: 'bold'}}>RadioButton</Text>
      </View>
      <View style={{backgroundColor: 'orange', alignItems: 'center', padding: 20, borderRadius: 20}}>
        <RadioButton PROP={PROP} getState={getState} keys={value} />
      </View>
    </View>
  )
}

export default App;
