import React from 'react';

import { StyleSheet } from 'react-native';

// Native base
import { Container, Content, Card, CardItem, Title, Image, Text} from 'native-base'

// Webview
import { WebView } from 'react-native-webview';

export default function HomeNew ( { navigation }) {


    return(
        
        <Container>
            <Content>

                <Card
                style={styles.firstCard}
                onPress={ () => navigation.navigate("Market")}
                >
                    <CardItem 
                    style={styles.carditem}
                    >
                        <WebView source={{ uri: "https://coinmarketcap.com/" }} style={styles.view} />
                    </CardItem>
                </Card>

            
                <Card
                style={styles.card}
                onPress={ () => navigation.navigate("Sentiment")}
                >
                    <CardItem
                    style={styles.carditem}
                    >
                        <Title
                        style={styles.otsikko}
                        >Market Sentiment</Title>
                    </CardItem>
                   
                    
                </Card>


                <Card
                style={styles.card}
                onPress={ () => navigation.navigate("News")}
                >
                    <CardItem
                    style={styles.carditem}
                    >
                        <Title
                        style={styles.otsikko}
                        >News</Title>
                    </CardItem>
                   
                </Card>

                <Card
                style={styles.lastCard}
                onPress={ () => navigation.navigate("Reddit")}
                >
                    <CardItem
                    style={styles.carditem}
                    >
                        <Title
                        style={styles.otsikko}
                        >Reddit</Title>
                    </CardItem>
                    
                </Card>
    
                
                <Text style={styles.attribute}>Copyright 2021 janipalomaki</Text>
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
    firstCard : {
        padding : 3,
        margin : 5,
        marginTop : 10,
    },
    card : {
        padding : 3,
        margin : 5,
        marginTop : 1,
    },
    lastCard : {
        padding : 3,
        margin : 5,
        marginTop : 1,
        marginBottom : 25
    },
    otsikko : {
        textAlign : 'center',
        fontSize : 18,
        marginTop : -15,
        padding : 3
    },
    attribute : {
        textAlign : 'center',
        fontSize : 12,
        marginTop : 10,
        marginBottom : 15
    },
    carditem : {
        height : 200
    }
  });
  

  // <Image source={require ('../img/marketsentiment.png') } />
  //  <Image source={require ('../img/news.png') } />
  // <Image style={styles.cover} csource={require ('../img/streetbets.png') } />