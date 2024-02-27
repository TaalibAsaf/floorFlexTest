import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button3D = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
     <View style={styles.Container}></View>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    // zIndex: 30,
    marginTop:40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Button background color
    borderRadius: 2,
    paddingVertical: 18,
    paddingHorizontal: 60,
  },
  Container:{
    position:'absolute',
    top:56,
    right:10,

    paddingVertical: 26,
    paddingHorizontal: 110,
    borderWidth:2,
    borderColor:'white',
  },
  buttonText: {
    color: '#000000', // Text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  // buttonOutline: {
  //   position: 'absolute',
  //   color: 'transparent',
  //   zIndex: -1,
  //   textOutlineWidth: 2, // Width of the outline
  //   textOutlineColor: '#000', // Color of the outline
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: -2, // Move shadow slightly to the left
  //     height: 2, // Move shadow slightly to the bottom
  //   },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 4,
  // },
});


export default Button3D;
