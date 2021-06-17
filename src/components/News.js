import React from 'react';

import { StyleSheet } from 'react-native';

// Webview
import { WebView } from 'react-native-webview';

export default function News ({ route, navigation }) {

    const {url} = route.params;

    
//console.log(url);

    return(

        <WebView source={{ uri: url }} style={styles.view} />
    )
}

const styles = StyleSheet.create({
    view: {
      marginTop : 0
    }
  });
  