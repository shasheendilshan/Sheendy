import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Product} from '../types/Product.type';

type ProductCardProps = {
  product: Product;
  onProductPress: (product: Product) => void;
};

const ProductCard = ({product, onProductPress}: ProductCardProps) => {
  return (
    <TouchableOpacity
      className="bg-white p-4 rounded-lg shadow-md mb-4 w-[48%] h-[350px] flex gap-2"
      onPress={() => onProductPress(product)}>
      <View className="w-full h-2/3">
        {/* Product Image */}
        <Image
          source={{uri: product.mainImage}}
          className="w-full h-36 rounded-lg mt-1"
          resizeMode="contain"
        />

        {/* Product Name */}
        <Text
          className="text-lg font-bold mt-2"
          numberOfLines={2}
          ellipsizeMode="tail">
          {product.name}
        </Text>

        {/* Product Price */}
        <View className="w-full h-[30px]">
          <Text className="text-md text-green-600 mt-1">
            {product.price.currency} {product.price.amount}
          </Text>
        </View>
      </View>

      <View className="w-full h-1/3 p-2">
        {/* Add to Cart Button */}
        <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-lg flex-row items-center">
          <Ionicons name="cart-outline" size={20} color="#fff" />
          <Text className="ml-2 text-white">Add to Cart</Text>
        </TouchableOpacity>

        {/* Buy Now Button */}
        <TouchableOpacity className="mt-2 bg-green-500 py-2 px-4 rounded-lg flex-row items-center justify-center">
          <Ionicons name="cash-outline" size={20} color="white" />
          <Text className="ml-2 text-white">Buy Now</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;