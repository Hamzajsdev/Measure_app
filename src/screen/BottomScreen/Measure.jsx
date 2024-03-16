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
import React, {useState, useMemo} from 'react';
import {RadioGroup} from 'react-native-radio-buttons-group';
import {useNavigation} from '@react-navigation/native';
import styles from '../../style/style';
import theme from '../../common/Theme';

const Measure = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const [selectedId, setSelectedId] = useState();
  const handlePress = id => {
    setSelectedId(id);
  };
  const handlesubmit = () => {
    Navigation.navigate('Begin');
  };

  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Walker ',
        value: 'option 1',
        selected: selectedId === 'option 1',
        color: theme.colors.primary,
      },
      {
        id: '2',
        label: 'Rollators ',
        value: 'option 2',
        selected: selectedId === 'option 2',
        color: theme.colors.primary,
      },
      {
        id: '3',
        label: 'Wheelchair ',
        value: 'option 3',
        selected: selectedId === 'option 3',
        color: theme.colors.primary,
      },
      {
        id: '4',
        label: 'Riser Recliner Chairs ',
        value: 'option 4',
        selected: selectedId === 'option 4',
        color: theme.colors.primary,
      },
      {
        id: '5',
        label: 'Mobility Scooters',
        value: 'option 5',
        selected: selectedId === 'option 5',
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
          <View style={{paddingBottom: 40}}>
            <View>
              <View style={[styles.measureSection, {width: width / 1.1}]}>
                <View style={styles.textSection}>
                  <Text style={styles.heading}>
                    What kind of product are you measuring for?
                  </Text>
                  <Text style={styles.description}>
                    Please select what type of product you are measuring for:{' '}
                  </Text>
                </View>

                <View style={styles.radioHeader}>
                  <RadioGroup
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    labelStyle={styles.label}
                    containerStyle={styles.radioContainer}
                  />
                </View>

                <TouchableOpacity
                  style={[
                    styles.btnInactive,
                    {
                      backgroundColor: selectedId
                        ? theme.colors.primary
                        : theme.colors.lightGray,
                    },
                    {width: width / 1.1},
                  ]}
                  disabled={!selectedId}
                  onPress={handlesubmit}>
                  <Text
                    style={[
                      styles.btntxt,
                      {
                        color: selectedId
                          ? theme.colors.white
                          : theme.colors.mdGray,
                      },
                    ]}>
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Measure;
