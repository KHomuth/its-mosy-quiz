import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";
import getTdData from "../functions/_getTdData";

export default function LandingPage({ navigation }) {
    
    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
        ZenLoop: require('../assets/fonts/Zen_Loop/ZenLoop-Regular.ttf'),
    });
      
    if (!loaded) {
      return null;
    }

    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Life Below Water</Text>
          <Text style={[styles.text, styles.textCenter]}>Herzlich Willkommen bei unserem Quiz. Hier kannst du dein Wissen rund um das Thema Ozeane testen und spannende Fakten erfahren.</Text>
          <TouchableOpacity style={styles.button} onPress={() => getTdData()}>
            <Text style={styles.buttonText}>Quiz starten!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Text')}>
            <Text style={styles.buttonText}>Mehr Infos?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}