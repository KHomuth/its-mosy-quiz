import * as React from "react";
import { Text, View } from "react-native";
import Questions from "../Questions.json";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";

export default function InfoPage({ route }) {
    const [loaded] = useFonts({
      Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
      ZenLoop: require('../assets/fonts/Zen_Loop/ZenLoop-Regular.ttf'),
    });
      
    if (!loaded) {
      return null;
    }

    const {index, answer} = route.params;

    const evalAnswer = (answer) => {
      let rightAnswer = '';

      if(answer == Questions.Fragen[index].Richtige_antwort) {
        rightAnswer = Questions.Fragen[index].Antworttext;

        return <React.Fragment>
            <Text style={styles.titleText}>Richtige Antwort</Text>
            <Text style={styles.titleText}>{rightAnswer}</Text>
          </React.Fragment>;
      } else {
        return <React.Fragment>
            <Text style={styles.titleText}>Falsche Antwort</Text>
            <Text style={styles.titleText}>{rightAnswer}</Text>
          </React.Fragment>;
      }
    }

    if(answer == Questions.Richtige_antwort) {
      rightAnswer = Questions.Antworttext;
    }
    console.log(answer);

    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            {evalAnswer(answer)}
          </View>
          <Text style={styles.titleText}>Weiterführende Informationen</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {Questions.Fragen[index].Antworttext}
            </Text>
          </View>
        </View>
      </View>
    );
}