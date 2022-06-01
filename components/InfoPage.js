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

    const {index} = route.params;

    return (
      <View style={styles.containerBackground}>
        <View style={styles.container}>
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