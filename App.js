import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MoviesStack from './src/components/Movies/MoviesStack';

const App = () => {
  return (
    <NavigationContainer>
      <MoviesStack />
    </NavigationContainer>
  );
};

export default App;
