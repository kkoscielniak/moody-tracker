import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import EntryScreen from './screens/Entry/EntryScreen';
import HomeScreen from './screens/Home/HomeScreen';
import RootStackParams from './types/RootStackParams';

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Moody Tracker' }}
        />
        <Stack.Screen name="Entry" component={EntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
