import {CommonActions} from '@react-navigation/native';
import {Left, List, ListItem} from 'native-base';
import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {onUserLogout} from '../actions';

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    console.log(this.props.user);
    if (!this.props.user) {
      // this.props.navigation.navigate('Login');
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Login',
          },
        ],
      });

      // untuk menjalankan fungsi commonaction
      this.props.navigation.dispatch(resetAction);
    }
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <List>
          <ListItem>
            <Left>
              <Text>Security</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Privacy and Policy</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <TouchableWithoutFeedback onPress={this.props.onUserLogout}>
                <Text>Logout</Text>
              </TouchableWithoutFeedback>
            </Left>
          </ListItem>
        </List>
      </View>
    );
  }
}

const mapStateToProps = ({LoginReducer}) => {
  return {
    user: LoginReducer.username,
  };
};

export default connect(mapStateToProps, {onUserLogout})(Setting);
