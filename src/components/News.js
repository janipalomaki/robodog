import React from 'react';

import { StyleSheet } from 'react-native';

// Webview
import { WebView } from 'react-native-webview';

export default function News ({ route }) {

const {url} = route.params;


    return(

        <WebView source={{ uri: url }} style={styles.view} />
    )
}

const styles = StyleSheet.create({
    view: {
      marginTop : 0
    }
  });
  