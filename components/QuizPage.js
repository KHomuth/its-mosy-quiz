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
  const { index, timerCreation, timerCount } = route.params;

  const [buttonAEnabled, setButtonAEnabled] = React.useState(false);
  const [buttonBEnabled, setButtonBEnabled] = React.useState(false);
  const [buttonCEnabled, setButtonCEnabled] = React.useState(false);
  const [buttonDEnabled, setButtonDEnabled] = React.useState(false);
  const [answerSelectet, setAnswerSelected] = React.useState('');

  const selecting = (value) => {
    if (value == 'a') {
      setButtonAEnabled(false);
      setButtonBEnabled(true);
      setButtonCEnabled(true);
      setButtonDEnabled(true);
      setAnswerSelected('a');
    }
    else if (value == 'b') {
      setButtonAEnabled(true);
      setButtonBEnabled(false);
      setButtonCEnabled(true);
      setButtonDEnabled(true);
      setAnswerSelected('b');
    }
    else if (value == 'c') {
      setButtonAEnabled(true);
      setButtonBEnabled(true);
      setButtonCEnabled(false);
      setButtonDEnabled(true);
      setAnswerSelected('c');
    }
    else if (value == 'd') {
      setButtonAEnabled(true);
      setButtonBEnabled(true);
      setButtonCEnabled(true);
      setButtonDEnabled(false);
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

  const resetStates = () =>
  {
      setButtonAEnabled(false);
      setButtonBEnabled(false);
      setButtonCEnabled(false);
      setButtonDEnabled(false);
      setAnswerSelected('');
      console.log('resetted states');
  }

  return (
    <View style={styles.containerBackground}>
      <View style={styles.container}>
        <Timer
          timeLeft={timerCount}
          timeCreated={timerCreation}
          selectedAnswer={answerSelectet}
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