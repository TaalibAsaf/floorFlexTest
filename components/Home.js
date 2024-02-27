// HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Button3D from './Button3D'; // Assuming you've already created this component

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Floor Flex</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Enter your details here</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* <Button3D label="Press Me" onPress={() => console.log('Button pressed')} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#000',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
  },
  buttonContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default Home;
