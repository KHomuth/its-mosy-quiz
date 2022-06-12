import * as React from "react";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";

export default function ScorePage({ route }) {
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
              test
            </Text>
          </View>
        </View>
      </View>
    );
}