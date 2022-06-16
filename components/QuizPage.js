import * as React from "react";
import { Text, View,TouchableOpacity } from "react-native";
import QuestionOption from "./QuestionOption";
import Timer from "./Timer";
import Questions from "../Questions.json";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";

export default function QuizPage({ route, navigation }) {
  const { index } = route.params;
  const [buttonAEnabled, setButtonAEnabled] = React.useState(false);
  const [buttonBEnabled, setButtonBEnabled] = React.useState(false);
  const [buttonCEnabled, setButtonCEnabled] = React.useState(false);
  const [buttonDEnabled, setButtonDEnabled] = React.useState(false);

  const selecting = (value) => {
    if (value == 'a') {
      setButtonAEnabled(false);
      setButtonBEnabled(true);
      setButtonCEnabled(true);
      setButtonDEnabled(true);
    }
    else if (value == 'b') {
      setButtonAEnabled(true);
      setButtonBEnabled(false);
      setButtonCEnabled(true);
      setButtonDEnabled(true);
    }
    else if (value == 'c') {
      setButtonAEnabled(true);
      setButtonBEnabled(true);
      setButtonCEnabled(false);
      setButtonDEnabled(true);
    }
    else if (value == 'd') {
      setButtonAEnabled(true);
      setButtonBEnabled(true);
      setButtonCEnabled(true);
      setButtonDEnabled(false);
    };
  }
  const [loaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
    ZenLoop: require('../assets/fonts/Zen_Loop/ZenLoop-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const pushToArray = (myArray) => {
    for (const [key, value] of Object.entries(Questions.Fragen[index].Antworten)) {
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

    fetch('https://02a4-46-114-171-211.eu.ngrok.io/api/v1.0/answers', {
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
            questionIndex={itemIndex + 1}
            navigation={navigation}
            selected={
              item == 'a' ? buttonAEnabled
                : item == 'b' ? buttonBEnabled
                  : item == 'c' ? buttonCEnabled
                    : buttonDEnabled
            }
            onPress={() => {selecting(item); sendTdData(index, item);}}
          />  //navigation.push('Infos', {index: (index), answer: item})
        ))}
         <TouchableOpacity style={styles.buttonBeenden} onPress={() => navigation.navigate('Score')}>
            <Text style={styles.buttonText}>Beenden</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}