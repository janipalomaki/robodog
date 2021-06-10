import React, { useEffect, useState } from 'react';

import { StyleSheet } from 'react-native';

// React Native Paper
import { ActivityIndicator, Text } from 'react-native-paper';

// Native base
import { Container, Content, List, ListItem, Left, Body, Thumbnail} from 'native-base'

// Moment.js
import moment from 'moment';


export default function News ({ navigation }) {

    // Data
    const [data, setData] = useState({
        news : [],
        error : null,
        dataReady: false
    });

    const getNews = async () => {

        try {

            const api_key = "";
            const base_url = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN";
            const url = base_url + '&api_key=' + api_key;
            const response = await fetch(url);
            const data = await response.json();

            setData({
                ...data,
                news : data.Data,
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
        getNews();
    }, []); //category



    return(

        <Container>
            <Content>
                <List>
                {(data.dataReady)
                ? data.news.map((uutinen, idx) => {
                   
                    let time = moment(uutinen.published_on * 1000).fromNow();

                return (

                    <ListItem 
                    thumbnail
                    onPress={ () => navigation.navigate("Details",
                        { // Viedään tiedot --> "Details"
                            url : uutinen.url
                        }
                        )}
                        key={idx}
                    >
                        <Left>
                            <Thumbnail square source={{ uri: uutinen.imageurl }} />
                        </Left>
                        <Body>
                            <Text style={styles.source}>{uutinen.source_info.name}</Text>
                            <Text style={styles.header}>{uutinen.title}</Text> 
                            <Text style={styles.time}>{time}</Text> 
                        </Body>
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

            <Text style={styles.attribute}>Data from CryptoCompare</Text>
           
            </Content>
        </Container>
    )
}



const styles = StyleSheet.create({
    source : {
        fontWeight : "bold",
        fontSize : 18
    },
    header : {
        fontSize : 16

    },
    time : {
        fontSize : 12,
        marginTop : 5,
        color : "blue"

    },
    loading : {
        marginTop : 160
    },
    attribute : {
        textAlign : 'center',
        fontSize : 12,
        marginTop : 15,
        marginBottom : 15
    }
  });
  
