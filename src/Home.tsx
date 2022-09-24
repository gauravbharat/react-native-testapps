import {Box} from 'native-base';
import React from 'react';
import {Text, useColorScheme} from 'react-native';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      bgColor={isDarkMode ? 'coolGray.800' : 'warmGray.50'}
      safeArea>
      <Text style={{color: isDarkMode ? 'white' : 'black'}}>Home page</Text>
    </Box>
  );
};

export default Home;
