// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import gameScreen from "./Screens/GameScreen";
import CorrectScreen from './Screens/CorrectScreen';
import WrongScreen from './Screens/WrongScreen'


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#add8e6'}}>
      <Text style={{padding: 10, fontSize: 42, color: "#fff5ee" }}>
        FIBOGUESS
      </Text>
      <Button
        title="Go to Game"
        onPress={() => navigation.navigate('GameScreen')}
        color='#fff5ee'
      />
    </View>
  );
}
const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={HomeScreen} />
        <Stack.Screen name="GameScreen" component={gameScreen} />
        <Stack.Screen name="CorrectScreen" component={CorrectScreen} />
        <Stack.Screen name="WrongScreen" component={WrongScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;