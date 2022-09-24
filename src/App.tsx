import React from 'react';
import {NativeBaseProvider, Box, extendTheme, Button} from 'native-base';
import {useColorScheme} from 'react-native';
import TicTacToe from './features/tic-tac-toe/TicTacToe';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';

const config = {
  useSystemColorMode: true,
  // initialColorMode: 'dark',
};

// extend the theme
const customTheme = extendTheme({config});

/** createNativeStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator.
 * Both of them are React components used for configuring the navigator. The Navigator should contain Screen elements
 * as its children to define the configuration for routes. */
const Stack = createNativeStackNavigator();

const App: () => React.ReactNode = () => {
  console.log('App : init', {colorScheme: useColorScheme()});

  // const isDarkMode = useColorScheme() === 'dark';

  return (
    /** NavigationContainer is a component which manages our navigation tree and contains the navigation state.
     * This component must wrap all navigators structure.  */
    <NavigationContainer>
      <NativeBaseProvider theme={customTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Test Apps'}}
          />
          <Stack.Screen
            name="TicTacToe"
            component={TicTacToe}
            options={{title: 'TicTacToe'}}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
