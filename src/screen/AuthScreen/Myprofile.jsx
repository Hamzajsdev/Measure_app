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

const Myprofile = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handlePress = () => {
    Navigation.navigate('EditPassword');
  };
  const handleSubmit = () => {
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
                  <TouchableOpacity onPress={handleSubmit}>
                    <Image
                      source={errow}
                      resizeMode="stretch"
                      style={{width: 22, height: 22, marginLeft: -4}}
                    />
                  </TouchableOpacity>
                  <View style={styles.textSection}>
                    <Text style={styles.heading}>My Profile</Text>
                  </View>
                </View>

                <View>
                  <View>
                    <View style={styles.prifileContainer}>
                      <Text style={styles.profileDes}>Welcome</Text>
                      <Text style={styles.profileHeader}>Jamei Alexander</Text>
                    </View>
                  </View>

                  <View style={styles.fieldContainer}>
                    <View style={[styles.textInput, {width: width / 1.1}]}>
                      <TextInput
                        placeholder="Jamei Alexander"
                        placeholderTextColor={theme.colors.secondary}
                        style={{color:theme.colors.secondary}}
                        type="text"
                      />
                    </View>
                    <View style={[styles.textInput, {width: width / 1.1}]}>
                      <TextInput
                        placeholder="Email"
                        placeholderTextColor={theme.colors.secondary}
                        style={{color:theme.colors.secondary}}
                        type="email"
                      />
                    </View>
                    <View style={[styles.textInput, {width: width / 1.1}]}>
                      <TextInput
                        placeholder="Password"
                        placeholderTextColor={theme.colors.secondary}
                        style={{color:theme.colors.secondary}}
                        type="password"
                      />
                    </View>
                  </View>
                </View>
                
                <View style={styles.Mtprofilebtn}>
                <TouchableOpacity onPress={handlePress}>
                  <View style={[styles.profilebtn, {width: width / 1.1}]}>
                    <View>
                      <Text style={styles.btntxt}>Save Changes</Text>
                    </View>
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

export default Myprofile;
