import React from 'react';
import type {Node} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './src/Screens/DetailsScreen';
import HomeScreen from './src/Screens/HomeScreen';
import TagsScreen from './src/Screens/TagsScreen';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Tags" component={TagsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
