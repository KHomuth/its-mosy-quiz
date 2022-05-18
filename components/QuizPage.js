import * as React from "react";
import reactDom from "react-dom";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function LandingPage({ navigation }) {
    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
        <Text style={styles.countdown}>12:23</Text>
          <Pressable onPress={() => navigation.navigate('A')}>
            <Text style={styles.answers}>Quiz starten!</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('B')}>
            <Text style={styles.answers}>Mehr Infos?</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('C')}>
            <Text style={styles.answers}>Mehr Infos?</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('D')}>
            <Text style={styles.answers}>Mehr Infos?</Text>
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
    answers: {
      backgroundColor: '#a6dde4',
      color: '#265e85',
      fontFamily: 'Roboto',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20,
      marginLeft: 20, 
      marginRight: 20,
      height: 100,
      width: 300,
      borderWidth: 1,
      borderColor: '#a6dde4',
      borderRadius: 10,
    },
    countdown: {
      fontFamily: 'Roboto',
      fontSize: 30,
      color: '#ece6dd',
      textAlign: 'center',
      marginBottom: 20,
    },
});