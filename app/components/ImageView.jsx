import { Image, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { moderateScale } from '../helpers/Responsive'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../resources/styles/Colors';
import { width } from '../resources/styles/Responsive';

const ImageView = () => {
  return (
    <View style={styles.imageView}>
        <Image style={styles.img} source={{ uri : 'https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww'}} alt='image' />
        <Pressable style={styles.close} onPress={() => console.log('Unselect this image')}>
            <MaterialCommunityIcons name={'close'} color={Colors.white} size={moderateScale(10)} style={styles.closeIcon} />
        </Pressable>
    </View>
  )
}

export default ImageView

const styles = StyleSheet.create({
    imageView: {
        position: 'relative'
    },
    img: {
        width: (width - ((moderateScale(12) * 2) + (moderateScale(8) * 3)))  / 3 , 
        height: moderateScale(105),
        borderRadius: moderateScale(8),
    },
    close: {
        width: moderateScale(20),
        height: moderateScale(20),
        borderColor: Colors.white,
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: Colors.secondary,
        borderWidth: 1,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    closeIcon: {
    }
})