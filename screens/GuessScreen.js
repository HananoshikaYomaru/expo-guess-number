import React, { useState , useEffect} from 'react'
import { Dimensions, Platform, View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Button, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Image from '../components/MyImage';
import Wrapper from '../components/Wrapper';
import SizeBox from '../components/SizeBox';
import * as ScreenOrientation from 'expo-screen-orientation';// import {Card, Input, Image, Wrapper, SizeBox} from '../components/components' ;

const GuessScreen = (props) => {

    const { answer } = props;
    const [input, setInput] = useState('');
    const [guess, setGuess] = useState(null);
    const [pastGuesses, setPastGuesses] = useState([]);
    const [textInputWidth , setTextInputWidth ] = useState (50)  ;

    useEffect(() => {
        async function updateLayout() {
            const temp = await ScreenOrientation.getOrientationAsync(); 
            if(temp === ScreenOrientation.Orientation.PORTRAIT_UP || temp === ScreenOrientation.Orientation.PORTRAIT_DOWN){
                setTextInputWidth(50) ; 
            }
            else {
                setTextInputWidth(100) ; 
            }
        }

        Dimensions.addEventListener('change' , updateLayout) ; 

        return () => {
            Dimensions.removeEventListener('change' , updateLayout) ; 
        }
    }) ; 
    
    
    

    function onChangeHandler(text) {
        setInput(text);
    }

    function resetInput() {
        setInput('');
    }

    function onPressHandler() {
        console.log(answer);
        const temp = parseInt(input);
        if (!(temp >= 0 && temp <= 99)) {
            Alert.alert(
                'invalid number',
                "the value should be between 0 to 99",
                [{ style: 'destructive', onPress: resetInput }]
            );
            return;
        }

        let lastAnswer = pastGuesses[0];
        let wrongDirection = (answer > lastAnswer && temp <= lastAnswer) || (answer < lastAnswer && temp >= lastAnswer);
        if (wrongDirection) {
            Alert.alert(
                'Look at the hint',
                'the hint point to the opposite direction',
                [{ style: 'cancel', onPress: resetInput }]
            )
            return;
        }

        if (temp === answer) {
            props.endGameHandler(pastGuesses.length);
        }

        setGuess(temp);
        setPastGuesses(currentPastGuesses => [temp, ...currentPastGuesses]);
        setInput('');
    }

    let hint;

    // console.log(guess) ; 
    if (!(guess == answer || guess == null)) {
        console.log(pastGuesses);
        hint = (
            <Card>
                <Text>{guess < answer ? 'higher' : 'lower'}</Text>
            </Card>
        );
    }

    let guessCard = (
        <Card>
            <Text style={styles.title}>Guess a number</Text>
            <Image
                fadeDuration={5000}
                source={{ uri: 'https://content.instructables.com/ORIG/FGE/F6F0/K1NVATVK/FGEF6F0K1NVATVK.jpg' }}
            />
            <Input
                style={{...styles.textInput, width: textInputWidth}}
                blurOnSubmit
                autoCorrect={false}
                keyboardType='number-pad'
                maxLength={3}
                onChangeText={onChangeHandler}
                value={input}
            />
            <Button title='confirm' onPress={onPressHandler} />
        </Card>
    );

    let passGuessesList = pastGuesses.map((pastGuess, index) => (
        <Card key={index} style={{ padding: 10 }}>
            <Text>{pastGuess}</Text>
        </Card>
    ));

    return (
        <View style={styles.main} >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.scrollView}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <SizeBox height={20} width={20}  />
                            <Wrapper childStyles={styles.wrapperChild}>
                                {guessCard}
                                {hint}
                                <Text style={styles.pastGuessTitle}>Past Guesses</Text>
                                {passGuessesList}
                            </Wrapper>
                            <SizeBox height={20} width={20}  />
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textInput: {
        width: 50,
    },
    scrollView: {
        width: '100%',
    },
    wrapperChild: {
        marginTop: 10,
        width: '80%'
    },
    pastGuessTitle : {
        fontSize : 30 , 
        fontWeight : 'bold' , 
        textAlign : 'center'
    }
})

export default GuessScreen;  