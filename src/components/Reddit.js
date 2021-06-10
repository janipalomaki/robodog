import React from 'react';

import { StyleSheet } from 'react-native';

// Webview
import { WebView } from 'react-native-webview';

export default function Reddit () {

//console.log(url);

    return(

        <WebView source={{ uri: "https://www.reddit.com/r/SatoshiStreetBets" }} style={styles.view} />
    )
}

const styles = StyleSheet.create({
    view: {
      marginTop : 0
    }
  });
  