import React from 'react';
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Platform,
  FlatList,
} from 'react-native';
import {getRestaurants} from '../actions';
import {connect} from 'react-redux';
import CardRestaurant from '../components/Card';
import {Header, Icon} from 'react-native-elements';
import {Card, CardItem} from 'native-base';

import {StackActions} from '@react-navigation/native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promo: [
        {
          name: 'promo1',
          image:
            'https://lelogama.go-jek.com/post_featured_image/lebihepi_.jpg',
        },
        {
          name: 'promo2',
          image:
            'https://lelogama.go-jek.com/post_featured_image/promo-lazada-gofood-gift-voucher.jpg',
        },
        {
          name: 'promo3',
          image:
            'https://lelogama.go-jek.com/post_featured_image/kuliner-festival-kota-lama-semarang-banner.png',
        },
      ],
    };
  }

  componentDidMount() {
    this.props.getRestaurants();
    if (!this.props.user) {
      this.props.navigation.dispatch(StackActions.replace('Login'));
    }
  }

  renCard = () => {
    if (this.props.restaurant.length > 0) {
      return this.props.restaurant.map((e, i) => {
        return (
          <TouchableWithoutFeedback
            key={i}
            onPress={() =>
              this.props.navigation.navigate('Detail', {detail: e})
            }>
            <View style={{width: '50%'}}>
              <CardRestaurant
                name={e.name}
                image={e.featured_image}
                rating={e.user_rating.aggregate_rating}
              />
            </View>
          </TouchableWithoutFeedback>
        );
      });
    }
  };

  render() {
    // console.log('Check OS', Platform.OS);
    return (
      <View style={{backgroundColor: 'white'}}>
        <Header
          leftComponent={{
            text: 'Hi, Ade',
            style: {color: 'white', letterSpacing: 1, fontSize: 16},
          }}
          centerComponent={<Icon type="feather" name="coffee" color="white" />}
          rightComponent={
            <Icon
              type="feather"
              name="menu"
              color="white"
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
          containerStyle={{
            backgroundColor: 'grey',
            borderRadius: 25,
            marginTop: Platform.OS === 'ios' ? 0 : 5,
          }}
        />
        <ScrollView>
          <View>
            <FlatList
              data={this.state.promo}
              renderItem={({item}) => (
                <View style={{marginBottom: 40, marginTop: 20}}>
                  <Card
                    style={{
                      borderRadius: 30,
                      marginRight: 20,
                    }}>
                    <CardItem cardBody>
                      <Image
                        source={{uri: item.image}}
                        style={{height: 200, width: 350, borderRadius: 10}}
                      />
                    </CardItem>
                  </Card>
                </View>
              )}
              keyExtractor={(item) => item.name}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap'}}>
            {this.renCard()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

// name, featured_image, user_rating.aggregate_rating

const mapStateToProps = (state) => {
  // console.log('Check MapToProps', state.RestaurantReducer);
  console.log('Check MapToProps', state.LoginReducer);
  return {
    restaurant: state.RestaurantReducer,
    user: state.LoginReducer.username,
  };
};

export default connect(mapStateToProps, {getRestaurants})(Home);

// <Image
// source={{
//   uri:
//     'https://e7.pngegg.com/pngimages/518/962/png-clipart-fast-food-drink-junk-food-eating-food-icon-food-text.png',
// }}
// style={{width: 50, height: 50}}
// />
