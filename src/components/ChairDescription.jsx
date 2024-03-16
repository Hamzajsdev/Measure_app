import { View, Text, SafeAreaView, ScrollView, useWindowDimensions, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../style/style'
import theme from '../common/Theme'
import leftErrow from '../assets/icons/leftErrow.png'
import wheelchair from '../assets/images/Camera/wheelchair.png'
import { useNavigation } from '@react-navigation/native'

const ChairDescription = () => {
    const { width } = useWindowDimensions()
    const [activeButton, setActiveButton] = useState(1);
    const Navigation = useNavigation()
    const handleSubmit = () => {
        Navigation.navigate('Products')
    }

    return (
        <SafeAreaView style={{backgroundColor:theme.colors.white, flex: 1,}}>
            <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
            <ScrollView>
                <View style={[styles.container, { position: 'relative' }]}>
                    <View>
                        <View style={{ width: width / 1.1 }}>
                            <View style={styles.descriptionContainer}>
                                <TouchableOpacity onPress={handleSubmit}>
                                    <Image source={leftErrow} resizeMode='stretch' style={{ width: 20, height: 20 }} />
                                </TouchableOpacity>
                                <Image source={wheelchair} resizeMode='stretch' style={{ width: 160, height: 180 }} />
                            </View>
                            <View style={styles.DesHeader}>
                                <Text style={styles.cardno}>MLTSA43018</Text>
                                <View style={styles.navHeading}>
                                    <Text style={styles.chairDes}>Wheel Chairs</Text>
                                    <Text style={styles.chairDes}>£159.99</Text>
                                </View>
                            </View>

                            <View style={[styles.btngroupst, { width: width / 1.1 }]}>
                                <TouchableOpacity
                                    onPress={() => setActiveButton(1)}
                                    style={[styles.nbtn, {
                                        width: width / 2.31,
                                        backgroundColor: activeButton === 1 ? theme.colors.primary : 'transparent',
                                        borderWidth: 1,
                                        borderColor: activeButton === 1 ? theme.colors.primary : theme.colors.mdGray,
                                    }]}
                                >
                                    <Text style={[styles.btntxt, { color: activeButton === 1 ? theme.colors.white : theme.colors.secondary }]}>Description</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => setActiveButton(2)}
                                    style={[styles.prebtn, {
                                        width: width / 2.31,
                                        backgroundColor: activeButton === 2 ? theme.colors.primary : 'transparent',
                                        borderWidth: 1,
                                        borderColor: activeButton === 2 ? theme.colors.primary : theme.colors.mdGray,

                                    }]}
                                >
                                    <Text style={[styles.btnsecondary, { color: activeButton === 2 ? 'white' : theme.colors.secondary }]}>Feature</Text>
                                </TouchableOpacity>

                            </View>
                            <View>
                                {activeButton === 1 ? (
                                    <Text style={[styles.description, { marginTop: 20 }]}>A wheelchair is a manually operated or power- driven device designed primarily for use by an individual with a mobility disability for the main purpose of indoor, or of both indoor and outdoor, locomotion.</Text>

                                ) : (
                                    <View style={{ marginTop: 10 }}>
                                        <Text style={styles.description}>Seats. The seat is most wheelchair is made   of nylon or vinly because both material are durable and easy to clean ... </Text>
                                        <Text style={styles.description}>• Seat Size  ... </Text>
                                        <Text style={styles.description}>• Seat Height ... </Text>
                                        <Text style={styles.description}>• Seat Height ... </Text>
                                        <Text style={styles.description}>• Seat Weight ... </Text>
                                    </View>
                                )}
                            </View>

                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={[styles.btnWheel, { width: width / 1.1, }]}>
                <Text style={styles.btntxt}>Buy-£159.99</Text>
            </View>
        </SafeAreaView>
    )
}

export default ChairDescription