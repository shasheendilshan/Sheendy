import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Product} from '../types/Product.type';
import {useNavigation} from '@react-navigation/native';
import {DetailsScreenNavigationProp} from '../types/Navigation.type';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  products: Product[];
};

const ProductList = ({products}: Props) => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handleProductPress = (product: Product) => {
    // Navigate to the Details screen and pass the product data as a parameter
    navigation.navigate('DetailsScreen', {product});
  };

  const renderItem = ({item}: {item: Product}) => (
    <TouchableOpacity
      onPress={() => handleProductPress(item)}
      className="bg-white p-4 rounded-lg shadow-lg mb-4">
      {/* Product Image */}
      <Image
        source={{uri: item.mainImage}}
        className="w-full h-48 rounded-lg"
        resizeMode="cover"
      />

      {/* Product Name */}
      <Text className="text-xl font-bold mt-2">{item.name}</Text>

      {/* Product Price */}
      <Text className="text-lg text-green-600 mt-1">
        {item.price.currency} {item.price.amount}
      </Text>

      {/* Product Description */}
      <Text className="text-sm text-gray-600 mt-2" numberOfLines={2}>
        {item.description}
      </Text>

      {/* Buttons */}
      <View className="flex-row justify-between items-center mt-4">
        {/* Add to Cart Button */}
        <TouchableOpacity
          onPress={() => {}}
          className="flex-row items-center bg-blue-500 text-white py-2 px-4 rounded-lg">
          <Ionicons name="cart" size={20} color="white" />
          <Text className="ml-2 text-white">Add to Cart</Text>
        </TouchableOpacity>

        {/* Buy Now Button */}
        <TouchableOpacity
          onPress={() => {}}
          className="flex-row items-center bg-green-500 py-2 px-4 rounded-lg">
          <Ionicons name="cash" size={20} color="white" />
          <Text className="ml-2 text-white">Buy Now</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 flex">
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProductList;
