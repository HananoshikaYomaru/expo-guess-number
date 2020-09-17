import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import Card from '../components/Card';
import colors from "../constant/colors";
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import ButtonsRow from '../components/ButtonsRow';
import Wrapper from '../components/Wrapper';

const StartGameScreen = (props) => {
    const [inputText, setInputText] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectNumber] = useState(NaN);

    function inputOnChangeHandler(newInput) {
        setInputText(newInput.replace(/[^0-9]/g, ''));
    }

    function reset() {
        setConfirmed(false);
        setInputText('');
    }

    function confirmOnPressHandler() {
        const temp = parseInt(inputText);
        if (!(temp >= 0 && temp <= 99)) {
            Alert.alert(
                'invalid number',
                "the value should be between 0 to 99",
                [{ style: 'destructive', onPress: reset }]
            );
            return;
        }
        setConfirmed(true);
        setSelectNumber(temp);
        setInputText('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card>
                <Text>You selected</Text>
                <NumberContainer >{selectedNumber}</NumberContainer>
                <Button color={colors.primary} title='Start Game' onPress={() => props.startGameHandler(selectedNumber)} />
            </Card>
        );
    }

    let inputCard = (
        <Card style={styles.inputCard} >
            <Text style={styles.cardTitle}>select a number</Text>
            <Input
                style={styles.textInput}
                blurOnSubmit
                autoCorrect={false}
                keyboardType='number-pad'
                maxLength={3}
                onChangeText={inputOnChangeHandler}
                value={inputText}
            />
            <ButtonsRow>
                <Button color={colors.accent} title='reset' onPress={reset} />
                <Button color={colors.primary} disabled={false} title='confirm' onPress={confirmOnPressHandler} />
            </ButtonsRow>
        </Card>
    );

    return (
        <View style={styles.startGameScreen}>
            <ScrollView>
                <KeyboardAvoidingView behavior={'position'}>
                    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }} >
                        <Wrapper childStyles={styles.wrapperChild}>
                            <Text style={styles.title}>Start a new Game</Text>
                            {inputCard}
                            {confirmedOutput}
                        </Wrapper>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        startGameScreen: {
            flex: 1,
            justifyContent: 'flex-start',
            width: '100%',
        },
        title: {
            fontSize: 30,
            fontWeight: 'bold',
            marginVertical: 0,
        },
        inputCard: {
            width: 300,
            maxWidth: '80%',
            alignItems: 'center',
        },
        textInput: {
            textAlign: 'center',
            width: 50,
        },
        cardTitle: {
            fontSize: 20,
        },
        wrapperChild: {
            marginVertical: 10,
        },
    }
);

export default StartGameScreen; 