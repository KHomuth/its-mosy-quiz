import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";
import { initialScore, resetScore } from "../functions/_score";

export default function ScorePage({ navigation }) {
    const [loaded] = useFonts({
      Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
      ZenLoop: require('../assets/fonts/Zen_Loop/ZenLoop-Regular.ttf'),
    });
      
    if (!loaded) {
      return null;
    }


    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
          <Text style={styles.titleText}>HIGHSCORE</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Richtige Antworten: {"\n"} {"\n"} {initialScore}
            </Text>
          </View>
          <TouchableOpacity style={styles.button} /*onPress={() => getTdData()}>*/ onPress={() =>  navigation.navigate('Home') & resetScore(initialScore)}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}