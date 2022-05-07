import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Life under Water</Text>
      <StatusBar style="auto" />
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
    color: '#ffffff'
  }
});
