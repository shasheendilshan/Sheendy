import React from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../Store/store';
import {clearCart} from '../Store/slices/cartSlice';
import CustomCartItem from '../components/CustomCartItem.component';
import CustomButton from '../components/CustomButton.component';

export default function CartScreen() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const handleClearCart = () => {
    Alert.alert('Confirm', 'Are you sure you want to clear the cart?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Yes', onPress: () => dispatch(clearCart())},
    ]);
  };

  return (
    <SafeAreaView className="flex flex-1">
      <View className="flex-1 w-full bg-slate-100 px-4">
        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CustomCartItem item={item} />}
            contentContainerStyle={{paddingTop: 16, paddingBottom: 120}}
          />
        ) : (
          <Text className="text-center text-lg text-gray-500 mt-12">
            Your cart is empty.
          </Text>
        )}

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <View className="bg-white px-4 py-2 shadow-sm absolute bottom-0 left-0 right-0">
            {/* Total Amount */}
            <View className="flex-row justify-between h-[20px]">
              <Text className="text-lg font-bold text-gray-800">Total:</Text>
              <Text className="text-lg font-bold text-green-600">
                GBP {totalAmount.toFixed(2)}
              </Text>
            </View>

            <View className="flex-row mt-4 gap-2 h-[40px]">
              <CustomButton
                onPress={handleClearCart}
                label="Clear Cart"
                buttonStyle="bg-red-400 flex-1"
                buttonTextStyle="text-white font-bold"
              />

              <CustomButton
                onPress={() => Alert.alert('Checkout', 'Proceed to checkout')}
                label="Checkout"
                buttonStyle="bg-green-400   flex-1"
                buttonTextStyle="text-white font-bold"
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
