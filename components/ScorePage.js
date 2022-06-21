import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";
import * as ScoreHandler from "../functions/_score";

export default function ScorePage({ navigation }) {
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
          <Text style={styles.titleText}>SCORE</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Du hast {ScoreHandler.playedQuestions} Fragen gespielt und davon
              {"\n"} {ScoreHandler.initialScore} richtig beantwortet.
            </Text>
          </View>
          <TouchableOpacity style={styles.buttonBeenden} onPress={() =>  {navigation.navigate('Home'); ScoreHandler.resetScore();}}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}