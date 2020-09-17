import React from 'react';
import { StyleSheet } from 'react-native';
import Wrapper from './Wrapper' ; 

/**
 * 
 * @param {*} props 
 *      somehitng
 * 
 *      somehing
 * 
 *      something3 
 *      - props.chilren
 *      - props.style 
 * 
 *   
 */
const Row = ({children , ...viewProps}) => {
    return (
        <Wrapper {...viewProps} style={styles.main} childStyles={styles.child} >
            {children}
        </Wrapper>
    ) ; 
};

const styles = StyleSheet.create({
    main : {
        flexDirection: 'row',
        // width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: 0,
        alignItems : 'center'
    },
    child : {
        marginHorizontal  : 10 , 
    }, 
});

export default Row;