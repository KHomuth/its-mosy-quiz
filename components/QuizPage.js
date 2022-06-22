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
  const { index, timerCount, initialBtnState, phase, initialActiveState } = route.params;

  /*initialActiveState wird in App.js initial auf true gesetzt und hier mit der Auswahl auf false 
  für alle Buttons die nicht geclickt sind in der QuestionOption.js wird dann der Style nur auf
  Buttons gesetzt die Disabled true und Active false haben, also auf alle bis auf den geclickten. 
  Der sollte disabled sein, aber seinen alten style behalten. in der _getTdData.js wird dann in der 
  navigation.push initialActiveState wieder für alle auf True zurückgesetzt, das muss passieren damit nach
  ablauf des Timers wieder alles zurückgesetzt ist*/

  const [buttonAEnabled, setButtonAEnabled] = React.useState(initialBtnState);
  const [buttonBEnabled, setButtonBEnabled] = React.useState(initialBtnState);
  const [buttonCEnabled, setButtonCEnabled] = React.useState(initialBtnState);
  const [buttonDEnabled, setButtonDEnabled] = React.useState(initialBtnState);
  const [buttonAActive, setButtonAActive] = React.useState(initialActiveState);
  const [buttonBActive, setButtonBActive] = React.useState(initialActiveState);
  const [buttonCActive, setButtonCActive] = React.useState(initialActiveState);
  const [buttonDActive, setButtonDActive] = React.useState(initialActiveState);
  const [answerSelectet, setAnswerSelected] = React.useState('');
  const [timerInterrupt, setTimerInterrupt] = React.useState(false);

  const selecting = (value) => {
    if (value == 'a') {
      setButtonAEnabled(true);
      setButtonBEnabled(true);
      setButtonCEnabled(true);
      setButtonDEnabled(true);
      setAnswerSelected('a');
      setButtonBActive(false);
      setButtonCActive(false);
      setButtonDActive(false);
    }
    else if (value == 'b') {
      setButtonAEnabled(true);
      setButtonBEnabled(true);
      setButtonCEnabled(true);
      setButtonDEnabled(true);
      setAnswerSelected('b');
      setButtonAActive(false);
      setButtonCActive(false);
      setButtonDActive(false);
    }
    else if (value == 'c') {
      setButtonAEnabled(true);
      setButtonBEnabled(true);
      setButtonCEnabled(true);
      setButtonDEnabled(true);
      setAnswerSelected('c');
      setButtonAActive(false);
      setButtonBActive(false);
      setButtonDActive(false);
    }
    else if (value == 'd') {
      setButtonAEnabled(true);
      setButtonBEnabled(true);
      setButtonCEnabled(true);
      setButtonDEnabled(true);
      setAnswerSelected('d');
      setButtonAActive(false);
      setButtonBActive(false);
      setButtonCActive(false);
    };
  }

  const interruptButton = () => {
    setTimerInterrupt(true);
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
          interrupt={timerInterrupt}
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
            isActive={
              item == 'a' ? buttonAActive
                : item == 'b' ? buttonBActive
                  : item == 'c' ? buttonCActive
                    : buttonDActive
            }
            onPress={() => {selecting(item); sendTdData(index, item); increasePlayed();}}
          />
        ))}
         <TouchableOpacity style={styles.buttonBeenden} onPress={() => {navigation.navigate('Score'); interruptButton();}}>
            <Text style={styles.buttonText}>Beenden</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}