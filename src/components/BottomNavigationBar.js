import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigationBar = ( navigation ) => (
    
 <Appbar style={styles.bottom}>
   
   <Appbar.Action
    style={styles.icon}
    icon="chart-areaspline"
     onPress={() => console.log("navigate")}
    />
    <Appbar.Action 
    style={styles.icon}
    icon="currency-btc" 
    onPress={() => console.log("navigate")} 
    />
    <Appbar.Action 
    style={styles.icon}
    icon="newspaper" 
    onPress={() => console.log("navigate")} 
    />
    <Appbar.Action
    style={styles.icon}
    icon="reddit"
    onPress={() => console.log("navigate")}
    />

  </Appbar>
 );

export default BottomNavigationBar;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  icon : {
      margin : 26
  }
});
