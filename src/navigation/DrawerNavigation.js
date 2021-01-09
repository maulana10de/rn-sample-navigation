import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNav from './TabNavigation';
import Setting from '../pages/Setting';
import {Icon} from 'react-native-elements';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="TabNav"
      drawerPosition="right"
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
      }}>
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: true,
          headerLeft: () => (
            <Icon
              name="arrow-left"
              type="feather"
              size={20}
              containerStyle={{marginLeft: 15}}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="TabNav"
        component={TabNav}
        options={{drawerLabel: ''}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
