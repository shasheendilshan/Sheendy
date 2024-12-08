import {View, TouchableOpacity, Platform, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../Store/store';

const DetailsScreenHeader:React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemCount = cartItems.length;

  const navigation = useNavigation<any>();

  return (
    <View className="w-full h-[60px] bg-purple-500  flex-row items-center justify-between px-4 ">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className={`bg-gray-100  flex  items-center justify-center rounded-full w-12 h-12`}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity
      className='relative'
        onPress={() => {
          navigation.navigate('HomeScreen', {
            screen: 'Cart',
          });
        }}>
        <Ionicons name="cart" size={30} color="#ffffff" />
        {itemCount > 0 && (
          <View className="absolute top-[-6px] right-[-6px] bg-red-500 rounded-full px-2 py-1">
            <Text className="text-white text-xs font-bold">{itemCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreenHeader;
