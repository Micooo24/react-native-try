
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Link} from 'expo-router';


export default function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <Link href="/profile"style= {{color:'blue'}} >Go to Profile</Link>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })
  
