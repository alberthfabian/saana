import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen from './Screen';
import MoviesDetailScreen from './DetailScreen';
import SignUp from '../SignUp';
import SignIn from '../SignIn';

const Stack = createStackNavigator();

const MoviesStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Screen" component={Screen} />
      <Stack.Screen name="MovieDetail" component={MoviesDetailScreen} />
    </Stack.Navigator>
  );
};

export default MoviesStack;
