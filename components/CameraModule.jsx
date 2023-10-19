import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const CameraModule = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <Camera
            style={{ flex: 1, width: "100%" }}
            ref={(r) => {
                camera = r
            }}
        ></Camera>
        // <View style={styles.container}>
        //     <Camera style={styles.camera} type={type}>
        //         <View style={styles.buttonContainer}>
        //             <TouchableOpacity
        //                 style={styles.button}
        //                 onPress={() => {
        //                     setType(
        //                         type === Camera.Constants.Type.back
        //                             ? Camera.Constants.Type.front
        //                             : Camera.Constants.Type.back
        //                     );
        //                 }}>
        //                 <Text style={styles.text}> Flip </Text>
        //             </TouchableOpacity>
        //         </View>
        //     </Camera>
        // </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     camera: {
//         flex: 1,
//     },
//     buttonContainer: {
//         flex: 1,
//         backgroundColor: 'transparent',
//         flexDirection: 'row',
//     },
//     button: {
//         flex: 0.1,
//         alignSelf: 'flex-end',
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 18,
//         color: 'white',
//     },
// });

export default CameraModule;
