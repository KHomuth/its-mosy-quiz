import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Questions from "../Questions.json";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";
import { initialScore } from "../functions/_score";
import setScore from "../functions/_score";
import Timer from "./Timer";

export default function InfoPage({ navigation, route }) {
    const [loaded] = useFonts({
      Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
      ZenLoop: require('../assets/fonts/Zen_Loop/ZenLoop-Regular.ttf'),
    });
      
    if (!loaded) {
      return null;
    }

    const {index, answer, timerCount, phase} = route.params;
    const rightAnswer = Questions.Fragen[index].Antworttext;

    const evalAnswer = (answer) => {
      let answerState = "";
      if(answer === Questions.Fragen[index].Richtige_antwort) {
        answerState = 'right';
        setScore(initialScore, answerState);
        return (
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Richtige Antwort</Text>
          </View>
        );
      } else if (answer === '') {
        answerState = 'wrong';
        setScore(initialScore, answerState);
        return (
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>Keine Antwort abgegeben</Text>
            </View>
          );
      } else {
        answerState = 'wrong';
        setScore(initialScore, answerState);
        return (
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>Falsche Antwort</Text>
            </View>
          );
      }
    }

    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Timer
              timeLeft={timerCount}
              selectedAnswer={''}
              qPhase={phase}
              qIndex={index+1}
            />
          </View>
          {evalAnswer(answer)}
          <View style={styles.textContainer}> 
            <Text style={styles.text}>
              {rightAnswer}
            </Text>
          </View>
          <TouchableOpacity style={styles.buttonBeenden} onPress={() => navigation.navigate('Score')}>
            <Text style={styles.buttonText}>Beenden</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}