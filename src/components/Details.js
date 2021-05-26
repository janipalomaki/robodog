import React, { useEffect, useState } from 'react';

import { StyleSheet, ScrollView, Button } from 'react-native';

// React Native Paper
import { Provider as PaperProvider, Card, Title, Paragraph } from 'react-native-paper';
import { ActivityIndicator, Text } from 'react-native-paper';

// Webview
import { WebView } from 'react-native-webview';


export default function Details ({ route, navigation }) {

    const {url} = route.params;

    
console.log(url);

    return(

        <WebView source={{ uri: url }} style={{ marginTop: 20 }} />
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    kortti : {
        padding : 3,
        margin : 5,
        marginTop : 10,
    },
    otsikko : {
        textAlign : 'center',
        fontSize : 18,
        marginTop : -15,
        padding : 3
    },
    lataus : {
        marginTop : 30
    }
  });
  