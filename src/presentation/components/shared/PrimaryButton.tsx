/* eslint-disable react/react-in-jsx-scope */
import {Pressable, Text, Platform, StyleSheet} from 'react-native';
interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}
export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Pressable
      onPress={() => {
        onPress && onPress();
      }}
      onLongPress={() => {
        onLongPress && onLongPress();
      }}
      style={style.button}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      style={({pressed}) => [style.button, pressed && style.buttonPress]}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          color: Platform.OS === 'android' ? 'white' : '#4746AB',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : '#white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    color: 'white',
  },
  buttonPress: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'blue',
  },
});
