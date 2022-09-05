import React from 'react';
import {
  Box,
  IconButton,
  FlatList,
  MinusIcon,
  CloseIcon,
  CircleIcon,
  Text,
  Button,
} from 'native-base';

let itemArray: {value: boolean | string; index: number}[] = new Array(9)
  .fill('')
  .map((v: any, index: number) => ({
    value: 'empty',
    index,
  }));

const TicTacToe = (props: any) => {
  const [tttState, setTTTState] = React.useState({
    isCross: false,
    winMessage: '',
  });

  console.log({isCross: tttState.isCross, winMessage: tttState.winMessage});

  const drawItem = (itemNumber: number) => {
    if (tttState.winMessage !== '') return;

    if (itemArray[itemNumber].value === 'empty') {
      itemArray[itemNumber].value = tttState.isCross;
      setTTTState(previousState => ({
        ...previousState,
        isCross: !itemArray[itemNumber].value,
      }));

      // console.log('drawItem', {itemNumber, value: itemArray[itemNumber].value});
    }

    winGame();
  };

  const chooseItemIcon = (itemNumber: number) => {
    if (itemArray[itemNumber].value !== 'empty') {
      return !!itemArray[itemNumber].value ? (
        <CloseIcon key={itemNumber} />
      ) : (
        <CircleIcon key={itemNumber} />
      );
    }

    return <MinusIcon key={itemNumber} />;
  };
  const chooseItemColor = (itemNumber: number) => {
    // console.log('chooseItemColor', {
    //   itemNumber,
    //   value: itemArray[itemNumber].value,
    // });

    if (itemArray[itemNumber].value !== 'empty') {
      return !!itemArray[itemNumber].value ? 'aqua' : 'orange';
    }

    return '#2F5D62';
  };

  const resetGame = () => {
    itemArray = new Array(9).fill('').map((v: any, index: number) => ({
      value: 'empty',
      index,
    }));

    setTTTState(previousState => ({
      ...previousState,
      winMessage: '',
    }));
  };
  const winGame = () => {
    checkCondition(0, 1, 2);
    checkCondition(3, 4, 5);
    checkCondition(6, 7, 8);
    checkCondition(0, 3, 6);
    checkCondition(1, 4, 7);
    checkCondition(2, 5, 8);
    checkCondition(0, 4, 8);
    checkCondition(2, 4, 6);
  };

  const checkCondition = (...args: number[]) => {
    // console.log({args});
    if (tttState.winMessage !== '') return;

    if (
      itemArray[args[0]].value !== 'empty' &&
      itemArray[args[1]].value !== 'empty' &&
      itemArray[args[2]].value !== 'empty' &&
      itemArray[args[0]].value === itemArray[args[1]].value &&
      itemArray[args[1]].value === itemArray[args[2]].value
    ) {
      // console.log({
      //   arg0_value: itemArray[args[0]],
      //   arg1_value: itemArray[args[1]],
      //   arg2_value: itemArray[args[2]],
      // });
      setTTTState(previousState => ({
        ...previousState,
        winMessage: (!!itemArray[args[0]].value ? 'Cross' : 'Circle').concat(
          ' wins',
        ),
      }));
    }
  };

  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      bgColor={props.isDarkMode ? 'coolGray.800' : 'warmGray.50'}
      safeArea>
      <FlatList
        marginTop="200px"
        numColumns={3}
        data={itemArray}
        renderItem={({item}) => (
          <IconButton
            key={item.index}
            m={'2px'}
            variant="solid"
            p="9"
            style={{backgroundColor: chooseItemColor(item.index)}}
            icon={chooseItemIcon(item.index)}
            onPress={() => drawItem(item.index)}
          />
        )}
      />
      <Text fontSize="2xl">{tttState.winMessage}</Text>
      {tttState.winMessage !== '' && (
        <Button onPress={() => resetGame()}>Reset Game</Button>
      )}
    </Box>
  );
};

export default TicTacToe;
