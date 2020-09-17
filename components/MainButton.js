import React from 'react'
import {View , Text, StyleSheet , TouchableOpacity}  from 'react-native'  
import colors from '../constant/colors' ; 


const MainButton = ({style, children, onPress, ...other}) => {
    
    //console.log('style is ' + style) ; 

    return (
        <TouchableOpacity onPress={onPress} {...other}> 
            <View style={{...styles.main , ...style}}> 
                <Text style = {styles.text} >{children}</Text>
            </View>
        </TouchableOpacity>
    ) ; 
} 

const styles = StyleSheet.create ({
    main : {
        backgroundColor : colors.primary , 
        paddingVertical : 10 , 
        paddingHorizontal : 5  ,
        alignItems : 'center'  ,
        borderRadius : 10 , 
        overflow : 'hidden' , 
    }, 
    text : {
        color : 'white' , 
        fontFamily : 'open-sans-bold' , 
        textAlign : 'center' , 
        flexDirection : 'column', 
    }, 
}) ;

export default MainButton ; 