import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  CartItem,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../Store/slices/cartSlice';
import {useDispatch} from 'react-redux';

type CartItemProps = {
  item: CartItem;
};

const CustomCartItem: React.FC<CartItemProps> = ({item}) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <View className="flex-row bg-white rounded-xl my-2 p-4 shadow-sm">
      <Image
        source={{uri: item.mainImage}}
        className="w-20 h-20 rounded-lg"
        resizeMode="contain"
      />
      <View className="flex-1 ml-4">
        <Text
          className="text-lg font-semibold text-gray-800"
          numberOfLines={2}
          ellipsizeMode="tail">
          {item.name}
        </Text>
        <Text className="text-sm text-green-600 mt-1">
          {item.price.currency} {item.price.amount}
        </Text>
        <View className="flex-row items-center mt-2">
          <TouchableOpacity
            onPress={() => handleDecreaseQuantity(item.id)}
            className="p-2 bg-gray-200 rounded-full">
            <Ionicons name="remove" size={18} color="black" />
          </TouchableOpacity>
          <Text className="mx-4 text-sm text-gray-600">{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => handleIncreaseQuantity(item.id)}
            className="p-2 bg-gray-200 rounded-full">
            <Ionicons name="add" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleRemoveItem(item.id)}
        className="ml-4">
        <Ionicons name="trash-bin" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomCartItem;
