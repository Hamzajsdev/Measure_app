import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import { Camera, useCameraDevice,} from 'react-native-vision-camera';
import styles from '../style/style';

const TakePhotoCamera = () => {
  const device = useCameraDevice('back');
  const camera = useRef(null);
  const [imageDate, setImageDate] = useState('');
  const [takePhotoClicked, setTakePhotoClicked] = useState('');

  const requestPermissions = async () => {
    const cameraPermission = await Camera.requestCameraPermission();
    const microphonePermission = await Camera.requestMicrophonePermission();
    console.log(cameraPermission);
  };
  useEffect(() => {
    requestPermissions();
  }, []);

  if (device == null) {return <ActivityIndicator />;}
  const takePicture = async () => {
    if (camera != null) {
      const photo = await camera.current.takePhoto();
      setImageDate(photo.path);
      setTakePhotoClicked(false);
    }
  };

  return (
    <View style={{flex: 1}}>
      {takePhotoClicked ? (
        <View style={{flex: 1}}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
          />
          <TouchableOpacity style={styles.takePhoto} onPress={takePicture} />
        </View>
      ) : (
        <View style={styles.photoImgcontainer}>
          {imageDate !== '' && (
            <Image
              source={{uri: 'file://' + imageDate}}
              style={{width: '100%', height: 420}}
            />
          )}
          <TouchableOpacity
            style={styles.touchBtn}
            onPress={() => {
              setTakePhotoClicked(true);
            }}>
            <Text style={styles.takePhotobtn}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TakePhotoCamera;
