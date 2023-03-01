import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { globalStyles } from '../styles/styles';

export default function Screen3({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.containerTop}>
        <Text style={globalStyles.title}>Screen 3</Text>
      </View>
      <View style={globalStyles.containerBottom}>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('End')}>
          <Text style={globalStyles.buttonText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
