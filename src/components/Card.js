import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {Card, CardItem, Button, Icon, Left, Body, Right} from 'native-base';

const defaultImage = 'https://alppetro.co.id/dist/assets/images/default.jpg';

const CardRestaurant = (props) => {
  return (
    <Card>
      <CardItem cardBody>
        <Image
          source={{uri: props.image.length > 0 ? props.image : defaultImage}}
          style={{height: 200, width: null, flex: 1, borderRadius: 10}}
        />
      </CardItem>
      <CardItem style={{height: '20%'}}>
        <Left>
          <Body>
            <Text>{props.name}</Text>
          </Body>
        </Left>
        <Right>
          <Body>
            <Text>{props.rating}</Text>
          </Body>
        </Right>
      </CardItem>
    </Card>
  );
};

export default CardRestaurant;
