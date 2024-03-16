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
import {useMemo} from 'react';
import {RadioGroup} from 'react-native-radio-buttons-group';

const SignUp = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const [selectedId, setSelectedId] = useState();

  const handlePress = () => {
    Navigation.navigate('EmailVarified');
  };
  const handleSubmit = () => {
    Navigation.navigate('Login');
  };

  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: '',
        value: 'option 1',
        selected: selectedId === 'option 1',
        color: theme.colors.primary,
      },
    ],
    [],
  );

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
                    <Text style={styles.heading}>Create Account</Text>
                    <TouchableOpacity onPress={handleSubmit}>
                      <Text style={styles.signup}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.fieldContainers}>
                  <View style={[styles.textInput, {width: width / 1.1}]}>
                    <TextInput
                      placeholder="First Name"
                      placeholderTextColor={theme.colors.secondary}
                      style={{color:theme.colors.secondary}}
                    />
                  </View>
                  <View style={[styles.textInput, {width: width / 1.1}]}>
                    <TextInput
                      placeholder="Last Name"
                      placeholderTextColor={theme.colors.secondary}
                      style={{color:theme.colors.secondary}}
                    />
                  </View>
                  <View style={[styles.textInput, {width: width / 1.1}]}>
                    <TextInput
                      placeholder="Email Address"
                      placeholderTextColor={theme.colors.secondary}
                      style={{color:theme.colors.secondary}}
                    />
                  </View>
                  <View style={[styles.textInput, {width: width / 1.1}]}>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor={theme.colors.secondary}
                      style={{color:theme.colors.secondary}}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: -30,
                    }}>
                    <View style={styles.radioHeader}>
                      <RadioGroup
                        radioButtons={radioButtons}
                        onPress={setSelectedId}
                        selectedId={selectedId}
                        labelStyle={styles.label}
                        containerStyle={styles.radioContainer}
                      />
                    </View>
                    <Text style={styles.signupDescription}>
                      By signing up you are agreeing to our{'\n'}{' '}
                      <Text>Privacy Policy</Text>{' '}
                    </Text>
                  </View>
                </View>

                <View style={styles.mainprofilebtnss}>
                <TouchableOpacity onPress={handlePress}>
                  <View style={[styles.profilebtnss, {width: width / 1.1}]}>
                    <Text style={styles.btntxt}>Create Account</Text>
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

export default SignUp;
