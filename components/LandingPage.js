import * as React from "react";
import reactDom from "react-dom";
import { StyleSheet, Text, View, Button, Linking, Pressable } from "react-native";

export default function LandingPage({ navigation }) {
    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Life Below Water</Text>
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
      backgroundColor: '#000080',
      alignItems: 'center',
    },
    container: {
      top: 85,
      position: 'absolute'
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 28,
      color: 'beige',
    },
    fontColorWhite: {
      color: '#ffffff'
    },
    button: {
      backgroundColor: 'turquoise',
      color: 'beige',
      textAlign: 'center',
      ali:'center',
      margin: 10, 
      height: 30,
      borderWidth: 1,
      borderColor: '#00868b',
      borderRadius: 20,
    }
});