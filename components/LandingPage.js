import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function LandingPage({ navigation }) {
    return (
        <View style={styles.container}>
          <Text style={styles.titleText}>Life under Water</Text>
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