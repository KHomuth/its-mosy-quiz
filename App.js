import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';
import InfoPage from './components/InfoPage';
import TextPage from './components/TextPage';

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
          initialParams={{index: 0, answer: ''}}
        />  
        <Stack.Screen
          name='Text'
          component={TextPage}
          options={{
            headerStyle: {
              backgroundColor: '#F2F2F2'
            },
            headerTintColor: '#00517A',
            headerShadowVisible: false,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}