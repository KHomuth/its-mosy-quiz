import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import QuestionOption from "./QuestionOption";
import Questions from "../Questions.json";
import { useFonts } from "expo-font";

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
              questionIndex={index+1}
              navigation={navigation}
            />
          ))}
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
      position: 'absolute',
      maxWidth: 768,
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontFamily: 'Roboto',
      fontSize: 20,
      color: '#ece6dd',
      margin: 20,
    },
    textCenter: {
      textAlign: 'center',
    },
    countdown: {
      fontFamily: 'Roboto',
      fontSize: 30,
      color: '#ece6dd',
      textAlign: 'center',
      marginBottom: 20,
    },
});