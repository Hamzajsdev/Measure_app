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
import React, {useState} from 'react';
import styles from '../../style/style';
import theme from '../../common/Theme';
import Modal from 'react-native-modal';
import ShareMeasureModel from './ShareMeasureModel';

const ChairModel = ({onClose}) => {
  const {width, height} = useWindowDimensions();

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleClearAll = () => {
    onClose();
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View style={{width: width / 1.1, marginTop: height / 1.48}}>
              <View style={{gap: 12}}>
                <TouchableOpacity onPress={toggleModal}>
                  <View style={[styles.modelContainer, {width: width / 1.1}]}>
                    <Text style={styles.modelDescription}>
                      Share Measurement
                    </Text>
                  </View>
                </TouchableOpacity>
                <Modal isVisible={isModalVisible}>
                  <ShareMeasureModel onClose={closeModal} />
                </Modal>
                <TouchableOpacity onPress={toggleModal}>
                  <View style={[styles.modelContainer, {width: width / 1.1}]}>
                    <Text style={styles.modelDescription}>
                      Delete Measurement
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleClearAll}>
                  <View style={[styles.modelContainer, {width: width / 1.1}]}>
                    <Text style={styles.modelDescriptions}>Cancle</Text>
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

export default ChairModel;
