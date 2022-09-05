import React from 'react';
import {NativeBaseProvider, Box, extendTheme, Button} from 'native-base';
import {useColorScheme} from 'react-native';
import TicTacToe from './features/tic-tac-toe/TicTacToe';

const config = {
  useSystemColorMode: true,
  // initialColorMode: 'dark',
};

// extend the theme
const customTheme = extendTheme({config});

const App: () => React.ReactNode = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeBaseProvider theme={customTheme}>
      {/* <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        bgColor={isDarkMode ? 'coolGray.800' : 'warmGray.50'}
        safeArea>
        <Button
          // variant="outline"
          colorScheme="success"
          onPress={() => console.log('hello world')}>
          Click Me
        </Button>
      </Box> */}

      <TicTacToe isDarkMode={isDarkMode} />
    </NativeBaseProvider>
  );
};

export default App;
