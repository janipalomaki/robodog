import React, { useEffect, useState } from 'react';

import { StyleSheet } from 'react-native';

// React Native Paper
import { ActivityIndicator } from 'react-native-paper';

// Native base
import { Container, Content, List, ListItem, Left, Body, Thumbnail, Text, Button} from 'native-base'

// Moment.js
import moment from 'moment';


export default function MarketSentiment ({ route, navigation }) {

   // const {category} = route.params;

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
    }, []); //category


console.log(data.data);

    return(
        <Container>
            <Content>
                <List>
                    
                    {(data.dataReady)
                    ? 
                    data.data.map((sentiment, idx) => {

                        let time = moment(sentiment.timestamp * 1000).fromNow();

                        let color = "";
                        
                        // Sentiment value colors styles
                        if (sentiment.value < 25) {
                            
                        }

                    return (
                        <ListItem key={idx}>
                            <Left>
                                <Text style={styles.time}>{time}</Text>
                            </Left>

                            <Body>
                                <Button rounded>
                                    <Text style={styles.value}>{sentiment.value}</Text>
                                </Button>
                                <Text style={styles.value_classification}>{sentiment.value_classification}</Text>     
                            </Body>
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
    time : {
        fontSize : 14
    },
    value : {
        fontWeight : "bold",
        fontSize : 16
    },
    value_classification : {
        fontSize : 12
    }
  });
