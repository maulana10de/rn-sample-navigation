import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import {Button, Image} from 'react-native';
import Login from '../pages/Login';
import Drawer from './DrawerNavigation';
import Detail from '../pages/Detail';

const Stack = createStackNavigator();

const MainNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Drawer"
        component={Drawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
          },
          headerTitleStyle: {color: 'white'},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;

{
  /* <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Hello',
          headerRight: () => <Button title="Login" />,
          headerTitleStyle: {
            color: 'red',
            fontSize: 15,
            textAlign: 'center',
          },
          headerLeft: () => (
            <Image
              source={{
                uri:
                  'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-1-avatar-2754574_120513.png',
              }}
              style={{height: 40, width: 40}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      /> */
}
