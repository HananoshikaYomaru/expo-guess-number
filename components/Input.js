import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({style, ...other}) => {
    return (
        <TextInput {...other} style={{ ...inputStyles.main, ...style }}  />
    );
};

const inputStyles = StyleSheet.create({
    main: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius : 10 , 
        width : '100%' , 
        // height : '100%' , 
        textAlign : 'center' ,
    }, 
});

export default Input; 