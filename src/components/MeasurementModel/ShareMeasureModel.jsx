import { View, Text, SafeAreaView, StatusBar, ScrollView, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../style/style'
import theme from '../../common/Theme'


const ShareMeasureModel = ({ onClose }) => {
    const { width, height } = useWindowDimensions()
    const handleClearAll = () => {
        onClose();
    };
    return (
        <SafeAreaView >
            <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <View style={{ width: width / 1.1, marginTop:height/1.43 }}>
                            <View>
                                <View style={{ backgroundColor: theme.colors.white, width: width / 1.1, height: 180, borderRadius: 12, paddingTop: 20, paddingLeft: 20, paddingRight: 20, }}>
                                    <View style={styles.deleteModel}>
                                        <Text style={styles.ModelTitle}>Are you Sure?</Text>
                                        <Text style={styles.ModelDescription}>Are you sure you want to delete this list? you will not be able to undo this section</Text>
                                    </View>
                                    <View style={styles.DeleteModelHeader}>
                                    <TouchableOpacity onPress={handleClearAll}>
                                        <View style={[styles.ModelBtnHead,{  width:width/2.6, }]}>
                                            <Text style={styles.ModelTitlebtn}>No</Text>
                                        </View>
                                </TouchableOpacity>
                                        <View style={[styles.ModelBtnHead2,{  width:width/2.6, }]}>
                                            <Text style={styles.ModelTitlebtn2}>Yes</Text>
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

export default ShareMeasureModel