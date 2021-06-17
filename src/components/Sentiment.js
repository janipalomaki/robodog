import React, { useEffect, useState } from 'react';

import { StyleSheet } from 'react-native';

// React Native Paper
import { ActivityIndicator } from 'react-native-paper';

// Native base
import { Container, Content, List, ListItem, Left, Body, Text, Button, Right} from 'native-base'

// Moment.js
import moment from 'moment';


export default function Sentiment () {

    // Data
    const [data, setData] = useState({
        news : [],
        error : null,
        dataReady: false
    });

    const getMarketSentiment = async () => {

        try {

            const api_key = "";
            const base_url = "https://api.alternative.me/";
            const url = base_url + 'fng/?limit=30';
            const response = await fetch(url);
            const data = await response.json();

            setData({
                ...data,
                name : data.name,
                data : data.data,
                dataReady : true
            });


        } catch (e) {

            setData({
                ...data,
                error : `Cannot connect to the server ${e.message}`,
                dataReady : true
            });
        }
    }

    useEffect(() => {
        getMarketSentiment();
    }, [data.dataReady]); //category


//console.log(data.data);

    return(
        <Container>
            <Content>
                <Text style={styles.text}>Fear & Greed Index</Text>
                <Text note style={styles.textNote}>Multifactorial Crypto Market Sentiment Analysis</Text>
                <List>
                    
                    {(data.dataReady)
                    ? 
                    data.data.map((sentiment, idx) => {

                        let time = moment(sentiment.timestamp * 1000).fromNow();
                        
                        let date = new Date(sentiment.timestamp * 1000);
                        let updated = ( "Updated: "
                                        + date.getDate() + "/"
                                        +(date.getMonth()+1) + "/"
                                        + date.getFullYear()
                                        );
                
                        let color = "";
                        let colorValue = Number(sentiment.value);
                        
                        // Sentiment value colors styles
                        if ( colorValue <= 25 ) {
                            color = styles.danger;

                        } else if ( colorValue <= 40) {
                            color = styles.warning;
                        
                        } else if ( colorValue <= 50) {
                            color = styles.neutral;
                        
                        } else {
                            color = styles.success;
                        }

                    return (
                        <ListItem 
                        style={styles.listItem}
                        avatar key={idx}>
                            <Left>
                                <Button 
                                style={color}
                                rounded>
                                    <Text style={styles.value}>{sentiment.value}</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Text style={styles.value_classification}>{sentiment.value_classification}</Text> 
                                <Text note style={styles.updated}>{updated}</Text>
                            </Body>
                            <Right>
                            <Text note style={styles.time}>{time}</Text>
                            </Right>
                        </ListItem>
                        )    
                    })
                    :<ActivityIndicator 
                    style={styles.loading}
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
    time : {
        fontSize : 12,
        color : "blue"
    },
    value : {
        fontWeight : "bold",
        fontSize : 14
    },
    value_classification : {
        fontSize : 14,
        fontWeight : "bold"
    },
    loading : {
        marginTop : 165
    },
    updated : {
        fontSize : 12
    },
    listItem : {
        padding : 3
    },
    danger : {
        backgroundColor : "red"
    },
    warning : { 
        backgroundColor : "orange"
    },
    neutral : {
        backgroundColor : "yellow"
    },
    success : {
        backgroundColor : "green"
    },
    text : {
        marginLeft : 18,
        marginTop : 10,
        fontSize : 18,
        fontWeight : "bold"
    },
    textNote : {
        marginLeft : 18,
    }
  });
