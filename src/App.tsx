import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import DataEntry from './components/DataEntry/DataEntry';
import styles from './styles';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <DataEntry />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
