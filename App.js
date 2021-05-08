import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MoviesStack from './src/components/Reminder/Stack';
import {ServerProvider} from './src/components/Context';

const App = () => {
  
  return (
    <ServerProvider>
      <NavigationContainer>
        <MoviesStack />
      </NavigationContainer> 
    </ServerProvider>
  );
};

export default App;
