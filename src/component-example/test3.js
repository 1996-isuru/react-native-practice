import React from 'react';
import {View, Text, Button} from 'react-native';

const Sard = ({title, showButton}) => (
  <View>
    <Text style={{fontSize: 60}}>{title}</Text>
    {showButton && <Button title="Press me!" />}
  </View>
);

export default function App() {
  return (
    <View>
      <Sard title="Title" showButton={true} />
      <Sard title="Title with button" showButton={false} />
    </View>
  );
}
