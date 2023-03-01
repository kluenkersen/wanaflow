import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { globalStyles } from '../styles/styles';


export default function EndScreen() {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.containerTop}>
        <Text style={globalStyles.title}>Congratulations!</Text>
        <Text style={globalStyles.subtitle}>You have completed the app flow.</Text>
      </View>
      <View style={globalStyles.containerBottom}></View>
    </View>
  );
}
