import {RouteProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {RootStackParamList} from '../types/Navigation.type';
import DetailsPageBottomBar from '../components/DetailsBottomBar.component';
import StylishModal from '../components/StyledModal.component';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailsScreenHeader from '../components/DetailsScreenHeader.component';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'DetailsScreen'>;

type DetailsScreenProps = {
  route: DetailsScreenRouteProp;
};
export type DetailsPageButtonType = 'add_to_cart' | 'buy_now';

export enum ProductStatus {
  IN_STOCK = 'IN STOCK',
  OUT_OF_STOCK = 'OUT OF STOCK',
}

export default function DetailsScreen({route}: DetailsScreenProps) {
  const {product} = route.params;

  const navigation = useNavigation<any>();

  const [modalVisible, setModalVisible] = useState(false);
  const [buttonType, setButtonType] =
    useState<DetailsPageButtonType>('add_to_cart');

  const productStatus = product?.stockStatus;

  const handleAddToCart = () => {
    setButtonType('add_to_cart');
    setModalVisible(true);
  };

  const handleBuyNow = () => {
    setButtonType('buy_now');
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Back button */}
      {/* <TouchableOpacity
        onPress={() => navigation.goBack()}
        className={`bg-gray-200  flex  items-center justify-center rounded-full top-0 left-2 w-12 h-12 ${
          Platform.OS === 'android' && 'mt-4'
        }`}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity> */}

      <DetailsScreenHeader/>

      {/* Product Details */}
      <ScrollView className="flex mt-1">
        <View className=" px-4 pt-4 pb-16">
          {/* Product Image */}
          <Image
            source={{uri: product.mainImage}}
            className="w-full h-60 rounded"
            resizeMode="contain"
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
          {product?.sizes?.length > 1 && (
            <Text className="text-base text-gray-700 mt-2">
              Sizes: {product.sizes.join(', ')}
            </Text>
          )}

          {/* Stock Status */}
          <Text
            className={`text-base font-medium mt-2 ${
              productStatus === ProductStatus.IN_STOCK
                ? 'text-green-500'
                : 'text-red-500'
            }`}>
            {productStatus}
          </Text>
        </View>
      </ScrollView>

      {/* Sticky Bottom Bar */}
      <DetailsPageBottomBar
        disabled={productStatus === ProductStatus.IN_STOCK ? false : true}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Add to Cart Modal */}
      <StylishModal
        product={product}
        closeModal={closeModal}
        modalVisible={modalVisible}
        buttonType={buttonType}
      />
    </SafeAreaView>
  );
}
