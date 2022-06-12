import * as React from "react";
import { Text, View } from "react-native";
import Questions from "../Questions.json";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";
import {score, setScore} from "../functions/_score";

export default function InfoPage({ route }) {
    const [loaded] = useFonts({
      Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
      ZenLoop: require('../assets/fonts/Zen_Loop/ZenLoop-Regular.ttf'),
    });
      
    if (!loaded) {
      return null;
    }

    const {index, answer} = route.params;
    const rightAnswer = Questions.Fragen[index].Antworttext;


    const evalAnswer = (answer) => {
      let answerState = "";
      if(answer === Questions.Fragen[index].Richtige_antwort) {
        answerState = 'right';
        setScore(score, evalAnswer);
        return (
          <View style={styles.textContainer}>
            <Text style={styles.text}>Richtige Antwort</Text>
          </View>
        );
      } else {
        answerState = 'wrong';
        console.log(answerState)  
        return (
            <View style={styles.textContainer}>
              <Text style={styles.text}>Falsche Antwort</Text>
            </View>
          );
      }
    }

    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          {evalAnswer(answer)}
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Weitere Infos</Text>  
            <Text style={styles.text}>
              {rightAnswer}
            </Text>
          </View>
        </View>
      </View>
    );
}