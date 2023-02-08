import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';

import cleansing from './assets/steps/01-cleansing.json';
import breathing from './assets/steps/02-breath.json';
import quotes from './assets/steps/03-quotes.json';

export default function App() {
  const [step, setStep] = useState(0);
  const [crystalOpacity, setCrystalOpacity] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [headerText, setHeaderText] = useState();
  const [quote, setQuote] = useState();
  const [breathingSteps, setBreathingSteps] = useState([]);
  const [quoteAutor, setQuoteAutor] = useState();

  function getRandomNumber(maximum) {
    const min = 1;
    const rand = parseInt(min + Math.random() * (maximum - min));
    return rand;
  }

  async function handleButtonPress() {
    setQuote(undefined);
    setQuoteAutor(undefined);
    setHeaderText(undefined);
    setBreathingSteps([]);
    setStep(step + 1);
    setCrystalOpacity(crystalOpacity + 0.1);
    setIsLoading(true);
    console.log(step);
    if (step == 0) {
      setQuote(cleansing[getRandomNumber(80)]);
    }
    if (step == 1) {
      const breath = breathing[getRandomNumber(3)]
      console.log(breath);
      setHeaderText(Object.keys(breath));
      setBreathingSteps(breath[Object.keys(breath)]);
      console.log(breath[Object.keys(breath)]);
    }
    if (step == 2) {
      const randomNumber = getRandomNumber(67);
      const splitted = quotes[randomNumber].split('.');
      setQuote(quotes[randomNumber].slice(0, quotes[randomNumber].length - (splitted[splitted.length - 1]).length));
      setQuoteAutor(splitted[splitted.length - 1]);
    }

  };

  useEffect(() => {
    let interval = null;
    // set opacity
    if (isLoading) {
      interval = setInterval(() => {
        setCrystalOpacity(crystalOpacity + 0.1);
      }, 1500);
      // set timer for loading step
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isLoading, crystalOpacity])



  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.headerText}>{headerText}</Text>
        <Text style={styles.quote}>{quote}</Text>
        {breathingSteps.length > 0 &&
          breathingSteps.map((item, index) => (
            <Text style={styles.quote}>{index + 1}. {item}</Text>
          ))
        }
        
        <Text style={styles.quoteAutor}>{quoteAutor}</Text>
      </View>
      <View style={styles.viewIcon}>

        <Image style={{ position: 'relative', width: '100%', height: '100%', resizeMode: 'contain', opacity: crystalOpacity }} source={require('./assets/icon.png')} />
        <Image style={{ position: 'absolute', width: '100%', height: '100%', resizeMode: 'contain' }} source={require('./assets/icon_colorless.png')} />
        {isLoading ? (<ActivityIndicator style={{ position: 'absolute', width: '100%', height: '80%' }} size='small' color='#0000ff'></ActivityIndicator>) : (<View />)}

        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
          <Text style={styles.buttonText}>Push me</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.viewBottom}>
      </View>
    </View>
  );
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  viewText: {
    flex: 1,
    height: window.height * 0.45,
    justifyContent: 'center',
    marginRight: 15,
    marginLeft: 15,
  },
  quote: {
    textAlign: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  breathingText: {
    textAlign: 'center',
  },
  quoteAutor: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
  },
  viewIcon: {
    height: window.height * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBottom: {
    height: window.height * 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    marginTop: -40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});
