import React from 'react';
import {View, Text} from 'react-native';

const data = [
  {id: 'a', name: 'isuru'},
  {id: 'b', name: 'asa'},
  {id: 'c', name: 'sri'},
];

export default function app() {
  return (
    <View>
      {data.map(item => (
        <Text>{item.name}</Text>
      ))}
    </View>
  );
}
