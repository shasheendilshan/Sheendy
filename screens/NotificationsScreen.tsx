import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default function NotificationsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <Text className="text-center text-lg text-gray-500 mt-12" >No notifications right now</Text>
    </SafeAreaView>
  );
}
