import * as React from "react";
import { Text, View,TouchableOpacity } from "react-native";
import QuestionOption from "./QuestionOption";
import Timer from "./Timer";
import Questions from "../Questions.json";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";
import sendTdData from "../functions/_sendTdData";
import { increasePlayed } from "../functions/_score";

export default function QuizPage({ route, navigation }) {
  const { index, timerCount, initialBtnState, phase } = route.params;

  const [buttonAEnabled, setButtonAEnabled] = React.useState(initialBtnState);
  const [buttonBEnabled, setButtonBEnabled] = React.useState(initialBtnState);
  const [buttonCEnabled, setButtonCEnabled] = React.useState(initialBtnState);
  const [buttonDEnabled, setButtonDEnabled] = React.useState(initialBtnState);
  const [answerSelectet, setAnswerSelected] = React.useState('');

  const selecting = (value) => {
    if (value == 'a') {
      setButtonBEnabled(true);
      setButtonCEnabled(true);
      setButtonDEnabled(true);
      setAnswerSelected('a');
    }
    else if (value == 'b') {
      setButtonAEnabled(true);
      setButtonCEnabled(true);
      setButtonDEnabled(true);
      setAnswerSelected('b');
    }
    else if (value == 'c') {
      setButtonAEnabled(true);
      setButtonBEnabled(true);
      setButtonDEnabled(true);
      setAnswerSelected('c');
    }
    else if (value == 'd') {
      setButtonAEnabled(true);
      setButtonBEnabled(true);
      setButtonCEnabled(true);
      setAnswerSelected('d');
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

  return (
    <View style={styles.containerBackground}>
      <View style={styles.container}>
        <Timer
          timeLeft={timerCount}
          selectedAnswer={answerSelectet}
          qPhase={phase}
          qIndex={index+1}
        />
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
            onPress={() => {selecting(item); sendTdData(index, item); increasePlayed();}}
          />
        ))}
         <TouchableOpacity style={styles.buttonBeenden} onPress={() => navigation.navigate('Score')}>
            <Text style={styles.buttonText}>Beenden</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}