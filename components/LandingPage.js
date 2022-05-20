import * as React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { useFonts } from "expo-font";


export default function LandingPage({ navigation }) {
    
  const [loaded] = useFonts({
      Roboto: require('../assets/fonts/Roboto/Roboto-Black.ttf'),
      ZenLoop: require('../assets/fonts/Zen_Loop/ZenLoop-Regular.ttf'),
    });
    
    if (!loaded) {
      return null;
    }

    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Life Below Water</Text>
          <Text style={styles.text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. </Text>
          <TouchableHighlight activeOpacity={1} underlayColor="#a6dde4" style={styles.button} onPress={() => navigation.navigate('Quiz')}>
            <Text style={styles.buttonText}>Quiz starten!</Text>
          </TouchableHighlight>
          <TouchableHighlight activeOpacity={1} underlayColor="#a6dde4" style={styles.button} onPress={() => navigation.navigate('Infos')}>
            <Text style={styles.buttonText}>Mehr Infos?</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    containerBackground: {
      flex: 1,
      backgroundColor: '#265e85',
      alignItems: 'center',
    },
    container: {
      top: 85,
      position: 'absolute'
    },
    titleText: {
      fontFamily: 'ZenLoop',
      fontSize: 60,
      color: '#6eb5a9',
      marginLeft: 20, 
    },
    text: {
      fontFamily: 'Roboto',
      fontSize: 20,
      color: '#ece6dd',
      margin: 20,
    },
    button: {
      backgroundColor: '#6eb5a9',
      marginBottom: 10,
      marginLeft: 20, 
      height: 30,
      width: 200,
      borderWidth: 1,
      borderColor: '#6eb5a9',
      borderRadius: 10,
    },
    buttonText: {
      fontFamily: 'Roboto',
      fontSize: 17,
      color: '#ece6dd',
      textAlign: 'center',
      marginTop: 2,
    }
});