import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CartScreen from './screens/CartScreen';
import NotificationsScreen from './screens/NotificationsScreen';

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
        tabBarIcon: ({size, focused, color}) => {
          return <Ionicons name="home" size={size} color={color} />;
        },
      },
    },
    Cart: {
      screen: CartScreen,
      options: {
        headerShown: false,
        tabBarIcon: ({size, focused, color}) => {
          return <Ionicons name="cart" size={size} color={color} />;
        },
      },
    },
    Notifications: {
      screen: NotificationsScreen,
      options: {
        headerShown: false,
        tabBarIcon: ({size, focused, color}) => {
          return <Ionicons name="notifications" size={size} color={color} />;
        },
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  initialRouteName: 'HomeScreen',
  screens: {
    HomeScreen: {
      screen: HomeTabs,
      options: {
        headerShown: false,
      },
    },
    Details: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function AppNavigation() {
  return <Navigation />;
}
