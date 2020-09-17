import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Dimensions } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import Cracker from '../assets/images/008-Cracker.svg';
import Image from '../components/MyImage';
import Wrapper from '../components/Wrapper';

const EndScreen = (props) => {
    return (

        <View style={{ ...styles.main, ...props.style }} >
            <ScrollView style={styles.scrollView} >
                <Wrapper childStyles={styles.wrapper}>
                    <Card style={styles.card}>
                        <Text style={styles.text} >end game</Text>
                        <NumberContainer children={props.answer} />
                        <Cracker {...thisProps.cracker} />
                        <Image source={require('../assets/favicon.png')} />
                        {/* <SvgUri {...thisProps.svg}/> */}
                        <Text>you use {props.round} round to finish the game</Text>
                        <Button title="restart" onPress={props.restartHandler} ></Button>
                    </Card>
                </Wrapper>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignSelf: 'stretch',
        alignContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        alignSelf: 'center',
        borderColor : 'yellow' , 
        borderWidth : 0 , 
    },
    scrollView : {
        padding : 0, 
        borderColor : 'blue' , 
        borderWidth : 3 , 
    } , 
    wrapper : {
        margin  : 10 , 
        padding : 0 , 
        borderColor : 'red' , 
        borderWidth : 3 , 
    }
});

const thisProps = {
    cracker: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
    },
};

export default EndScreen; 