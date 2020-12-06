import {Left, Right, Button, List} from 'native-base';
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import OpenMaps from 'react-native-open-map';

class Detail extends React.Component {
  constructor(props) {
    console.log('Checl Detail', props.route.params.detail);
    super(props);
    this.state = {
      detail: props.route.params.detail,
      lat: props.route.params.detail.location.latitude,
      long: props.route.params.detail.location.longitude,
    };
  }
  render() {
    const {detail} = this.state;
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Image
          source={{uri: detail.featured_image}}
          style={{height: '65%', width: '100%', marginTop: '-15%'}}
        />
        <ScrollView>
          <View style={{margin: 20}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 24,
                letterSpacing: 2,
                marginBottom: 5,
              }}>
              {detail.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginBottom: 10,
                color: 'grey',
                textTransform: 'uppercase',
              }}>
              {detail.location.locality} - {detail.location.city}
            </Text>
            <Text
              style={{
                fontSize: 10,
                marginBottom: 5,
              }}>
              <Text
                style={{
                  fontSize: 10,
                  marginBottom: 5,
                  fontWeight: 'bold',
                  color: 'green',
                  textTransform: 'uppercase',
                }}>
                Open Now
              </Text>{' '}
              - {detail.timings}
            </Text>
            <Button transparent style={{marginRight: 10, marginBottom: 5}}>
              <Icon
                color="white"
                name="star"
                size={30}
                iconStyle={{backgroundColor: 'black'}}
              />
              <Text style={{marginLeft: 10, fontSize: 20, color: 'green'}}>
                {detail.user_rating.aggregate_rating}/5
              </Text>
            </Button>
            <Button
              rounded
              onPress={() =>
                OpenMaps.show({
                  latitude: parseInt(this.state.lat),
                  longitude: parseInt(this.state.long),
                  title: detail.location.city,
                })
              }>
              <Text style={{color: 'white', paddingHorizontal: 15}}>
                Location
              </Text>
            </Button>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                marginBottom: 5,
                fontWeight: 'bold',
              }}>
              Other Info :
            </Text>
            {detail.highlights.length > 0 ? (
              detail.highlights.map((e, i) => {
                return (
                  <List key={i}>
                    <Text
                      style={{fontSize: 12, marginLeft: 5, marginBottom: 3}}>
                      # {e}
                    </Text>
                  </List>
                );
              })
            ) : (
              <Text>Ops ... other info not found</Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Detail;
