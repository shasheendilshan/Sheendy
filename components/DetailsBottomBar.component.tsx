import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  onAddToCart: () => void;
  onBuyNow: () => void;
};

const DetailsPageBottomBar = ({onAddToCart, onBuyNow}: Props) => {
  return (
    <View className="w-full bg-white border-t border-gray-300 p-4 flex-row justify-between items-center">
      {/* Add to Cart Button */}
      <TouchableOpacity
        onPress={onAddToCart}
        className="flex-1 bg-blue-500 py-3 rounded-lg flex-row items-center justify-center mr-2">
        <Ionicons name="cart-outline" size={20} color="#fff" />
        <Text className="ml-2 text-white">Add to Cart</Text>
      </TouchableOpacity>

      {/* Buy Now Button */}
      <TouchableOpacity
        onPress={onBuyNow}
        className="flex-1 bg-green-500 py-3 rounded-lg flex-row items-center justify-center">
        <Ionicons name="cash-outline" size={20} color="#fff" />
        <Text className="ml-2 text-white">Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsPageBottomBar;
