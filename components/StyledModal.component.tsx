import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StylishModal = ({
  product,
  modalVisible,
  closeModal,
}: {
  product: any; // Replace with your product type
  modalVisible: boolean;
  closeModal: () => void;
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={closeModal}>
      {/* Outside Click Listener */}
      <Pressable
        onPress={closeModal}
        style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end'}}>
        {/* Modal Content */}
        <Pressable onPress={() => {}} style={{backgroundColor: 'white', borderRadius: 30, padding: 20, shadowOpacity: 0.3}}>
          {/* Close Button */}
          <TouchableOpacity
            onPress={closeModal}
            style={{position: 'absolute', top: 10, right: 10, zIndex: 10}}>
            <Ionicons name="close" size={28} color="#333" />
          </TouchableOpacity>

          {/* Product Image */}
          <Image
            source={{uri: product.mainImage}}
            style={{width: '100%', height: 200, borderRadius: 15}}
            resizeMode="cover"
          />

          {/* Product Name */}
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15, color: '#333'}}>
            {product.name}
          </Text>

          {/* Price */}
          <Text style={{fontSize: 18, color: 'green', marginVertical: 10}}>
            {product.price.currency} {product.price.amount}
          </Text>

          {/* Quantity Selector */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
            <Text style={{fontSize: 18, fontWeight: '600', color: '#555'}}>Quantity</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => handleQuantityChange(-1)}
                style={{backgroundColor: '#ddd', padding: 10, borderRadius: 50, marginHorizontal: 5}}>
                <Ionicons name="remove" size={20} color="#555" />
              </TouchableOpacity>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{quantity}</Text>
              <TouchableOpacity
                onPress={() => handleQuantityChange(1)}
                style={{backgroundColor: '#ddd', padding: 10, borderRadius: 50, marginHorizontal: 5}}>
                <Ionicons name="add" size={20} color="#555" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Size Selector */}
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 18, fontWeight: '600', color: '#555'}}>Size</Text>
            <FlatList
              data={product.sizes}
              horizontal
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => setSelectedSize(item)}
                  style={{
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 10,
                    backgroundColor: selectedSize === item ? '#007BFF' : '#ddd',
                    marginRight: 10,
                    marginTop: 10,
                  }}>
                  <Text style={{color: selectedSize === item ? 'white' : '#555'}}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity
            onPress={() => {
              console.log('Add to cart logic here');
              closeModal();
            }}
            style={{
              backgroundColor: '#28A745',
              paddingVertical: 15,
              borderRadius: 10,
              marginTop: 30,
            }}>
            <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default StylishModal;