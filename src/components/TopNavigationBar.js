import * as React from 'react';

// React Native paper
import { Appbar } from 'react-native-paper';

import { StyleSheet } from 'react-native';

export default function TopNavigationBar({ navigation, previous }) {
    return (
      <Appbar.Header
      style={styles.header}
      >
        {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title="RoboDog" subtitle={"Cryptocurrency market tracker"} />
        <Appbar.Action 
        style={styles.icon}
        icon={require('../img/cryptodog.png')} 
        onPress={() => {}} />
        
      </Appbar.Header>
    );
  }

  const styles = StyleSheet.create({
    header : {
      backgroundColor : "#4267B2"

    },
    icon: {
     marginRight : 30
    },
  });
  