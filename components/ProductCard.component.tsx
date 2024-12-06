import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Product} from '../types/Product.type';

type ProductCardProps = {
  product: Product;
  onProductPress: (product: Product) => void;
};

const ProductCard = ({product, onProductPress}: ProductCardProps) => {
  return (
    <TouchableOpacity
      className="bg-white p-4 rounded-lg shadow-md mb-4 w-[48%] h-[250px] flex gap-1 "
      onPress={() => onProductPress(product)}>
      <Image
        source={{uri: product.mainImage}}
        className="w-full h-36 rounded-lg mt-1"
        resizeMode="contain"
      />

      <Text
        className="text-lg font-bold mt-1"
        numberOfLines={2}
        ellipsizeMode="tail">
        {product.name}
      </Text>

      <View className="w-full h-[30px] ">
        <Text className="text-md text-green-600 mt-1">
          {product.price.currency} {product.price.amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
