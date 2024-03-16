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
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import theme from '../../common/Theme';
import styles from '../../style/style';
import loginImg from '../../assets/images/Camera/loginImg.png';

const Login = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handlePress = () => {
    Navigation.navigate('HomeScreen');
  };
  const handleSubmit = () => {
    Navigation.navigate('SignUp');
  };
  const handleforget = () => {
    Navigation.navigate('ForgetPassword');
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
                    <Text style={styles.heading}>Login</Text>
                    <TouchableOpacity onPress={handleSubmit}>
                      <Text style={styles.signup}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.fieldContainers}>
                  <View style={[styles.textInput, {width: width / 1.1}]}>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor={theme.colors.secondary}
                      style={{color: theme.colors.secondary}}
                      type="email"
                    />
                  </View>
                  <View style={[styles.textInput, {width: width / 1.1}]}>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor={theme.colors.secondary}
                      style={{color: theme.colors.secondary}}
                      type="password"
                    />
                  </View>
                  <TouchableOpacity onPress={handleforget}>
                    <Text style={styles.signup}>Forger Password?</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.Mtprofilebtn}>
                  <TouchableOpacity onPress={handlePress}>
                    <View style={[styles.profilebtn, {width: width / 1.1}]}>
                      <Text style={styles.btntxt}>Login</Text>
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

export default Login;
