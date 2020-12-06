import React from 'react';
import {ImageBackground, Text, View, ScrollView} from 'react-native';
import {
  Avatar,
  Header,
  Icon,
  Accessory,
  Card,
  ListItem,
} from 'react-native-elements';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: [
        {
          title: 'My Favorite',
          icon: 'heart',
        },
        {
          title: 'Change Profile',
          icon: 'account-edit',
        },
        {
          title: 'Change Password',
          icon: 'shield-lock',
        },
      ],
      about: [
        {
          title: 'Term of Service',
          icon: 'cog-refresh-outline',
        },
        {
          title: 'Information',
          icon: 'information-outline',
        },
      ],
    };
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header
          leftComponent={
            <Icon
              type="feather"
              name="arrow-left"
              size={25}
              color="white"
              onPress={this.props.navigation.goBack}
            />
          }
          centerComponent={
            <Icon type="feather" name="coffee" size={25} color="white" />
          }
          containerStyle={{
            backgroundColor: 'grey',
            borderRadius: 25,
            marginTop: Platform.OS === 'ios' ? 0 : 5,
            elevation: 3,
          }}
        />
        <ImageBackground
          source={{
            uri:
              'https://image.freepik.com/free-photo/top-view-assortment-veggies-dark-copy-space-background_23-2148758862.jpg',
          }}
          style={{
            width: '100%',
            height: 260,
            marginTop: '-6%',
          }}>
          <View
            style={{
              height: '100%',
              backgroundColor: 'rgba(255,0,255,0.4)',
            }}>
            <Avatar
              containerStyle={{
                marginTop: '15%',
                alignSelf: 'center',
                elevation: 5,
              }}
              rounded
              size={100}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/147/147144.png',
              }}>
              <Accessory size={20} />
            </Avatar>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                color: 'white',
                letterSpacing: 2,
                marginTop: 5,
              }}>
              Ade Maulana
            </Text>
          </View>
        </ImageBackground>
        <ScrollView style={{borderTopRightRadius: 20}}>
          <Card containerStyle={{width: '100%', margin: 0}}>
            <Text style={{fontSize: 17, letterSpacing: 2, fontWeight: 'bold'}}>
              About
            </Text>
            {this.state.about.map((item, idx) => (
              <ListItem
                key={idx}
                title={item.title}
                leftIcon={{
                  name: item.icon,
                  size: 20,
                  type: 'material-community',
                }}
                bottomDivider>
                <ListItem.Chevron size={25} />
              </ListItem>
            ))}
          </Card>
          <Card containerStyle={{width: '100%', margin: 0}}>
            <Text style={{fontSize: 17, letterSpacing: 2, fontWeight: 'bold'}}>
              Account
            </Text>
            {this.state.account.map((item, idx) => (
              <ListItem
                key={idx}
                title={item.title}
                leftIcon={{
                  name: item.icon,
                  size: 20,
                  type: 'material-community',
                }}
                bottomDivider>
                <ListItem.Chevron size={25} />
              </ListItem>
            ))}
          </Card>
        </ScrollView>
      </View>
    );
  }
}

export default Profile;
