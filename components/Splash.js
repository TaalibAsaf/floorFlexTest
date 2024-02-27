import React, { useEffect, useRef } from 'react';
import { ImageBackground, StyleSheet, View, Animated,Image,Text ,Dimensions } from 'react-native';
import Button3D from '../components/Text3d';
const Splash = ({ navigation  }) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const heightWidth = 150;
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    ).start();

    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <ImageBackground
    source={require("../assets/splash_screen.png")}
    style={styles.background}
  >
     <View style = {{
      marginBottom:-30,
      justifyContent: 'center',
      alignItems:"center",
      borderRadius:100,
    // position: 'absolute', top: 50, left: 50, 
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 7,
    }}>
    <Image style={{width:heightWidth,height:heightWidth}} source={require('../assets/ic_icon_launcher.png') }/>
   
</View>

    <View style={styles.container}>
        <Image source={require('../assets/floor_flex_logo.png')} style={{flexWrap:'wrap',marginBottom:10}}/>
      {/* <Animated.Image source={require('../assets/floor_flex_logo.png')} style={{ transform: [{ rotate: spin }] }}/> */}
      <View style={styles.subContainer}>
      <View >
        <View style={styles.box}>
          <Text style={[styles.text, styles.firstLine]}>
            Discover the Perfect Floor Plan for Your Home
          </Text>
        </View>
      </View>
    </View>
    <Button3D label={"Get Planning"} onPress={console.log("hello")}/>
   
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  subContainer: {
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 9,
    borderRadius: 5,
    marginBottom:32,
  },
  
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
   
  },

  container: {
    // flex: 1,
    marginTop:170,
    alignItems: 'center',
    justifyContent:'space-between',
    
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: "100%"
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Splash;
