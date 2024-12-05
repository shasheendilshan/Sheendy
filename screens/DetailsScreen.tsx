import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text, ScrollView, Image} from 'react-native';
import {RootStackParamList} from '../types/Navigation.type';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'DetailsScreen'>;
export default function DetailsScreen({
  route,
}: {
  route: DetailsScreenRouteProp;
}) {
  const {product} = route.params;

  return (
    <ScrollView className="p-4">
      {/* Product Image */}
      <Image
        source={{uri: product.mainImage}}
        className="w-full h-60 rounded"
        resizeMode="cover"
      />

      {/* Product Name */}
      <Text className="text-2xl font-bold mt-4">{product.name}</Text>

      {/* Product Brand */}
      <Text className="text-lg text-gray-700">{product.brandName}</Text>

      {/* Product Price */}
      <Text className="text-lg text-green-600 mt-2">
        {product.price.currency} {product.price.amount}
      </Text>

      {/* Product Description */}
      <Text className="text-base text-gray-700 mt-4">
        {product.description}
      </Text>

      {/* Product Color */}
      <Text className="text-base text-gray-700 mt-2">
        Color: {product.colour}
      </Text>

      {/* Available Sizes */}
      <Text className="text-base text-gray-700 mt-2">
        Sizes: {product.sizes.join(', ')}
      </Text>

      {/* Stock Status */}
      <Text
        className={`text-base font-medium mt-2 ${
          product.stockStatus === 'IN STOCK' ? 'text-green-500' : 'text-red-500'
        }`}>
        {product.stockStatus}
      </Text>
    </ScrollView>
  );
}
