import * as React from "react";
import { Text, View } from "react-native";
import Questions from "../Questions.json";
import { useFonts } from "expo-font";
import styles from "../assets/styles/Styles";

export default function TextPage({  navigation }) {
    const [loaded] = useFonts({
      Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
      ZenLoop: require('../assets/fonts/Zen_Loop/ZenLoop-Regular.ttf'),
    });
      
    if (!loaded) {
      return null;
    }
 
    return (
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Weiterführende Informationen</Text>
          <Text style={[styles.text, styles.textCenter]} numberOfLines={4}>{Questions.Fragen[0].Zusatztext}</Text>
          <Text style={[styles.text, styles.textCenter]} numberOfLines={4}>{Questions.Fragen[1].Zusatztext}</Text>
          <Text style={[styles.text, styles.textCenter]} numberOfLines={4}>{Questions.Fragen[2].Zusatztext}</Text>
          <Text style={[styles.text, styles.textCenter]} numberOfLines={4}>{Questions.Fragen[3].Zusatztext}</Text>
          <Text style={[styles.text, styles.textCenter]} numberOfLines={4}>{Questions.Fragen[4].Zusatztext}</Text>        
          </View>
      );


}