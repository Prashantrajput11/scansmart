// File: components/PermissionPage.js

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

// I'm using the more robust component we designed in the previous step.
// Notice it only receives 'requestPermission' as a prop.
const PermissionPage = ({ requestPermission }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📷</Text>
      <Text style={styles.title}>Camera Access Required</Text>
      <Text style={styles.message}>
        This app needs access to your camera to scan QR codes. Please grant
        permission to continue.
      </Text>

      {/* This button now calls the function passed down from ScannerScreen */}
      <TouchableOpacity style={styles.button} onPress={requestPermission}>
        <Text style={styles.buttonText}>Grant Permission</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => Linking.openSettings()}
      >
        <Text style={styles.secondaryButtonText}>Open Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PermissionPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    padding: 10,
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
});
