import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const ScannerOverlay = () => {
  return (
    <View style={styles.overlay}>
      <Text style={styles.instructionText}>
        Point the camera at a QR code or Barcode
      </Text>
      <View style={styles.viewfinder} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    position: 'absolute',
    top: '25%',
  },
  viewfinder: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
});
