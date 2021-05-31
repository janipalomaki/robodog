import React from 'react';

import { StyleSheet, ScrollView } from 'react-native';

// React Native Paper
import { Provider as PaperProvider, Card, Title, Text } from 'react-native-paper';


export default function Home ( { navigation }) {

    return(
        
        <ScrollView>
            <PaperProvider>
                <Card
                style={styles.kortti}
                onPress={ () => navigation.navigate("")}
                >
                    <Card.Content>
                        <Title
                        style={styles.otsikko}
                        >Market</Title>
                    </Card.Content>
                    
                </Card>

                <Card
                style={styles.kortti}
                onPress={ () => navigation.navigate("")}
                >
                    <Card.Content>
                        <Title
                        style={styles.otsikko}
                        >Market Sentiment</Title>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://alternative.me/crypto/fear-and-greed-index.png' }} />
                    
                </Card>

                <Card
                style={styles.kortti}
                onPress={ () => navigation.navigate("News")}
                >
                    <Card.Content>
                        <Title
                        style={styles.otsikko}
                        >News</Title>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://image.jpg' }} />
                    
                </Card>
                
                <Text style={styles.attribute}>Copyright 2021 Jani Palomäki. Data from CryptoCompare and Alternative </Text>
            </PaperProvider>
        </ScrollView>

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
        fontSize : 24,
        marginTop : -15,
        padding : 3
    },
    attribute : {
        textAlign : 'center',
        fontSize : 12,

    }
  });
  

  