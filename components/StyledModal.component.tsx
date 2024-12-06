import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {addToCart} from '../Store/slices/cartSlice';
import Separator from './Separator.component';
import {Product} from '../types/Product.type';
import {DetailsPageButtonType} from '../screens/DetailsScreen';
import CustomButton from './CustomButton.component';

type StylishModalProps = {
  product: Product;
  modalVisible: boolean;
  closeModal: () => void;
  buttonType: DetailsPageButtonType;
};

const StylishModal: React.FC<StylishModalProps> = ({
  product,
  modalVisible,
  buttonType,
  closeModal,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const dispatch = useDispatch();

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleBtnClick = () => {
    // Check if product has sizes or not
    if (product?.sizes?.length === 0) {
      // If no sizes, directly add the product to cart
      const cartItem = {
        ...product,
        size: 'default',
        quantity,
      };
      dispatch(addToCart(cartItem));
      closeModal();
    } else {
      // If sizes, proceed with the size validation
      if (buttonType === 'add_to_cart') {
        if (selectedSize) {
          const cartItem = {
            ...product,
            size: selectedSize,
            quantity,
          };
          dispatch(addToCart(cartItem));
          closeModal();
        } else {
          Alert.alert('Please select a size');
        }
      } else {
        Alert.alert('Proceed to checkout');
      }
    }
  };

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={closeModal}>
      <Pressable
        onPress={closeModal}
        className="flex-1 bg-black/40 justify-end">
        <Pressable className="bg-white h-2/3 rounded-3xl p-5 shadow-md">
          <TouchableOpacity
            onPress={closeModal}
            className="absolute top-2.5 right-2.5 z-10">
            <Ionicons name="close" size={28} color="#333" />
          </TouchableOpacity>

          <Image
            source={{uri: product.mainImage}}
            className="w-full h-48 rounded-lg"
            resizeMode="contain"
          />
          <Separator />

          <Text className="text-xl font-bold mt-4 text-gray-800">
            {product.name}
          </Text>

          <Text className="text-lg text-green-600 my-2.5">
            {product.price.currency} {product.price.amount}
          </Text>
          <Separator />

          <View className="flex-row justify-between items-center mt-3 mb-3">
            <Text className="text-lg font-semibold text-gray-600">
              Quantity
            </Text>
            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={() => handleQuantityChange(-1)}
                className="bg-gray-300 p-2 rounded-full mx-1.5">
                <Ionicons name="remove" size={20} color="#555" />
              </TouchableOpacity>
              <Text className="text-lg font-bold">{quantity}</Text>
              <TouchableOpacity
                onPress={() => handleQuantityChange(1)}
                className="bg-gray-300 p-2 rounded-full mx-1.5">
                <Ionicons name="add" size={20} color="#555" />
              </TouchableOpacity>
            </View>
          </View>
          <Separator />
          {product?.sizes.length > 0 && (
            <View className="mt-5">
              <Text className="text-lg font-semibold text-gray-600">Size</Text>
              <FlatList
                data={product.sizes}
                horizontal
                keyExtractor={item => item}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => setSelectedSize(item)}
                    className={`px-4 py-2 rounded-lg mr-2 mt-2 ${
                      selectedSize === item ? 'bg-blue-600' : 'bg-gray-300'
                    }`}>
                    <Text
                      className={`${
                        selectedSize === item ? 'text-white' : 'text-gray-700'
                      }`}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
          <CustomButton
            onPress={handleBtnClick}
            label={buttonType === 'add_to_cart' ? 'Add To Cart' : 'Buy Now'}
            buttonStyle={`${
              buttonType === 'add_to_cart' ? 'bg-blue-400' : 'bg-green-400'
            } bg-green-600 py-4 rounded-lg mt-7`}
            buttonTextStyle="text-white font-bold"
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default StylishModal;
