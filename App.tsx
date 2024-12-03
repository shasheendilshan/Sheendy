import './global.css';
import React from 'react';
import {Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View className="flex-1 bg-blue-300 flex justify-center">
      <View className='bg-red-300 flex'>
        <Text className="text-black text-6xl mx-auto p-3">Sheendy Store</Text>
      </View>
    </View>
  );
}

export default App;
