import { View, Text, SafeAreaView, StatusBar, ScrollView, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../style/style'
import theme from '../../common/Theme'
import { useNavigation } from '@react-navigation/native';
import women from '../../assets/images/measureimg/women.png';

const PositionMeasure = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('Begin')
    }
    const handlesubmit = () => {
        Navigation.navigate('MeasureCamera')
    }
    return (
        <SafeAreaView style={{backgroundColor:theme.colors.white, flex: 1,}}>
            <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <View>
                            <View style={[styles.measureSection, { width: width / 1.1 }]}>
                                <View style={styles.textSection}>
                                    <Text style={styles.heading}>How to measure</Text>
                                    <Text style={styles.description}>On the next screen stand sideways with your entire body in view. Have your arms in the same position as the model.</Text>
                                </View>
                                <View>
                                    <View style={styles.wimg}>
                                        <Image source={women} resizeMode="stretch" style={{ width: width / 4.2, height: 400 }} />
                                    </View>
                                </View>
                                <View>
                                    <View>
                                        <View style={[styles.btngroups, { width: width / 1.1 }]}>
                                            <TouchableOpacity onPress={handlePress}>
                                                <View style={[styles.prebtn, { width: width / 2.31, }]}>
                                                    <Text style={styles.btnsecondary}>Back</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={handlesubmit}>
                                                <View style={[styles.nbtn, { width: width / 2.31, }]}>
                                                    <Text style={styles.btntxt}>Continue</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PositionMeasure