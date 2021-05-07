import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MoviesScreen from './MoviesScreen';
import MoviesDetailScreen from './MoviesDetailScreen';

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" component={MoviesScreen} />
      <Stack.Screen name="CoinDetail" component={MoviesDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
