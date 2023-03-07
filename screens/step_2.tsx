import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, Animated } from 'react-native';

import { globalStyles } from '../styles/styles';
import breathing from "../assets/steps/02-breath.json";

export default function Screen2({ navigation }) {

  const scaleValue1 = useRef(new Animated.Value(0.3)).current;
  const scaleValue2 = useRef(new Animated.Value(1)).current;
  const scaleValue3 = useRef(new Animated.Value(0.3)).current;
  const scaleValue4 = useRef(new Animated.Value(1)).current;

  const images = [
    require("../assets/breath/nose_in.jpeg"),
    require("../assets/breath/mouth_out.jpeg"),
    require("../assets/breath/nose_out.jpeg"),
    require("../assets/breath/mouth_in.jpeg"),
    // require("../assets/breath/hold.jpeg"),
  ];

  const [imgText, setImgText] = useState('');
  const [imgBreath, setImgBreath] = useState('');
  const [duration, setDuraction] = useState(0);
  const [stepEnd, setStepEnd] = useState(false);

  const breath_in = Animated.timing(scaleValue1, {
    toValue: 1,
    duration: 4000,
    useNativeDriver: false,
  });

  const breath_out = Animated.timing(scaleValue2, {
    toValue: 0.3,
    duration: 4000,
    useNativeDriver: false,
  });

  const hold = Animated.timing(scaleValue3, {
    toValue: 1,
    duration: 4000,
    useNativeDriver: false,
  });

  let i = 0;

  function setValues() {
    setImgText(breathing[1][i].text);
    setImgBreath(breathing[1][i].breath);
    // setDuraction(breathing[1][i].duraction);
    i++;
  }

  useEffect(() => {

    console.log(breathing[1][0].name);
    setValues()
   
    breath_in.start(({ finished }) => {
      if (finished) {
        setValues();
      }
      hold.start(({ finished }) => {
        if (finished) {
          setValues();        
        }
        breath_out.start(({ finished }) => {
          if (finished) {
            setValues();
          }
          hold.start(({ finished }) => {
            if (finished) {
              i = 0;
              setStepEnd(true);
            }
          });
        });
      });
    });
  }, [scaleValue1, scaleValue2]);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.containerTop}>

        <View style={styles.container}>

          <View style={styles.imageContainer}>
            <Text style={styles.text}>
              {imgText}
            </Text>
            <View style={styles.imageWrapper}>
              {imgBreath === 'nose_in' && (
                <Animated.Image source={images[0]}
                  style={[styles.image, { transform: [{ scale: scaleValue1 }] }]} />
              )}
              {imgBreath === 'mouth_out' && (
                <Animated.Image source={images[1]}
                  style={[styles.image, { transform: [{ scale: scaleValue2 }] }]} />
              )}
              {imgBreath === 'nose_out' && (
                <Animated.Image source={images[2]}
                  style={[styles.image, { transform: [{ scale: scaleValue2 }] }]} />
              )}
              {imgBreath === 'mouth_in' && (
                <Animated.Image source={images[3]}
                  style={[styles.image, { transform: [{ scale: scaleValue1 }] }]} />
              )}
              {/* missing img */}
              {imgBreath === 'hold' && (
                <Animated.Image source={images[4]}
                  style={[styles.image, { transform: [{ scale: scaleValue1 }] }]} />
              )}
            </View>
          </View>

        </View>
      </View>
      <View style={globalStyles.containerBottom}>
        {stepEnd === true && (
          <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Screen3')}>
            <Text style={globalStyles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    alignContent: 'center',
    marginRight: 15,
    marginLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    borderRadius: 400 / 2,
    borderColor: "#c2c0c4",
    backgroundColor: 'rgba(169,175,248,0.1)',
    overflow: "hidden",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 400 / 2,
  },
  text: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: 'rgba(169,175,248,1)',
  },
  quote: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: 'rgba(169,175,248,1)',
  }
})