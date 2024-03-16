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
import errow from '../../assets/icons/leftErrow.png';
import theme from '../../common/Theme';
import styles from '../../style/style';

const EditPassword = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handlePress = () => {
    Navigation.navigate('Myprofile');
  };
  const handlesubmit = () => {
    Navigation.navigate('BottomTabs');
  };
  return (
    <SafeAreaView style={{backgroundColor: theme.colors.white, flex: 1}}>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View>
              <View style={{width: width / 1.1}}>
                <View style={[styles.measuresections, {gap: 20}]}>
                  <TouchableOpacity onPress={handlePress}>
                    <Image
                      source={errow}
                      resizeMode="stretch"
                      style={{width: 22, height: 22, marginLeft: -4}}
                    />
                  </TouchableOpacity>
                  <View style={styles.textSection}>
                    <Text style={styles.heading}>Edit Password</Text>
                  </View>
                </View>
                <View style={styles.fieldContainer}>
                  <View style={[styles.textInput, {width: width / 1.1}]}>
                    <TextInput
                      placeholder="Current password"
                      placeholderTextColor={theme.colors.secondary}
                      style={{color: theme.colors.secondary}}
                      type="password"
                    />
                  </View>
                  <View style={[styles.textInput, {width: width / 1.1}]}>
                    <TextInput
                      placeholder="New Password"
                      placeholderTextColor={theme.colors.secondary}
                      style={{color: theme.colors.secondary}}
                      type="password"
                    />
                  </View>
                  <View style={[styles.textInput, {width: width / 1.1}]}>
                    <TextInput
                      placeholder="Repeat New Password "
                      placeholderTextColor={theme.colors.secondary}
                      style={{color: theme.colors.secondary}}
                      type="password"
                    />
                  </View>
                </View>
                <View style={styles.maineditPasswordBtn}>
                  <TouchableOpacity onPress={handlesubmit}>
                    <View
                      style={[styles.editPasswordBtn, {width: width / 1.1}]}>
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

export default EditPassword;
