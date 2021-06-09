import React, { useEffect, useState } from 'react';

import { StyleSheet, ScrollView } from 'react-native';

// React Native Paper
import { Provider as PaperProvider, Card, Title, Paragraph } from 'react-native-paper';
import { ActivityIndicator, Text } from 'react-native-paper';

// Native base
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail} from 'native-base'


export default function Market ({ route, navigation }) {

   // const {category} = route.params;

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




    // React Native Paper 
    /*
    return(

        <ScrollView>
            <PaperProvider>

                {(marketData.dataReady)
                ? currencies.map((currency, idx) => {

                return (
                        <Card
                        style={styles.kortti}
                        onPress={ () => navigation.navigate("",
                        { // Viedään tiedot --> "Details"
                            //url : uutinen.url
                        }
                        )}
                        key={idx}
                        >
                            <Card.Content>
                                <Title
                                style={styles.otsikko}
                                >{currency.currency.rank}. {currency.currency.name}</Title>
                                 <Paragraph></Paragraph>
                                <Paragraph>{currency.currency.quotes.USD.price}</Paragraph>
                            </Card.Content>
                        </Card>
                    )    
                })
                :<ActivityIndicator 
                style={styles.lataus}
                size="large"
                animating={true} 
                 />
            }

        
            </PaperProvider>
        </ScrollView>

        
    )
    */






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
