import React, { useState, useEffect } from 'react';
import { StatusBar, Alert } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

import FormComponent from './components/FormComponent';
import CameraModule from './components/CameraModule';

export default function App() {
  const [cameraOn, setCameraOn] = useState(false)
  const [permission, requestPermission] = Camera.useCameraPermissions();

  // Check camera permissions and request permissions if not granted
  useEffect(() => {
    (async () => {
      if (permission !== 'granted') {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Camera Permission Required',
            'This app needs the camera permission to function. Please go to settings and enable camera permission for this app.',
            [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
              }],
          );
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {cameraOn ? (<Camera style={styles.camera} type={CameraType.front} >
        <TouchableOpacity style={styles.button} onPress={() => setCameraOn(false)}>
          <Text style={styles.buttonText}>Return to Form</Text>
        </TouchableOpacity>
      </Camera>
      ) : (
        <FormComponent startCamera={() => setCameraOn(true)} />
      )}
      <StatusBar style="auto" />
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
  camera: {
    flex: 1,
    width: "100%",
    justifyContent: 'flex-end',  // align children towards the bottom
    alignItems: 'center',  // center children horizontally
    paddingBottom: 50  // padding at the bottom
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',  // optional: background color with transparency for better visibility
    borderRadius: 8,  // optional: rounded corners
    marginBottom: 20  // space from the bottom edge
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  }
});
