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
    const sendTdData = (question, answer) => {
      const data = { 
        question: question,
        answer: answer  
      };

      fetch('http://192.168.2.103:9980/api/v1.0/answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
        
    return (
          <TouchableOpacity style={styles.answers}>
            <Text style={styles.answerText}>{props.value.toUpperCase()}</Text>
          </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    answers: {
      backgroundColor: '#a6dde4',
      color: '#265e85',
      fontFamily: 'Roboto',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20,
      marginLeft: 20, 
      marginRight: 20,
      width: 300,
      borderWidth: 1,
      borderColor: '#a6dde4',
      borderRadius: 10,
    },
    answerText: {
      color: '#265e85',
      fontFamily: 'Roboto',
      fontSize: 24,
      textAlign: 'center',
    }
});