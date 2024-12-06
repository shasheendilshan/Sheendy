import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CartScreen from './screens/CartScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import {RootStackParamList} from './types/Navigation.type';
import {useSelector} from 'react-redux';
import {RootState} from './Store/store';
import {Text, TouchableOpacity, View} from 'react-native';

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
        tabBarIcon: ({size, color}) => {
          const cartItems = useSelector((state: RootState) => state.cart.items);
          const itemCount = cartItems.length;

          return (
            <View className="relative">
              <Ionicons name="cart" size={size} color={color} />
              {itemCount > 0 && (
                <View className="absolute top-[-6px] right-[-12px] bg-red-500 rounded-full px-2 py-1">
                  <Text className="text-white text-xs font-bold">
                    {itemCount}
                  </Text>
                </View>
              )}
            </View>
          );
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

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: 'HomeScreen',
  screens: {
    HomeScreen: {
      screen: HomeTabs,
      options: {
        headerShown: false,
      },
    },
    DetailsScreen: {
      screen: DetailsScreen,
      options: ({navigation}) => ({
        headerShown: true,
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-gray-200 p-2 rounded-full ml-2 ">
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
        ),
      }),
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function AppNavigation() {
  return <Navigation />;
}
