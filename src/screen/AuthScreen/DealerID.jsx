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

const DealerID = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handlePress = () => {
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
                    <Text style={styles.heading}>Dealer ID</Text>
                    <Text style={styles.description}>
                      Enter the ID of the dealer you are associated with, They
                      will recieve your measurements and make product
                      recommendation
                    </Text>
                  </View>
                </View>

                <View style={styles.fieldContainer}>
                  <Text style={{color: theme.colors.primary}}>Edit</Text>
                  <View style={[styles.textInput, {width: width / 1.1}]}>
                    <TextInput
                      placeholder="00000000000000"
                      placeholderTextColor={theme.colors.secondary}
                      style={{color:theme.colors.secondary}}
                      type="text"
                    />
                  </View>
                </View>
                <View style={styles.mainprofilebtns}>
                <TouchableOpacity onPress={handlePress}>
                  <View style={[styles.profilebtns, {width: width / 1.1}]}>
                    <Text style={styles.btntxt}>Save Changes</Text>
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

export default DealerID;
