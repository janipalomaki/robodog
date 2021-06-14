// React Navigation setup
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';

// Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Bottom Tab Navigator
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Stylesheet
import { StyleSheet} from 'react-native';

// Expo fonts
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

// Components
import Home from "./src/components/Home";
import CoinMarket from "./src/components/CoinMarket";
import MarketSentiment from "./src/components/MarketSentiment";
import News from "./src/components/News";
import Reddit from "./src/components/Reddit";
import Details from "./src/components/Details";
import TopNavigationBar from './src/components/TopNavigationBar';
import BottomNavigationBar from './src/components/BottomNavigationBar';


export default function App() {

  // Expo fonts
const [loaded, error] = useFonts({ 
  Roboto_medium : require('./assets/fonts/Roboto/Roboto-Medium.ttf')
});

  return (
    <NavigationContainer>

      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <TopNavigationBar {...props} />,
      }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CoinMarket" component={CoinMarket} />
        <Stack.Screen name="MarketSentiment" component={MarketSentiment} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Reddit" component={Reddit} />
        <Stack.Screen name="Details" component={Details} />
        
      </Stack.Navigator>
      <BottomNavigationBar/> 

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
