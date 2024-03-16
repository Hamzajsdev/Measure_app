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
import React, {useState} from 'react';
import styles from '../../style/style';
import theme from '../../common/Theme';
import {useNavigation} from '@react-navigation/native';
import cameraImg from '../../assets/images/measureimg/cameraImg.png';
import ruler from '../../assets/icons/ruler.png';
import TakePhotoCamera from '../TakePhotoCamera';

const MeasureCamera = () => {
  const {width} = useWindowDimensions();
  const [isMeasuring, setIsMeasuring] = useState(false);
  const Navigation = useNavigation();
  const handlePress = () => {
    Navigation.navigate('PositionMeasure');
  };
  const handlesubmit = () => {
    Navigation.navigate('MeasurementSave');
  };
  const handleMeasureClick = () => {
    setIsMeasuring(true);
  };

  return (
    <SafeAreaView style={{backgroundColor: theme.colors.white, flex: 1}}>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      <ScrollView>
        <View style={{marginTop: 50,  position: 'relative'}}>
          {/* <Image
            source={cameraImg}
            resizeMode="stretch"
            style={{width: width / 1, height: 450}}
          /> */}
          <TakePhotoCamera />
          <View style={styles.cameraheader}>
            <View style={styles.cameraContainer}>
              <Image
                source={ruler}
                resizeMode="stretch"
                style={{width: 12, height: 20}}
              />
              <TouchableOpacity onPress={handleMeasureClick}>
                <Text
                  style={{
                    color: isMeasuring
                      ? theme.colors.primary
                      : theme.colors.white,
                  }}>
                  Measuring...
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <View>
              <View style={[styles.measureSections, {width: width / 1.1}]}>
                <View style={styles.textSection}>
                  <Text style={styles.description}>
                    On the next screen stand sideways with your entire body in
                    view. Have your arms in the same position as the model.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <View>
          <View style={[styles.btngroupscam, {width: width / 1.1}]}>
            <TouchableOpacity onPress={handlePress}>
              <View style={[styles.prebtn, {width: width / 2.31}]}>
                <Text style={styles.btnsecondary}>Back</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlesubmit}>
              <View
                style={[
                  styles.nbtnSecondary,
                  {
                    width: width / 2.31,
                    backgroundColor: isMeasuring
                      ? theme.colors.primary
                      : theme.colors.lightGray,
                  },
                ]}>
                <Text
                  style={[
                    styles.btntxt,
                    {
                      color: isMeasuring
                        ? theme.colors.white
                        : theme.colors.mdGray,
                    },
                  ]}>
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MeasureCamera;
