import React from 'react';
import { StyleSheet, View } from 'react-native';
import Wrapper from './Wrapper' ; 

const Card = ({children, style , ...other}) => {
    return (
        <Wrapper {...other} style={{...styles.card , ...style}} childStyles={styles.inside}>
            {children}
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    card: {
        // width : '100%' , 
        // height : '100%' ,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black', // shadowColor, shadowOffset and shadowOpacity must be used at the same time in IOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.26,  // this work on IOS
        elevation: 5, // this work on Android
        shadowRadius: 6,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
    },
    inside: {
        marginVertical: 5,
    },
});

export default Card;

