import * as React from "react";
import reactDom from "react-dom";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function LandingPage({ navigation }) {
    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Life Below Water</Text>
          <Text style={styles.text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. </Text>
          <Pressable onPress={() => navigation.navigate('Quiz')}>
            <Text style={styles.button}>Quiz starten!</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Infos')}>
            <Text style={styles.button}>Mehr Infos?</Text>
          </Pressable>
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
      color: '#ece6dd',
      textAlign: 'center',
      marginBottom: 10,
      marginLeft: 20, 
      height: 30,
      width: 200,
      borderWidth: 1,
      borderColor: '#6eb5a9',
      borderRadius: 10,
    }
});