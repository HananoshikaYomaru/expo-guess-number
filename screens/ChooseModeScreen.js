import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Platform } from 'react-native';
import Card from '../components/Card';
import ButtonsRow from '../components/ButtonsRow';
import Colors from '../constant/colors';
import MainButton from "../components/MainButton";
import Wrapper from '../components/Wrapper';
import { config } from '../constant/config';

const mode = {
    COMPUTERGUESS: 1,
    YOUGUESS: 2,
}

const ChooseModeScreen = (props) => {
    return (
        <View style={styles.main} >
            <Wrapper style={styles.cardWrapper} childStyles={styles.wrapperChild}>
                <Text>{Platform.OS === 'android' ? 'android' : 'ios'}</Text>
                <Card>
                    <Text style={styles.text}>Choose Mode</Text>
                    <ButtonsRow>
                        <MainButton onPress={() => props.chooseModeHandler(mode.YOUGUESS)}>You Guess</MainButton>
                        <MainButton onPress={() => props.chooseModeHandler(mode.COMPUTERGUESS)}>{`computer \nGuess`}</MainButton>
                    </ButtonsRow>
                </Card>
            </Wrapper>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    button: {
        margin: 0,
    },
    text: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
    },
    cardWrapper: {
        margin: 10,
        borderColor: 'red',
        borderWidth: config.showBorder ? 3 : 0,
    } , 
    wrapperChild : {
        marginBottom : 5 , 
    }
});

export default ChooseModeScreen;
export { mode }; 