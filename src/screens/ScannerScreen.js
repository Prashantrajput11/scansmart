// File: screens/ScannerScreen.js

import { Alert, StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useCallback, useEffect, useRef } from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import PermissionPage from '../components/PermissionPage';
import { useIsFocused } from '@react-navigation/native';
import { useIsForeground } from '../hooks/useIsForeground';
import { SAFE_AREA_PADDING } from '../constant';

const ScannerScreen = ({ navigation }) => {
  // Hooks
  const { hasPermission, requestPermission } = useCameraPermission();

  console.log('req per', requestPermission);

  const device = useCameraDevice('back');

  const isFocused = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocused && isForeground;

  // ref to prevent scanning multiple times
  const isScanProcessed = useRef(false);

  const onCodeScanned = useCallback(codes => {
    console.log('codes', codes);

    if (isScanProcessed.current) {
      return;
    }

    const value = codes[0]?.value;
    if (value == null) {
      return;
    }

    // Lock the scanner to prevent further scans
    isScanProcessed.current = true;

    if (value === 'login123') {
      // Success case
      console.log('Navigating to Dashboard...');
      navigation.navigate('Dashboard', { scannedCode: value });
    } else {
      // Failure case
      console.log('Invalid code, showing alert and going back...');
      Alert.alert('Scan Failed', 'The scanned code is not valid.', [
        {
          text: 'OK',
          onPress: () => navigation.goBack(), // Go back after user dismisses alert
        },
      ]);
    }
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'ean-8', 'code-128'],
    onCodeScanned: onCodeScanned,
  });

  //  useEffect to reset the scanner when the screen is focused again
  useEffect(() => {
    if (isFocused) {
      isScanProcessed.current = false;
    }
  }, [isFocused]);

  if (hasPermission === null) {
    return null;
  }
  if (!hasPermission) {
    return <PermissionPage requestPermission={requestPermission} />;
  }
  if (device == null) {
    return (
      <View style={styles.errorContainer}>
        <Text>No Camera Device Found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {device != null && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isActive}
          codeScanner={codeScanner}
          enableZoomGesture={true}
        />
      )}
      <Pressable onPress={navigation.goBack} style={styles.backButton}>
        <Text>⏪</Text>
      </Pressable>
    </View>
  );
};

export default ScannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: SAFE_AREA_PADDING.paddingLeft || 16,
    top: SAFE_AREA_PADDING.paddingTop || 48,
  },
});
