import React, { useEffect, useState } from 'react';

import { StyleSheet, ScrollView } from 'react-native';

// React Native Paper
import { Provider as PaperProvider, Card, Title, Paragraph } from 'react-native-paper';
import { ActivityIndicator, Text } from 'react-native-paper';


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
                name : data.name,
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


//console.log(data.data);

    return(

        <ScrollView>
            <PaperProvider>


                {(data.dataReady)
                ? <Text>{JSON.stringify(data.data)}</Text>
           
            /*
                
           
                data.data.map((uutinen, idx) => {

                return (
                        <Card
                        style={styles.kortti}
                        onPress={ () => navigation.navigate("Details",
                        { // Viedään tiedot --> "Details"
                            url : uutinen.url
                        }
                        )}
                        key={idx}
                        >
                            <Card.Content>
                                <Title
                                style={styles.otsikko}
                                >{uutinen.title}</Title>
                                <Paragraph>{uutinen.body}</Paragraph>
                            </Card.Content>
                            <Card.Cover source={{ uri: uutinen.imageurl }} />
                        </Card>
                    )    
                })

                    */
                :<ActivityIndicator 
                style={styles.lataus}
                size="large"
                animating={true} 
                 />
            }

        
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
        fontSize : 18,
        marginTop : -15,
        padding : 3
    },
    lataus : {
        marginTop : 30
    }
  });
