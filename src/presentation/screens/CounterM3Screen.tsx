/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      {/* <Icon name="accessibility-outline" size={25} /> */}
      <FAB
        onPress={() => {
          setCount(count + 1);
        }}
        onLongPress={() => {
          setCount(0);
        }}
        style={globalStyles.fab}
        icon="add-outline"
        // icon={() => <Icon name="accessibility-outline" size={25} />}
      />
    </View>
  );
};
