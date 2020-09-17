import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';
import ChooseModeScreen, { mode as gameMode } from './screens/ChooseModeScreen';
import GuessScreen from './screens/GuessScreen';
import { generateRandomBetween } from './Utilities/random';
import * as Font from "expo-font";
import { AppLoading } from 'expo';


const pageName = {
  START: 'start',
  GAME: 'game',
  END: 'end',
  CHOOSEMODE: 'choosemode',
  GUESS: 'guess',
};

// this function will tell the app that which font you want to import
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'), // when you use the relative path, you need to specific ./<path>
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {
  const [page, setPage] = useState(pageName.CHOOSEMODE);
  const [answer, setAnswer] = useState(NaN);
  const [round, setRound] = useState(1);
  const [mode, setMode] = useState(null);

  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => { setDataLoaded(true) }}
        onError={(err) => { console.log(err) }}
      />
    );
  }

  //should not use Ref because you want change the value in a function inside this function  
  // const answer = useRef(NaN) ;
  // const round = useRef(0) ; 

  //this work 
  // answer.current = 1 ; 
  // console.log(answer) ; 

  //this doesn't work 
  // function changeAnswer() {
  //   answer.current =1  ; 
  // }
  // console.log(answer) ; 

  function reset() {
    setRound(1);
    setAnswer(NaN);
    setMode(null);
    setPage(pageName.CHOOSEMODE);
  }

  const gameHandler = (answer) => {
    setPage(pageName.GAME);
    setAnswer(answer);
  };

  const endGameHandler = (round) => {
    console.log(`you use ${round} round to finish`);
    setRound(round);
    setPage(pageName.END);
  }

  const restartHandler = () => {
    console.log('restart ');
    reset();
  }

  const chooseModeHandler = (mode) => {
    setMode(mode);
    setPage(mode === gameMode.COMPUTERGUESS ? pageName.START : pageName.GUESS);
    setAnswer(generateRandomBetween(0, 100, []));
  }

  let content;

  switch (page) {
    case pageName.START:
      content = <StartGameScreen startGameHandler={gameHandler} mode={mode} />;
      break;
    case pageName.GAME:
      content = <GameScreen answer={answer} endGameHandler={endGameHandler} />;
      break;
    case pageName.END:
      content = <EndScreen round={round} answer={answer} restartHandler={restartHandler} />
      break;
    case pageName.CHOOSEMODE:
      content = <ChooseModeScreen chooseModeHandler={chooseModeHandler} />;
      break;
    case pageName.GUESS:
      content = <GuessScreen answer={answer} endGameHandler={endGameHandler} />
    default:
      break;
  }

  return (
    <SafeAreaView style={styles.container}>
        <Header title='guess a number' />
        {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
