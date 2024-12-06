import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {fetchProducts} from '../api/Products';
import ProductList from '../components/ProductList.component';

export default function HomeScreen() {
  const {data, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });


  return (
    <SafeAreaView className="flex flex-1">
      <View className="flex bg-white flex-1">
        {isLoading && (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        {data && <ProductList products={data} />}
      </View>
    </SafeAreaView>
  );
}
