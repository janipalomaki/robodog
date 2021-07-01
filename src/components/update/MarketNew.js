import React, { useEffect, useState } from 'react';

import { StyleSheet } from 'react-native';

// React Native Paper
import { ActivityIndicator, Text } from 'react-native-paper';

// Native base
import { Container, Content, List, ListItem, Left, Body, Right } from 'native-base'


export default function MarketNew ({ navigation }) {

    // Data
    const [marketData, setMarketData] = useState({
        data : [],
        error : null,
        dataReady: false
    });

    const getMarketData = async () => {

        try {

            const api_key = "";
            const base_url = "https://api.alternative.me/";
            const url = base_url + 'v2/ticker/?start=5';
            const response = await fetch(url);
            const data = await response.json();

            setMarketData({
                ...data,
                error : null,
                data : data.data,
                dataReady : true
            });


        } catch (e) {

            setMarketData({
                ...data,
                error : `Cannot connect to the server ${e.message}`,
                dataReady : true
            });
        }
    }

    useEffect(() => {
        getMarketData();
    }, []); //category


    //--- Create cryptocurrencies list ---
    const currencies = [];
    for (const property in marketData.data) {
        currencies.push({
            currency : marketData.data[property]
        })
    }
    //-----

    console.log(currencies);


    return(

       <Container>
           <Content>
               <List>
                    {(marketData.dataReady)
                    ? currencies.map((currency, idx) => {

                    return (
                            <ListItem avatar
                            onPress={ () => navigation.navigate("",
                            { // Viedään tiedot --> "Details"
                                //url : uutinen.url
                            }
                            )}
                            key={idx}
                            >
                                <Left>
                                    <Text>{currency.currency.rank}.</Text>
                                </Left>
                                <Body>
                                    <Text>{currency.currency.symbol}</Text>
                                    <Text>{currency.currency.name}</Text>
                                </Body>
                                <Right>
                                    <Text>{currency.currency.quotes.USD.price}</Text>
                                    <Text note>{(currency.currency.quotes.USD.percent_change_24h).toFixed(2)} %</Text>
                                </Right>
        
                            </ListItem>
                        )    
                    })
                    :<ActivityIndicator 
                    style={styles.lataus}
                    size="large"
                    animating={true} 
                    />
                    }
                </List>
            </Content>
        </Container>

        
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
