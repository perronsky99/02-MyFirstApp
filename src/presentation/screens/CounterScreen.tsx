import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {PrimaryButton} from '../components/shared';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={style.container}>
      <Text style={style.title}>{count}</Text>
      {/* <PrimaryButton
        label={'Incrementar'}
        onPress={() => {
          setCount(count + 1);
        }}
        onLongPress={() => {
          setCount(0);
        }}
      /> */}
      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        onLongPress={() => {
          setCount(0);
        }}
        mode="contained">
        Incrementar
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
