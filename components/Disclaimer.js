import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Disclaimer() {
  return (
    <View style={styles.container}>
      <Text>
        <Text>Disclaimer</Text>
        <Text>
          This product is not a therapist.
          No celebrities were harmed or used in the making of this app.
          AI can produce false, out of date, or harmful responses. Use at your own risk.
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
