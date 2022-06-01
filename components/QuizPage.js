import * as React from "react";
import { Text, View } from "react-native";
import QuestionOption from "./QuestionOption";
import Questions from "../Questions.json";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";

export default function QuizPage({ route, navigation }) {
    const [loaded] = useFonts({
      Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
      ZenLoop: require('../assets/fonts/Zen_Loop/ZenLoop-Regular.ttf'),
    });
      
    if (!loaded) {
      return null;
    }

    const {index} = route.params;

    const pushToArray = (myArray) => {
      for(const [key, value] of Object.entries(Questions.Fragen[index].Antworten)) {
        myArray.push(key);
      }
    }

    let answerButtons = [];

    pushToArray(answerButtons);

    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          <Text style={[styles.text, styles.textCenter]}>{Questions.Fragen[index].Frage}</Text>
          {answerButtons.map((item, index) => (
            <QuestionOption
              key={index}
              value={item}
              btnNum={index}
              questionIndex={index+1}
              navigation={navigation}
            />
          ))}
        </View>
      </View>
    );
}