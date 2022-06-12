import * as React from "react";
import { Text, View } from "react-native";
import Questions from "../Questions.json";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";

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
      if(answer === Questions.Fragen[index].Richtige_antwort) {
        return (
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Richtige Antwort</Text>
          </View>
        );
      } else if (answer === '') {
        return;
      } else {
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
          {evalAnswer(answer)}
          <View style={styles.textContainer}> 
            <Text style={styles.text}>
              {rightAnswer}
            </Text>
          </View>
        </View>
      </View>
    );
}