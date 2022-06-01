import * as React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Questions from "../Questions.json";
import { useFonts } from "expo-font";

export default function InfoPage({ navigation, route }) {
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

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  container: {
    top: 85,
    position: 'absolute'
  },
    titleText: {
      fontFamily: 'ZenLoop',
      fontSize: 60,
      color: '#00517A',
      marginLeft: 20, 
    },
    text: {
      fontFamily: 'Roboto',
      fontSize: 20,
      color: '#00517A',
      margin: 20,
    }
});