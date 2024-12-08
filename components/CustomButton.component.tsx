import React from 'react';
import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';

type ButtonProps = {
  onPress: () => void;
  label: string;
  icon?: React.ReactNode;
  textColor?: string;
  loading?: boolean;
  disabled?: boolean;
  buttonStyle?: string;
  buttonTextStyle?: string;
};

const CustomButton: React.FC<ButtonProps> = ({
  onPress,
  label,
  icon,
  loading = false,
  disabled = false,
  buttonStyle = '',
  buttonTextStyle = '',
}) => {
  const isDisabled = disabled || loading;
  return (
    <TouchableOpacity
      onPress={!isDisabled ? onPress : undefined}
      activeOpacity={isDisabled ? 1 : 0.7}
      className={`py-2 px-4 rounded-lg flex-row items-center justify-center ${
        isDisabled ? 'bg-gray-400' : 'bg-blue-400'
      }  ${buttonStyle}`}>
      {icon && <>{icon}</>}
      <View className="flex-row items-center">
        {loading && <ActivityIndicator color="white" className="mr-2" />}
        <Text
          className={`${
            isDisabled ? 'text-gray-200' : 'text-white'
          } ${buttonTextStyle}`}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
