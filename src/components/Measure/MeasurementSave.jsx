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
import measure from '../../assets/images/measureimg/measure.png';
import {fontSizes} from '../../assets/fonts/font';
import InnerText from '../InnerText';

const MeasurementSave = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handlesubmit = () => {
    Navigation.navigate('ManageMeasure');
  };
  const [clicked, setClicked] = useState(false);
  const handlePress = () => {
    setClicked(true);
  };

  return (
    <SafeAreaView style={{backgroundColor: theme.colors.white, flex: 1}}>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View>
              <View style={[styles.measureSections, {width: width / 1.1}]}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 150,
                  }}>
                  <Image
                    source={measure}
                    resizeMode="stretch"
                    style={{width: width / 1.7, height: 120}}
                  />
                </View>
                <View style={[styles.textSection, {marginTop: 140}]}>
                  <Text style={styles.heading}>Measurements Saved</Text>
                  <Text style={styles.description}>
                    Your measurements have been saved to your account. Click the
                    button below to send to your associated dealer.
                  </Text>
                </View>
                <View style={{marginTop: 60}}>
                  <TouchableOpacity onPress={handlePress}>
                    <View
                      style={[
                        styles.btns,
                        {
                          width: width / 1.1,
                          backgroundColor: clicked
                            ? theme.colors.greenShade
                            : theme.colors.primary,
                          borderColor: clicked
                            ? theme.colors.primary
                            : theme.colors.primary,
                          borderWidth: 0.5,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.btntxt,
                          {
                            color: clicked
                              ? theme.colors.green
                              : theme.colors.white,
                          },
                        ]}>
                        {clicked ? <InnerText /> : 'Send Measurements'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {clicked && (
                    <Text style={styles.message}>
                      Measurement successfully sent to dealer
                    </Text>
                  )}
                </View>
                <TouchableOpacity onPress={handlesubmit}>
                  <View style={[styles.btns1, {width: width / 1.1}]}>
                    <Text style={styles.btn1txt}>View Measurements</Text>
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

export default MeasurementSave;
