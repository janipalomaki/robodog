import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default function FooterTabsBadgeExample () {

    return (
    
        <Footer>
        <FooterTab>
          <Button>
            <Text>Market</Text>
          </Button>
          <Button>
            <Text>Market sentiment</Text>
          </Button>
          <Button active>
            <Text>News</Text>
          </Button>
          <Button>
            <Text>Reddit</Text>
          </Button>
        </FooterTab>
      </Footer>
  
    );
  }