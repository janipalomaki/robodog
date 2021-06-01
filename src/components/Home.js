import React from 'react';
import { useState, useEffect } from 'react';

import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';

// React Native Paper
import { Provider as PaperProvider, Card, Title, Text } from 'react-native-paper';


export default function Home ( { navigation }) {

    // Get Alternative API -data 
    const [marketSentimentData, setMarketSentimentData] = useState({
        data : [],
        error : null,
        dataReady : false
    });

    // Get market sentiment from alternative 
    const getMarketSentimentData = async () => {

        try {

            const api_key = "";
            const base_url = "";
            const url = base_url + '?api_key='+ api_key;
            const response = await fetch(url);
            const data = await response.json();

            setData({
                ...data,
                tiedot : data,
                tiedotHaettu : true
            });


        } catch (e) {

            setData({
                ...data,
                virhe : `Palvelimeen ei saatu yhteyttä ${e.message}`,
                tiedotHaettu : true
            });
        }
    }

    useEffect(() => {
        getMarketSentimentData();
    }, []);

    return(
        
        <ScrollView>



            {(marketSentimentData)
            ?
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
                    <Card.Cover source={{ uri: "https://alternative.me/crypto/fear-and-greed-index.png" }} />
                    
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
                    <Card.Cover source={{ uri: "" }} />
                    
                </Card>
                
                <Text style={styles.attribute}>Copyright 2021 Jani Palomäki. Data from CryptoCompare and Alternative </Text>
            </PaperProvider>

            :<ActivityIndicator
            size="large"
            animating={true}
            />
            }
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
  

  