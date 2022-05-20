import * as React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default function InfoPage({ navigation }) {
    return (
      <View style={styles.containerBackground}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Weiterführende Informationen</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
        12.000 sed diam nonumy eirmod tempor invidunt ipsum. Lnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.  
        </Text>
        <TouchableHighlight activeOpacity={1} underlayColor="#a6dde4" style={styles.button} onPress={() => navigation.navigate('xy')}>
          <Text style={styles.buttonText}>weiterlesen</Text>
        </TouchableHighlight>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
        12.000 sed diam nonumy eirmod tempor invidunt ipsum. Lnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.  
        </Text>
        <TouchableHighlight activeOpacity={1} underlayColor="#a6dde4" style={styles.button} onPress={() => navigation.navigate('xy')}>
          <Text style={styles.buttonText}>weiterlesen</Text>
        </TouchableHighlight>
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
    }
});