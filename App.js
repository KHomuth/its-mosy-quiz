import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';
import InfoPage from './components/InfoPage';
import ScorePage from './components/ScorePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Quiz'
          component={QuizPage}
          options={{headerShown: false}}
          initialParams={{index: 0}}
        />
        <Stack.Screen
          name='Infos'
          component={InfoPage}
          options={{
            headerStyle: {
              backgroundColor: '#F2F2F2'
            },
            headerTintColor: '#00517A',
            headerShadowVisible: false,
            headerBackTitleVisible: false,
          }}
          initialParams={{index: 0}}
        />  
        <Stack.Screen
          name='Score'
          component={ScorePage}
          options={{headerShown: false}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}