import { View, Text, SafeAreaView, StatusBar, ScrollView, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import errow from '../assets/icons/leftErrow.png'
import more from '../assets/icons/more.png'
import theme from '../common/Theme';
import styles from '../style/style';
import ChairModel from '../components/MeasurementModel/ChairModel';
import Modal from 'react-native-modal';


const ManageMeasure = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('BottomTabs');
    }
    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.white, flex: 1, }}>
            <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <View>
                            <View style={{ width: width / 1.1, }}>
                                <View style={[styles.measuresections, { gap: 20 }]}>
                                    <TouchableOpacity onPress={handlePress}>
                                        <Image source={errow} resizeMode="stretch" style={{ width: 22, height: 22, marginLeft: -4 }} />
                                    </TouchableOpacity>
                                    <View style={styles.textSection}>
                                        <Text style={styles.heading}>Measure Management</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={[styles.CardContent, { width: width / 1.1, }]}>
                                        <View style={styles.CardsContain}>
                                            <View style={styles.CardSection}>
                                                <Text style={styles.CardHeading}>Chair</Text>
                                                <TouchableOpacity onPress={toggleModal}>
                                                    <Image source={more} resizeMode="stretch" style={{ width: 20, height: 20 }} />
                                                </TouchableOpacity>
                                                <Modal isVisible={isModalVisible}>
                                                    <ChairModel onClose={closeModal} />
                                                </Modal>
                                            </View>
                                            <Text style={styles.CardDescription}>Monday 21st january 2024</Text>
                                        </View>
                                        <View style={styles.CardsContain}>
                                            <View style={styles.CardSection}>
                                                <Text style={styles.CardHeading}>Walker</Text>
                                                <TouchableOpacity onPress={toggleModal}>
                                                <Image source={more} resizeMode="stretch" style={{ width: 20, height: 20 }} />
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={styles.CardDescription}>Monday 21st january 2024</Text>
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

export default ManageMeasure