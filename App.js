import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';
import InfoPage from './components/InfoPage';
import TextPage from './components/TextPage';
import ScorePage from './components/ScorePage';
import { navigationRef } from './components/RootNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name='Home'
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Quiz'
          component={QuizPage}
          options={{headerShown: false}}
          initialParams={{index: 0, timerCount: 0, initialBtnState: false, phase: 0, initialActiveState: true}}
        />
        <Stack.Screen
          name='Infos'
          component={InfoPage}
          options={{headerShown: false}}
          initialParams={{index: 0, answer: '', timerCount: 0, phase: 0}}
        />  
        <Stack.Screen
          name='Score'
          component={ScorePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Weiterführende Informationen'
          component={TextPage}
          options={{
            headerStyle: {
              backgroundColor: '#F2F2F2'
            },
            headerTintColor: '#00517A'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}