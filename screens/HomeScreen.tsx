import React from 'react';
import {View, SafeAreaView, ActivityIndicator} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {fetchProducts} from '../api/Products';
import ProductList from '../components/ProductList.component';
import HomeScreenHeader from '../components/HomeScreenHeader.component';

export default function HomeScreen() {
  const {data, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return (
    <SafeAreaView className="flex flex-1">
      <View className="flex bg-white flex-1">
        {/*Home Screen Header */}
        <HomeScreenHeader />
        {isLoading && (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        {/*Product List */}
        {data && <ProductList products={data} />}
      </View>
    </SafeAreaView>
  );
}
