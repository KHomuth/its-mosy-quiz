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
    
    const sendTdData = (question, answer) => {
      const data = { 
        "question": question,
        "answer": answer  
      };

      fetch('https://04cf-2a02-3030-802-d077-21ba-d6a-cdfa-ec09.eu.ngrok.io/api/v1.0/answers', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .catch((error) => {
        console.error('Error', error);
      });
    }

    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          <Text style={[styles.text, styles.textCenter]}>{Questions.Fragen[index].Frage}</Text>
          {answerButtons.map((item, itemIndex) => (
            <QuestionOption
              key={itemIndex}
              value={item}
              btnNum={itemIndex}
              questionIndex={itemIndex+1}
              navigation={navigation}
              onPress={() => {navigation.push('Infos', {index: (index), answer: item}); sendTdData(index, item);}}
            />
          ))}
        </View>
      </View>
    );
}