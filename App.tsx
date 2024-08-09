/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView} from 'react-native';
// import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
// import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const App = () => (
  <PaperProvider
    settings={{
      // eslint-disable-next-line react/no-unstable-nested-components
      icon: props => <IonIcon {...props} />,
    }}>
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen name="Cesar Romero" /> */}
      {/* <CounterScreen /> */}
      <CounterM3Screen />
    </SafeAreaView>
  </PaperProvider>
);
