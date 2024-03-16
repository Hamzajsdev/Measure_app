import { View, Text, SafeAreaView, StatusBar, ScrollView, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import theme from '../../common/Theme'
import styles from '../../style/style'
import scale from '../../assets/icons/scale.png'
import user from '../../assets/icons/user.png'
import hash from '../../assets/icons/hash.png'
import logout from '../../assets/icons/logout.png'

const ProfileAccount = () => {
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('MeasureManagement')
    }
    const handleSubmit = () => {
        Navigation.navigate('Myprofile')
    }
    const handleDealerSubmit = () => {
        Navigation.navigate('DealerID')
    }
    const handleLogoutSubmit = () => {
        Navigation.navigate('Login')
    }
    

    

    const { width, height } = useWindowDimensions()
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
            <ScrollView>
                <View style={{ backgroundColor: theme.colors.white, width: width / 1, height: 100, justifyContent: 'center', paddingLeft: 20, }}>
                    <Text style={styles.heading}>Welcome Jamie</Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <View>
                            <View style={{ width: width / 1.1, gap: 20, marginTop: 20 }}>
                                <View style={styles.boxContainer}>
                                    <TouchableOpacity onPress={handlePress}>
                                        <View style={[styles.boxContent, { width: width / 2.36, }]}>
                                            <Image source={scale} resizeMode="stretch" style={{ width: 30, height: 30 }} />
                                            <Text style={styles.boxTxt}>Measurements</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleSubmit}>
                                        <View style={[styles.boxContent, { width: width / 2.36, }]}>
                                            <Image source={user} resizeMode="stretch" style={{ width: 30, height: 30 }} />
                                            <Text style={styles.boxTxt}>My Profile</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.boxContainer}>
                                    <TouchableOpacity onPress={handleDealerSubmit}>
                                        <View style={[styles.boxContent, { width: width / 2.36, }]}>
                                            <Image source={hash} resizeMode="stretch" style={{ width: 30, height: 30 }} />
                                            <Text style={styles.boxTxt}>Dealer ID</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleLogoutSubmit}>
                                    <View style={[styles.boxContent, { width: width / 2.36, }]}>
                                        <Image source={logout} resizeMode="stretch" style={{ width: 30, height: 30 }} />
                                        <Text style={styles.boxTxt}>Sign Out</Text>
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

export default ProfileAccount