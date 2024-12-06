import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type ButtonProps = {
  onPress: () => void;
  label: string;
  icon?: React.ReactNode;
  textColor?: string;
  buttonStyle?: string;
  buttonTextStyle?: string;
};

const CustomButton: React.FC<ButtonProps> = ({
  onPress,
  label,
  icon,
  buttonStyle = '',
  buttonTextStyle = '',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`py-2 px-4 rounded-lg flex-row items-center justify-center bg-blue-500 ${buttonStyle}`}>
      {icon && <>{icon}</>}

      <Text className={`ml-${icon ? 2 : 0} text-white ${buttonTextStyle}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
