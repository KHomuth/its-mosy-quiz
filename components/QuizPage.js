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

    const [buttonAEnabled, setButtonAEnabled] = useState(true);
    const [buttonBEnabled, setButtonBEnabled] = useState(true);
    const [buttonCEnabled, setButtonCEnabled] = useState(true);
    const [buttonDEnabled, setButtonDEnabled] = useState(true);


    const selecting = (value) => {
      if (value=='a') {
        setButtonAEnabled(true);
        setButtonBEnabled(false);
        setButtonCEnabled(false);
        setButtonDEnabled(false);
      } 
      else if (value=='b') {
        setButtonAEnabled(false);
        setButtonBEnabled(true);
        setButtonCEnabled(false);
        setButtonDEnabled(false);
      }
      else if (value=='c') {
        setButtonAEnabled(false);
        setButtonBEnabled(false);
        setButtonCEnabled(true);
        setButtonDEnabled(false);
      }
      else if (value=='d') {
        setButtonAEnabled(false);
        setButtonBEnabled(false);
        setButtonCEnabled(false);
        setButtonDEnabled(true);
      };
    }

         

    let answerButtons = [];

    pushToArray(answerButtons);

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
              selected={    
                // else if buttonXEnabled
                item =='a'? buttonAEnabled  
                : item=='b'? buttonBEnabled
                : item=='c'? buttonCEnabled
                : buttonDEnabled
              }                
              onPress={() => selecting(item)} 
            />  //Notlösung: aus QuestionOption alle props für 4 einzelne Buttons hier anlegen/Übernehmen
          ))}
        </View>
      </View>
    );
}

           /*   if (value=='a') {
                ButtonAEnabled:true
              } 
              else if (value=='b') {
                ButtonBEnabled
              }
              else if (value=='c') {
                ButtonCEnabled
              }
              else if (value=='d') {
                ButtonDEnabled
              };*/