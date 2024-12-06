import {RouteProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {RootStackParamList} from '../types/Navigation.type';
import DetailsPageBottomBar from '../components/DetailsBottomBar.component';
import StylishModal from '../components/StyledModal.component';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'DetailsScreen'>;
export default function DetailsScreen({
  route,
}: {
  route: DetailsScreenRouteProp;
}) {
  const {product} = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colour);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleAddToCart = () => {
    setModalVisible(true);
  };

  const handleBuyNow = () => {
    console.log('Buy Now:', product.name);
    // Add your logic for buying the product
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const closeModal = () => {
    setModalVisible(false);
    setQuantity(1); // Reset quantity when modal closes
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Product Details */}
        <ScrollView className="p-4 mb-16 h-screen">
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
              product.stockStatus === 'IN STOCK'
                ? 'text-green-500'
                : 'text-red-500'
            }`}>
            {product.stockStatus}
          </Text>
        </ScrollView>

        {/* Sticky Bottom Bar */}
        <DetailsPageBottomBar
          onAddToCart={handleAddToCart}
          onBuyNow={() => {}}
        />

        {/* Add to Cart Modal */}
        <StylishModal
          product={product}
          closeModal={closeModal}
          modalVisible={modalVisible}
        />
      </View>
    </SafeAreaView>
  );
}
