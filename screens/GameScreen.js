import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { generateRandomBetween } from '../Utilities/random';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import ButtonsRow from '../components/ButtonsRow';
import {nullException} from '../Utilities/Exception' ; 
import MainButton from '../components/MainButton';
import { AntDesign } from '@expo/vector-icons' ; 

const hints = {
    LOWER: 'lower',
    HIGHER: 'higher',
}

const checkProps = (props) => { 

    // this doesn't work 
    // props.answer ?? (() => {throw new Error ('something') }) ; 


    //below are the same, you can turn a block of statements into an expression by wrapping it with a function
    props.answer ?? nullException('props.answer is null') ; 

    if(props.answer == null)
        throw new Error('props.answer is null') ;   

} ; 

/**
 * 
 * @param {*} props 
 * check if necessary props exist
 * 
 */
const GameScreen = (props) => {
    
    checkProps(props) ; 

    //every time the game screen refresh the function will be called without changing the current guess 
    //console.log(0) ; 
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(0, 100, [11,12,13]));
    // console.log(1) ; 
    console.log(currentGuess) ; 

    const [round, setRound] = useState (1) ;


    // note that minGuess is a object but not a value 
    // the minGuess.current is the value 
    let minGuess = useRef(0);
    let maxGuess = useRef(100);

    const wrongHintAlert = () => {
        Alert.alert("don't lie!", "the hint is wrong", [{ text: 'okay', style: 'cancel' }])
    };


    const nextGuess = () => generateRandomBetween(minGuess.current, maxGuess.current, []) ; 

    const nextGuessHandler = (hint) => {
        switch (hint) {
            case hints.LOWER:
                if (props.answer < currentGuess) {
                    maxGuess.current = currentGuess;
                }
                else {
                    wrongHintAlert();
                    return;
                }
                break;
            case hints.HIGHER:
                if (props.answer > currentGuess)
                    minGuess.current = currentGuess + 1;
                else {
                    wrongHintAlert();
                    return;
                }
                break;
            default:
                throw new Error('no such hint');
        }
        setCurrentGuess(nextGuess()); // the minGuess and maxGuess is still the new value
        setRound(round + 1 ) ; 
    }

    if(currentGuess === props.answer) {
        props.endGameHandler(round) ; 
    }

    // if you can the value in the next Guess Handler, that is a function scope change, 
    // beyond the function will not work
    // if you need something beyond function scope, use state  
    // console.log(minGuess.current) ; //0
    // console.log(maxGuess.current) ; //99 

    let hintCard = (
        <Card style={styles.hintCard}>
                <Text style={styles.text} >Opponents's Guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <ButtonsRow>
                    <MainButton onPress={() => nextGuessHandler(hints.LOWER)} >
                        {hints.LOWER}
                        <AntDesign name="caretdown" size={24} color="black" />      
                                      </MainButton>
                    <MainButton onPress={() => nextGuessHandler(hints.HIGHER)} >
                    {hints.HIGHER}
                    <AntDesign name="caretup" size={24} color="black" />
                    </MainButton>
                </ButtonsRow>
            </Card>
    )

    return (
        <View style={styles.main} >
            {hintCard}
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1, // without this the header will not stay at the top 
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    hintCard : { 
        marginVertical : 20 , 
    }, 
});

export default GameScreen; 