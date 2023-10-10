import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/LoginPage'
import Home from './src/pages/Home'
import RegisterPage from './src/pages/RegisterPage'
import ForgotPasswordPage from './src/pages/ForgotPasswordPage'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
      <NavigationContainer stat>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen name="LoginPage" component={LoginPage}/>
          <Stack.Screen name="HomePage" component={Home}/>
          <Stack.Screen name="RegisterPage" component={RegisterPage}/>
          <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    
  );
}
