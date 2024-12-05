import {Product} from './Product.type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {product: Product};
};

export type HomeTabsParamList = {
  Home: undefined;
  Cart: undefined;
  Notifications: undefined;
};

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DetailsScreen'
>;
