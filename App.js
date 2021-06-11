// React Navigation setup
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Stylesheet
import { StyleSheet} from 'react-native';

// Components
import Home from "./src/components/Home";
import CoinMarket from "./src/components/CoinMarket";
import MarketSentiment from "./src/components/MarketSentiment";
import News from "./src/components/News";
import Reddit from "./src/components/Reddit";
import Details from "./src/components/Details";
import Footer from "./src/components/Footer";

const Stack = createStackNavigator();

import { Appbar } from 'react-native-paper';

// Appbar:ia varten
function CustomNavigationBar({ navigation, previous }) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="CRYPTO-INFO" subtitle={"All you need to know about cryptocurrencies"} />
    </Appbar.Header>
  );
}


export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CoinMarket" component={CoinMarket} />
        <Stack.Screen name="MarketSentiment" component={MarketSentiment} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Reddit" component={Reddit} />
        <Stack.Screen name="Details" component={Details} />
        
      </Stack.Navigator>


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
