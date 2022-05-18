import * as React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function InfoPage({ navigation }) {
    return (
      <View style={styles.containerBackground}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Weiterführende Informationen</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
        12.000 sed diam nonumy eirmod tempor invidunt ipsum. Lnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.  
        </Text>
        <Pressable onPress={() => navigation.navigate('xy')}>
          <Text style={styles.button}>weiterlesen</Text>
        </Pressable>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
        12.000 sed diam nonumy eirmod tempor invidunt ipsum. Lnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.  
        </Text>
        <Pressable onPress={() => navigation.navigate('xy')}>
          <Text style={styles.button}>weiterlesen</Text>
        </Pressable>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    backgroundColor: '#265e85',
    alignItems: 'center',
  },
  container: {
    top: 85,
    position: 'absolute'
  },
    titleText: {
      fontFamily: 'Zen Loop',
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
      color: '#ece6dd',
      textAlign: 'center',
      marginBottom: 10,
      marginLeft: 20, 
      height: 30,
      width: 200,
      borderWidth: 1,
      borderColor: '#6eb5a9',
      borderRadius: 10,
    }
});