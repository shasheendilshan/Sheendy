import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from './CustomButton.component';

type DetailsPageBottomBarProps = {
  onAddToCart: () => void;
  onBuyNow: () => void;
  disabled?: boolean;
};

const DetailsPageBottomBar = ({
  onAddToCart,
  onBuyNow,
  disabled = false,
}: DetailsPageBottomBarProps) => {
  return (
    <View className="w-full bg-white border-t border-gray-300 p-4 gap-4 flex-row justify-between items-center">
      <CustomButton
        onPress={onAddToCart}
        disabled={disabled}
        icon={<Ionicons name="cart-outline" size={20} color="#fff" />}
        label="Add to Cart"
        buttonStyle="bg-blue-400 py-3  flex-1"
        buttonTextStyle="text-white font-bold"
      />

      <CustomButton
        onPress={onBuyNow}
        disabled={disabled}
        icon={<Ionicons name="cash-outline" size={20} color="#fff" />}
        label="Buy Now"
        buttonStyle="bg-green-400 py-3  flex-1"
        buttonTextStyle="text-white font-bold"
      />
    </View>
  );
};

export default DetailsPageBottomBar;
