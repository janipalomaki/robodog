// React Navigation setup
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';

// Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Bottom Navigation
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';

// Stylesheet
import { StyleSheet} from 'react-native';

// Expo fonts
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

// Components
import Home from "./src/components/Home";
import HomeNew from "./src/components/HomeNew";

import Market from "./src/components/Market";
import Sentiment from "./src/components/Sentiment";
import LatestNews from "./src/components/LatestNews";
import Reddit from "./src/components/Reddit";
import News from "./src/components/News";
import TopNavigationBar from './src/components/TopNavigationBar';

// Theme
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#121212',
  },
};

// Stacks
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen
        options={{headerShown: false}} 
        name="Home" component={Home} />
      </HomeStack.Navigator>
    );
}
const MarketStack = createStackNavigator();
function MarketStackScreen() {
  return (
      <MarketStack.Navigator>
        <MarketStack.Screen 
        options={{headerShown: false}} 
        name="Market" component={Market} />
      </MarketStack.Navigator>
    );
}
const SentimentStack = createStackNavigator();
function SentimentStackScreen() {
  return (
      <SentimentStack.Navigator>
        <SentimentStack.Screen 
        options={{headerShown: false}} 
        name="Sentiment" component={Sentiment} />
      </SentimentStack.Navigator>
    );
}
const NewsStack = createStackNavigator();
function NewsStackScreen() {
  return (
      <NewsStack.Navigator>
        <NewsStack.Screen
        options={{headerShown: false}}  
        name="Latest News" component={LatestNews} />
        <NewsStack.Screen 
        options={{headerShown: false}} 
        name="News" component={News} />
      </NewsStack.Navigator>
    );
}
const RedditStack = createStackNavigator();
function RedditStackScreen() {
  return (
      <RedditStack.Navigator>
        <RedditStack.Screen 
        options={{headerShown: false}} 
        name="Reddit" component={Reddit} />
      </RedditStack.Navigator>
    );
}

export default function App() {

  // Expo fonts
const [loaded, error] = useFonts({ 
  Roboto_medium : require('./assets/fonts/Roboto/Roboto-Medium.ttf')
});

  return (

      <NavigationContainer theme={MyTheme}>
      <TopNavigationBar />
        <Tab.Navigator
              initialRouteName="Home"
              screenOptions={({ route }) => ({
                header: (props) => <TopNavigationBar {...props} />,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'home-outline'
                      : 'home-outline';
                  } else if (route.name === 'Market') {
                    iconName = focused ? 'bar-chart-outline' : 'bar-chart-outline';
                  } else if (route.name === 'Sentiment') {
                    iconName = focused ? 'skull-outline' : 'skull-outline';
                  } else if (route.name === 'News') {
                    iconName = focused ? 'newspaper-outline' : 'newspaper-outline';
                  } else if (route.name === 'Reddit') {
                    iconName = focused ? 'logo-reddit' : 'logo-reddit';
                  } 

                  // You can return any component that you like here!
                  return <Ionicons 
                  style={styles.tabs}
                  name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen name="Home" component={HomeStackScreen} />
              <Tab.Screen name="Market" component={MarketStackScreen} />
              <Tab.Screen name="Sentiment" component={SentimentStackScreen} />
              <Tab.Screen name="News" component={NewsStackScreen} />
              <Tab.Screen name="Reddit" component={RedditStackScreen} />
        
        </Tab.Navigator>
    </NavigationContainer>    
    
  );
}

const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
