import React from 'react';
import {Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Button, Icon, Input} from 'react-native-elements';
import {onUserLogin, onKeepLogin} from '../actions';
import {connect} from 'react-redux';
import {StackActions} from '@react-navigation/native';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      redirect: false,
    };
  }

  componentDidMount() {
    this.props.onKeepLogin();
  }

  componentDidUpdate() {
    if (this.props.user) {
      this.props.navigation.dispatch(StackActions.replace('Drawer'));
    }
  }

  onBtLogin = () => {
    this.props.onUserLogin(this.state.username);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#bce6eb',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>
          Welcome
        </Text>
        <Animatable.Text animation="pulse" style={{textAlign: 'center'}}>
          This is Apps
        </Animatable.Text>
        <Input
          placeholder="Your Name"
          placeholderTextColor="black"
          leftIcon={<Icon name="user" type="feather" size={24} />}
          containerStyle={{width: '75%'}}
          onChangeText={(val) => this.setState({username: val})}
        />
        <Button
          title="Login"
          buttonStyle={{width: 90}}
          onPress={this.onBtLogin}
          loading={this.props.loading}
        />
      </View>
    );
  }
}

const mapStateToProps = ({LoginReducer}) => {
  return {
    user: LoginReducer.username,
    loading: LoginReducer.loading,
  };
};

export default connect(mapStateToProps, {onUserLogin, onKeepLogin})(Login);
