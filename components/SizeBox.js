import React from 'react'
import {View, StyleSheet} from 'react-native' 

const SizeBox = ({color, width, height}) => {
    
    // console.log(color) ; 
    const styles = StyleSheet.create({
        main : {
            backgroundColor : color ?? null , 
            width : width , 
            height : height ,
        } , 
    }) ; 

    // console.log(styles.main.color) ; 

    return (
        <View style={styles.main}></View>
    )
}

export default SizeBox ; 