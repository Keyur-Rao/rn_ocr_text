import { Alert, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from '../helpers/Responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../resources/styles/Colors';
import Fonts from '../resources/styles/Fonts';
import TextSize from '../resources/styles/TextUnits';
import ImageView from './ImageView';

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const DateWiseImages = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const openDeletePhotosModal = ()=> {
    setOpenDeleteModal(!openDeleteModal);

    // Alert.alert("Delete", "Yi fldsjf lkdfsd f", [{ text: 'Cancel',}, {text: 'OK'}])
  }

  return (
    <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.date}> July 14, 2022</Text>
          <Pressable onPress={openDeletePhotosModal}>
            <MaterialCommunityIcons name="delete-outline" color={Colors.delete} size={moderateScale(24)}  />
          </Pressable>
        </View> 
        <View style={styles.imgContainer}>
          {
            arr.map((item, index)=> (
                <ImageView key={index} />
            ))
            
          }
        </View>
        <Modal
            visible={openDeleteModal}
            animationType='slide'   
            transparent={true}
            onRequestClose={()=> {
                setOpenDeleteModal(!openDeleteModal);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default DateWiseImages;

const styles = StyleSheet.create({
    container: {
        marginVertical: moderateScale(16),
    },
    heading: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: moderateScale(12),
    },
    date: {
        fontFamily: Fonts.Regular,
        fontSize: TextSize.small,
        fontWeight: '500',
    },
    imgContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: moderateScale(16),
        columnGap: moderateScale(5),
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})