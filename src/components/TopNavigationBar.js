import * as React from 'react';

// React Native paper
import { Appbar } from 'react-native-paper';

export default function TopNavigationBar({ navigation, previous }) {
    return (
      <Appbar.Header>
        {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title="CryptoTracker" subtitle={"All you need to know about cryptocurrencies"} />
      </Appbar.Header>
    );
  }