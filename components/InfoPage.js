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
              {Questions.Fragen[index].Zusatztext}
            </Text>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    backgroundColor: '#265e85',
    alignItems: 'center',
    height: '100%'
  },
  container: {
    top: 85,
    position: 'absolute',
    backgroundColor: '#265e85',
  },
    titleText: {
      fontFamily: 'ZenLoop',
      fontSize: 60,
      color: '#6eb5a9',
      marginLeft: 20, 
    },
    text: {
      fontFamily: 'Roboto',
      fontSize: 20,
      color: '#ece6dd',
      margin: 20,
    },
    button: {
      backgroundColor: '#6eb5a9',
      marginBottom: 10,
      marginLeft: 20, 
      height: 30,
      width: 200,
      borderWidth: 1,
      borderColor: '#6eb5a9',
      borderRadius: 10,
    },
    buttonText: {
      fontFamily: 'Roboto',
      fontSize: 17,
      color: '#ece6dd',
      textAlign: 'center',
      marginTop: 2,
    },
});