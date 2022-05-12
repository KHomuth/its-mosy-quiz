import * as React from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";

export default function LandingPage({ navigation }) {
  

    return (
        <View style={styles.container}>
          <Text style={styles.titleText}>Life under Water</Text>
          <Button title="Quiz starten!" color="lightblue" onPress={() => {
              Linking.openURL('https://de.wikipedia.org/wiki/Quiz');
            }}/>
          <Button title="Mehr Infos?" color="lightblue" onPress={() => {
              Linking.openURL('https://de.wikipedia.org/wiki/Ozean');
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003ca0',
      alignItems: 'center',
      
      
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 28,
      top: 85,
      color: '#ffffff',
      position: 'absolute'
    }
});