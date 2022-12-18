import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { StackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import SpaceCrafts from './screens/SpaceCrafts';
import DailyPic from './screens/DailyPic';
import StarMap from './screens/StarMap';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StarMap" component={StarMap} />
        <Stack.Screen name="DailyPic" component={DailyPic} />
        <Stack.Screen name="SpaceCrafts" component={SpaceCrafts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
