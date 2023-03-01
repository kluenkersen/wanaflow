import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { globalStyles } from '../styles/styles';

export default function Screen2({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.containerTop}>
        <Text style={globalStyles.title}>Screen 2</Text>
      </View>
      <View style={globalStyles.containerBottom}>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Screen3')}>
          <Text style={globalStyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}