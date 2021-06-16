import React from 'react';

import { StyleSheet } from 'react-native';

// Webview
import { WebView } from 'react-native-webview';

export default function Market () {

//console.log(url);

    return(

        <WebView source={{ uri: "https://coinmarketcap.com/" }} style={styles.view} />
        
    )
}

const styles = StyleSheet.create({
    view: {
      marginTop : 0
    }
  });
  