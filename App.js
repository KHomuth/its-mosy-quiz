import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';
import InfoPage from './components/InfoPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={LandingPage}
        />
        <Stack.Screen
          name='Quiz'
          component={QuizPage}
        />
        <Stack.Screen
          name='Infos'
          component={InfoPage}
        />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}