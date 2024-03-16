import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import theme from '../../common/Theme';
import styles from '../../style/style';
import loginImg from '../../assets/images/Camera/loginImg.png';

const ForgetPassword = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handlePress = () => {
    Navigation.navigate('ChangePassword');
  };
  return (
    <SafeAreaView style={{backgroundColor: theme.colors.white, flex: 1}}>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View>
              <View style={{width: width / 1.1}}>
                <View style={[styles.measuresections, {gap: 60}]}>
                  <View style={styles.bannerIng}>
                    <Image source={loginImg} resizeMode="stretch" style={{}} />
                    <Text style={styles.textImg}>Mobility Measure</Text>
                  </View>
                  <View style={styles.textSections}>
                    <Text style={styles.heading}>Forget Password</Text>
                  </View>
                </View>

                <View style={styles.fieldContainers}>
                  <View style={[styles.textInput, {width: width / 1.1}]}>
                    <TextInput
                      placeholder="Enter Email Address"
                      placeholderTextColor={theme.colors.secondary}
                      style={{color: theme.colors.secondary}}
                      type="email"
                    />
                  </View>
                </View>
                <View style={styles.mainchangePassbtn}>
                  <TouchableOpacity onPress={handlePress}>
                    <View style={[styles.changePassbtn, {width: width / 1.1}]}>
                      <Text style={styles.btntxt}>Change Password</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;
