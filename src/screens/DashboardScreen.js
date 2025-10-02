import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DashboardScreen = ({ route }) => {
  const { scannedCode } = route.params;

  return (
    <View>
      <Text>${`DashboardScreen Your barcode QR code is ${scannedCode}`}</Text>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
