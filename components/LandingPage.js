import * as React from "react";
import { StyleSheet, Text, View, Button, Linking, Pressable } from "react-native";

export default function LandingPage({ navigation }) {
    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          <Text style={[styles.titleText, styles.fontColorWhite]}>Life under Water</Text>
          <Pressable onPress={() => navigation.navigate('Quiz')}>
            <Text style={styles.fontColorWhite}>Quiz starten!</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Infos')}>
            <Text style={styles.fontColorWhite}>Mehr Infos?</Text>
          </Pressable>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    containerBackground: {
      flex: 1,
      backgroundColor: '#003ca0',
      alignItems: 'center',
    },
    container: {
      top: 85,
      position: 'absolute'
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 28
    },
    fontColorWhite: {
      color: '#ffffff'
    }
});