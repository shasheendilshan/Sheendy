import {View, FlatList} from 'react-native';
import React from 'react';
import {Product} from '../types/Product.type';
import {useNavigation} from '@react-navigation/native';
import {DetailsScreenNavigationProp} from '../types/Navigation.type';
import ProductCard from './ProductCard.component';

type ProductListProps = {
  products: Product[];
};

const ProductList = ({products}: ProductListProps) => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handleProductPress = (product: Product) => {
    navigation.navigate('DetailsScreen', {product});
  };

  return (
    <View className="flex-1 flex">
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ProductCard product={item} onProductPress={handleProductPress} />
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: 8,
        }}
        contentContainerStyle={{
          paddingVertical: 8,
        }}
      />
    </View>
  );
};

export default ProductList;
