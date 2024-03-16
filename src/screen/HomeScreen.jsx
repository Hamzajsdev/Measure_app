import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from '../style/style';
import theme from '../common/Theme';
import chair from '../assets/images/measureimg/chair.png';
import measure from '../assets/images/measureimg/measure.png';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const Navigation = useNavigation();
  const handlepress = () => {
    Navigation.navigate('Product');
  };
  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView style={{backgroundColor: theme.colors.white, flex: 1}}>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View>
              <View style={[styles.wapper, {width: width / 1.1}]}>
                <View style={styles.headerSection}>
                  <Image
                    source={chair}
                    resizeMode="cover"
                    style={styles.img}
                    alt="chair-img"
                  />
                  <Image
                    source={measure}
                    resizeMode="stretch"
                    style={{width: width / 1.3, height: height / 5.5}}
                    alt="measure-img"
                  />
                </View>
                <View style={styles.textSection}>
                  <Text style={styles.heading}>Advanced Measurement</Text>
                  <Text style={styles.description}>
                    Use your phone camera to measure yourself. All you need to
                    do is point the camera. The app will measure you
                    automatically. As if by magic.{' '}
                  </Text>
                </View>
              </View>
              <View style={styles.elementorHeader}>
                <TouchableOpacity onPress={handlepress}>
                  <View style={[styles.btn, {width: width / 1.1}]}>
                    <Text style={styles.btntxt} >Next</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
