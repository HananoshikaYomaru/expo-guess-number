import React from 'react'
import { View , StyleSheet} from 'react-native';

// if you do destructure in the argument list, vsc will show them when you use it 
const Wrapper = ({ childStyles, children, ...viewProps }) => {

    // console.log(children) ; 
    if(children == null ) return <View></View> ; 
    
    if(!Array.isArray(children))
        return (
             <View {...viewProps} style={{...styles.main, ...viewProps.style, ...childStyles}}>
             {children}
             </View>  
        ) ;

    return ( 
        <View {...viewProps} style={{...styles.main, ...viewProps.style }}>
            {children.map((child, index) =>
                <View key={index} style={{...childStyles}}>
                    {child}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create ({
    main : {
        alignItems : 'center' , 
        justifyContent : 'center' , 
    }, 
}) ;

export default Wrapper; 
