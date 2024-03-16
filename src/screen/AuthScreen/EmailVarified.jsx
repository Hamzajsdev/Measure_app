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
import React, {useMemo, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import theme from '../../common/Theme';
import styles from '../../style/style';
import loginImg from '../../assets/images/Camera/loginImg.png';
import {RadioGroup} from 'react-native-radio-buttons-group';

const EmailVarified = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const [selectedId, setSelectedId] = useState();
  const handlePress = () => {
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
                <View style={[styles.measuresections, {gap: 6}]}>
                  <View style={styles.bannerIng}>
                    <Image source={loginImg} resizeMode="stretch" style={{}} />
                    <Text style={styles.textImg}>Mobility Measure</Text>
                  </View>
                  <View style={styles.radioverification}>
                    <RadioGroup
                      radioButtons={radioButtons}
                      onPress={setSelectedId}
                      selectedId={selectedId}
                      labelStyle={styles.label}
                      containerStyle={styles.radioContainer}
                    />
                  </View>
                  <View style={styles.textSections}>
                    <Text style={styles.heading}>Email Varification</Text>
                  </View>
                </View>
                <View style={styles.textSection}>
                  <Text style={styles.description}>
                    Thanks for joining mobility measure. To finish sign up
                    please follow the instruction in your email.
                  </Text>
                </View>
                <View style={styles.textSectionbtn}>
                  <Text style={styles.description}>
                    Use the Button below if you havent recieved an email.
                  </Text>
                </View>
                <TouchableOpacity onPress={handlePress}>
                  <View style={[styles.changebtnEmail, {width: width / 1.1}]}>
                    <Text style={styles.btntxt}>Resent Email</Text>
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

export default EmailVarified;
