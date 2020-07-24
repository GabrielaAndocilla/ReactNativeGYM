
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hello1 from './src/FirstConfiguration/Hello1';
import Hello2 from './src/FirstConfiguration/Hello2';
import Hello3M from './src/FirstConfiguration/Hello3M';
import Hello3F from './src/FirstConfiguration/Hello3F';
import Hello4 from './src/FirstConfiguration/Hello4';
import Hello5 from './src/FirstConfiguration/Hello5';
import SignIn from './src/SingInOut/SignIn';
import Main from './src/App/Main';
import BotMenu from './src/App/Navigation/BotMenu';
import youtu from './src/App/youtube';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer
   >
      <Stack.Navigator
         screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Hello1" component={Hello1} />
        <Stack.Screen name="Hello2" component={Hello2} />
        <Stack.Screen name="Hello3M" component={Hello3M} />
        <Stack.Screen name="Hello3F" component={Hello3F} />
        <Stack.Screen name="Hello4" component={Hello4} />
        <Stack.Screen name="Hello5" component={Hello5} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="BotMenu" component={BotMenu} />
        <Stack.Screen name="youtu" component={youtu} />





      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;