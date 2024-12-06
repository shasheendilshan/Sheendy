import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type ButtonProps = {
  onPress: () => void;
  label: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
};

const CustomButton: React.FC<ButtonProps> = ({
  onPress,
  label,
  icon,
  backgroundColor = 'blue',
  textColor = 'white',
  className = '',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{backgroundColor}}
      className={`py-2 px-4 rounded-lg flex-row items-center justify-center ${className}`}>
      {icon && <>{icon}</>}

      <Text style={{color: textColor}} className={`ml-${icon ? 2 : 0}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
