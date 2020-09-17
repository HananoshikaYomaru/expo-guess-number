import React from 'react'
import {Text , View , StyleSheet} from 'react-native' ; 
import colors from '../constant/colors'  ;

const NumberContainer = ({style, children, ...other}) => {
    
    return (
        // when spread the object, the value below will override the value above

        <View {...other} style={{ ...styles.numberContainer, ...style}} >
        <Text style={styles.text} >{children}</Text>
        </View>
    ) ; 
} ; 

const styles = StyleSheet.create({
    numberContainer : {
        borderWidth : 2, 
        borderColor : colors.accent , 
        borderRadius : 10 , 
        paddingHorizontal :10 , 
    } ,
    text : { 
        color: colors.accent , 
        fontSize : 30 , 
        fontWeight : 'bold' , 
    } , 
} );


export default NumberContainer ; 