import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

export default function QuestionOption (props) {
    const [loaded] = useFonts({
      Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
      ZenLoop: require('../assets/fonts/Zen_Loop/ZenLoop-Regular.ttf'),
    });
      
    if (!loaded) {
      return null;
    }

    const addBtnStyle = (number) => {
      if(number == 0) {
        return {
          //grün
          backgroundColor: '#226822'
        }
      } 
      else if (number == 1) {
        return {
          //rot
          backgroundColor: '#B00000'
        }
      }
      else if (number == 2) {
        return {
          //blau
          backgroundColor: '#00517A'
        }
      }
      else {
        return {
          //gelb
          backgroundColor: '#E6AF00'
        }
      }
    }
        
    return (
          <TouchableOpacity style={[styles.answers, addBtnStyle(props.btnNum)]} onPress={props.onPress}>
            <Text style={styles.answerText}>{props.value.toUpperCase()}</Text>
          </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    answers: {
      fontFamily: 'Roboto',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20,
      marginLeft: 20, 
      marginRight: 20,
      width: 300,
      borderRadius: 10,
    },
    answerText: {
      color: '#ece6dd',
      fontFamily: 'Roboto',
      fontSize: 24,
      textAlign: 'center',
      margin: 20
    }
});