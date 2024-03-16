import { View, Text, SafeAreaView, StatusBar, ScrollView, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../style/style'
import theme from '../common/Theme'
import chair from '../assets/images/measureimg/chair.png'
import user from '../assets/images/measureimg/user.png'
import { useNavigation } from '@react-navigation/native'



const Account = () => {
    const Navigation = useNavigation()
    const handlePress = () => {
      Navigation.navigate('Product')
    }
    const handlesubmit = () => {
      Navigation.navigate('BottomTabs')
    }

    const { width, height } = useWindowDimensions()
    return (
        <SafeAreaView style={{backgroundColor:theme.colors.white, flex: 1,}}>
          <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
          <ScrollView>
            <View style={styles.container}>
              <View>
                <View>
                  <View style={[styles.wapper, { width: width / 1.1 }]}>
                    <View style={styles.headerSection}>
                      <Image source={chair} resizeMode='cover' style={styles.img} alt='chair-img' />
                      <Image source={user} resizeMode='stretch' alt='measure-img' />
                    </View>
                    <View style={styles.textSection}>
                      <Text style={styles.heading}>Your Account</Text>
                      <Text style={styles.description}>Head Over to My Account to manage all aspects of your account. including your past measurement and personal detail   </Text>
                    </View>
                  </View>
                  <View>
                    <View style={[styles.btngroup, { width: width / 1.1 }]}>
                      <TouchableOpacity onPress={handlePress}>
                      <View style={[styles.prebtn, { width: width / 2.31, }]}>
                        <Text style={styles.btnsecondary}>Previous</Text>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={handlesubmit}>
                      <View style={[styles.nbtn, { width: width / 2.31, }]}>
                        <Text style={styles.btntxt}>Finish</Text>
                      </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
}

export default Account