import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import colors from '../constant/colors' ; 


const Header = ({titleStyle, style, title, ...viewProps}) => {
    return (
        <View {...viewProps} style={{...styles.header, ...style}}>
            <Text style={{...styles.headerTitle, ...titleStyle}}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        header: {
            width: '100%',
            height: Dimensions.get('window').height * 0.07,
            backgroundColor: colors.primary,
            alignItems: 'center',
            justifyContent : 'flex-end' , 
        },
        headerTitle: {
            color: 'black',
            fontSize: 18,
            marginBottom : 10, 
            fontWeight : 'bold' , 
        },
    }
);

export default Header; 