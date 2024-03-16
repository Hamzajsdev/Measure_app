import { View, Text, SafeAreaView, StatusBar, ScrollView, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../style/style'
import theme from '../../common/Theme'
import { boldFont, fontSizes } from './../../assets/fonts/font';
import { useNavigation } from '@react-navigation/native';
import { Fragment } from 'react';




const Begin = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()

    const handlePress = () => {
        Navigation.navigate('BottomTabs')
    }
    const handlesubmit = () => {
        Navigation.navigate('PositionMeasure')

    }



    return (
        <Fragment>
            <SafeAreaView style={{ backgroundColor: theme.colors.white, flex: 1, }}>
                <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <View>
                                <View style={[styles.measureSection, { width: width / 1.1 }]}>
                                    <View style={styles.textSection}>
                                        <Text style={styles.heading}>Before Your Begin</Text>
                                        <Text style={styles.description}>Ensure you follow these guidelines otherwise the measurement won't work correctly: </Text>
                                    </View>
                                    <View>
                                        <View style={{ marginTop: 30, gap: 15 }}>
                                            <Text style={styles.description}>•  No more than <Text style={{ fontWeight: boldFont.fontWeight, fontsize: fontSizes.x_medium }}>2m away</Text> from the camera.</Text>
                                            <Text style={styles.description}>• <Text style={{ fontWeight: boldFont.fontWeight, fontsize: fontSizes.x_medium }}> All</Text> of the person <Text style={{ fontWeight: boldFont.fontWeight, fontsize: fontSizes.x_medium }}> body</Text> is in view. </Text>
                                            <Text style={styles.description}>•  Follow the <Text style={{ fontWeight: boldFont.fontWeight, fontsize: fontSizes.x_medium }}>pose</Text> instruction.</Text>
                                            <Text style={styles.description}>•  The room and subject is <Text style={{ fontWeight: boldFont.fontWeight, fontsize: fontSizes.x_medium }}>well lit</Text>.</Text>
                                            <Text style={styles.description}>•  Avoid<Text style={{ fontWeight: boldFont.fontWeight, fontsize: fontSizes.x_medium }}> baggy</Text> clothes.</Text>

                                        </View>
                                    </View>
                                    <View>
                                        <View style={{ marginTop: 150 }}>
                                            <View style={[styles.btngroup, { width: width / 1.1 }]}>
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
        </Fragment>


    )
}

export default Begin