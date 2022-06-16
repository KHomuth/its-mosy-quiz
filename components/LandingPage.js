import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";

export default function LandingPage({ navigation }) {
    
    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
        ZenLoop: require('../assets/fonts/Zen_Loop/ZenLoop-Regular.ttf'),
    });
      
    if (!loaded) {
      return null;
    }

    //Make API Call to get question, phase and time
    async function getTdData() {
      try {
        const response = await fetch('https://02a4-46-114-171-211.eu.ngrok.io/api/v1.0/question_and_phase'); //IP needs to be replaced with own local Server-URl!
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        
        const data = await response.json();

        if (data.phase == 1) {
          navigation.push('Quiz', {
            index: data.question-1,
          });
        } else if (data.phase == 2) {
          navigation.push('Infos', {
            index: data.question-1,
          });
        }
      }
      catch(error) {
        console.error(`Could not get Data: ${error}`);
      }
    }    

    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Life Below Water</Text>
          <Text style={[styles.text, styles.textCenter]}>Herzlich Willkommen bei unserem Quiz. Hier kannst du dein Wissen rund um das Thema Ozeane testen und spannende Fakten erfahren.</Text>
          <TouchableOpacity style={styles.button} onPress={() => getTdData()}>
            <Text style={styles.buttonText}>Quiz starten!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Infos')}>
            <Text style={styles.buttonText}>Mehr Infos?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}