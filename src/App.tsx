import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import EntryScreen from './screens/Entry/EntryScreen';
import HomeScreen from './screens/Home/HomeScreen';
import { store } from './store/store';
import RootStackParams from './types/RootStackParams';

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Moody Tracker' }}
          />
          <Stack.Screen
            name="Entry"
            component={EntryScreen}
            options={{
              title: 'New Moodie',
              headerBackTitle: 'Back',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
