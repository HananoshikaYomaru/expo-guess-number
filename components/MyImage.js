import React from 'react'
import { View, Image, StyleSheet , Dimensions} from 'react-native';

const MyImage = ({style, source, ...imageProps } ) => {

    return (
        <View style={{...styles.imageContainer , ...style}}>
            <Image {...imageProps} source={source} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    image : {
        width : '100%' , 
        height : '100%' ,
        resizeMode : 'stretch' 
    } , 
    imageContainer: {
        width : 100  , 
        height : 100 , 
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
    },
}) ; 

export default MyImage ; 