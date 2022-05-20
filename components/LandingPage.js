import * as React from "react";
import reactDom from "react-dom";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default function LandingPage({ navigation }) {
    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Life Below Water</Text>
          <Text style={styles.text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. </Text>
          <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Quiz')}>
            <Text style={styles.buttonText}>Quiz starten!</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Infos')}>
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
      fontFamily: 'Zen Loop',
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
      color: '#ece6dd',
      textAlign: 'center',
    }
});