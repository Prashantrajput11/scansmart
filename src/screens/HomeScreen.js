import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Scanner')}
      >
        <Text style={styles.buttonText}>Scan My Bar code</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
