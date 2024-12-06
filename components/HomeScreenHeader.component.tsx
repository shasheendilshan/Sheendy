import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootState} from '../Store/store';
import {useNavigation} from '@react-navigation/native';

const HomeScreenHeader = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemCount = cartItems.length;

  const navigation = useNavigation<any>();

  return (
    <View className="w-full h-[70px] bg-blue-100 flex-row items-center justify-between px-4">
      <View className="flex-row items-center bg-white rounded-full px-4 py-2 w-[80%]">
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          placeholder="Search..."
          className="ml-2 flex-1 text-black"
          style={{fontSize: 14}}
        />
      </View>

      <TouchableOpacity
        className="relative"
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <Ionicons name="cart" size={30} color="#333" />
        {itemCount > 0 && (
          <View className="absolute top-[-6px] right-[-6px] bg-red-500 rounded-full px-2 py-1">
            <Text className="text-white text-xs font-bold">{itemCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreenHeader;
