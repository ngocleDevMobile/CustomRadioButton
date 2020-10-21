import React, {Component, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const RadioButton = ({PROP, getState, keys}) => {
  let [value, setValue] = useState(keys);

  return (
    <View>
      {PROP.map((res) => {
        return (
          <View key={res.key} style={styles.container}>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
                setValue(res.key),
                  getState({
                    val: res.key,
                    text: res.text,
                    img: res.url,
                  });
              }}>
              {value === res.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
            <View style={styles.country}>
              <Image style={styles.img} source={res.url} />
              <Text style={{paddingLeft: 10}}>{res.text}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  country: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F6F9',
    marginLeft: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 6,
  },
  radioText: {
    marginLeft: 35,
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
  radioCircle: {
    height: 26,
    width: 26,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#143678',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#143678',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
  img: {
    width: 40,
    height: 40,
  },
});

export default RadioButton;
