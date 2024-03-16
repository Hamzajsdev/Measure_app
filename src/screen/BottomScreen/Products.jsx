import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import theme from '../../common/Theme';
import styles from '../../style/style';
import chairs from '../../assets/images/Camera/chairs.png';
import {useNavigation} from '@react-navigation/native';
import SwiperFlatList from 'react-native-swiper-flatlist';

const Products = () => {
  const [activeButton, setActiveButton] = useState(1);
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handlepress = () => {
    Navigation.navigate('ChairDescription');
  };
  return (
    <SafeAreaView style={{backgroundColor:theme.colors.white, flex: 1,}}>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      <ScrollView>
        <View style={styles.container}>
          <View style={{marginBottom: 40}}>
            <View style={{width: width / 1.1}}>
              <View style={styles.tabsContainer}>
                <Text style={styles.heading}>Wheelschairs</Text>

                <SwiperFlatList
                  autoplay={false}
                  autoplayDelay={2}
                  autoplayLoop
                  index={3}>
                  <View style={[styles.tabsSection]}>
                    <TouchableOpacity
                      onPress={() => setActiveButton(1)}
                      style={[
                        styles.tabsBtn,
                        {
                          width: width / 2.8,
                          backgroundColor:
                            activeButton === 1
                              ? theme.colors.primary
                              : theme.colors.lightGray,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.TabsText,
                          {
                            color:
                              activeButton === 1
                                ? theme.colors.white
                                : theme.colors.secondary,
                          },
                        ]}>
                        Wheelschairs
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setActiveButton(2)}
                      style={[
                        styles.tabs2Btn,
                        {
                          width: width / 4.5,
                          backgroundColor:
                            activeButton === 2
                              ? theme.colors.primary
                              : theme.colors.lightGray,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.Tabs2Text,
                          {
                            color:
                              activeButton === 2
                                ? theme.colors.white
                                : theme.colors.secondary,
                          },
                        ]}>
                        Chairs
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setActiveButton(3)}
                      style={[
                        styles.tabs2Btn,
                        {
                          width: width / 4.5,
                          backgroundColor:
                            activeButton === 3
                              ? theme.colors.primary
                              : theme.colors.lightGray,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.Tabs2Text,
                          {
                            color:
                              activeButton === 3
                                ? theme.colors.white
                                : theme.colors.secondary,
                          },
                        ]}>
                        Beds
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setActiveButton(4)}
                      style={[
                        styles.tabs2Btn,
                        {
                          width: width / 4.5,
                          backgroundColor:
                            activeButton === 4
                              ? theme.colors.primary
                              : theme.colors.lightGray,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.Tabs2Text,
                          {
                            color:
                              activeButton === 4
                                ? theme.colors.white
                                : theme.colors.secondary,
                          },
                        ]}>
                        Chairs
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setActiveButton(5)}
                      style={[
                        styles.tabs2Btn,
                        {
                          width: width / 4.5,
                          backgroundColor:
                            activeButton === 5
                              ? theme.colors.primary
                              : theme.colors.lightGray,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.Tabs2Text,
                          {
                            color:
                              activeButton === 5
                                ? theme.colors.white
                                : theme.colors.secondary,
                          },
                        ]}>
                        Beds
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setActiveButton(6)}
                      style={[
                        styles.tabs2Btn,
                        {
                          width: width / 4.5,
                          backgroundColor:
                            activeButton === 6
                              ? theme.colors.primary
                              : theme.colors.lightGray,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.Tabs2Text,
                          {
                            color:
                              activeButton === 6
                                ? theme.colors.white
                                : theme.colors.secondary,
                          },
                        ]}>
                        Others
                      </Text>
                    </TouchableOpacity>
                  </View>
                </SwiperFlatList>
              </View>
              <View>
                {activeButton === 1 ? (
                  <View style={styles.mainCard}>
                    <View style={styles.cardContainer}>
                      <TouchableOpacity onPress={handlepress}>
                        <View style={[styles.cardHeader, {width: width / 2.3}]}>
                          <View style={styles.cardImg}>
                            <Image source={chairs} />
                          </View>
                          <View style={styles.pdRight}>
                            <Text style={styles.cardno}>F1500</Text>
                            <Text style={styles.cardTxt}>
                              Lorem ipsum sit amet dolor in consectetur.
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={handlepress}>
                        <View style={[styles.cardHeader, {width: width / 2.3}]}>
                          <View style={styles.cardImg}>
                            <Image source={chairs} />
                          </View>
                          <View style={styles.pdRight}>
                            <Text style={styles.cardno}>F1500</Text>
                            <Text style={styles.cardTxt}>
                              Lorem ipsum sit amet dolor in consectetur.
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.cardContainer}>
                      <View style={[styles.cardHeader, {width: width / 2.3}]}>
                        <View style={styles.cardImg}>
                          <Image source={chairs} />
                        </View>
                        <View style={styles.pdRight}>
                          <Text style={styles.cardno}>F1500</Text>
                          <Text style={styles.cardTxt}>
                            Lorem ipsum sit amet dolor in consectetur.
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.cardHeader, {width: width / 2.3}]}>
                        <View style={styles.cardImg}>
                          <Image source={chairs} />
                        </View>
                        <View style={styles.pdRight}>
                          <Text style={styles.cardno}>F1500</Text>
                          <Text style={styles.cardTxt}>
                            Lorem ipsum sit amet dolor in consectetur.
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.cardContainer}>
                      <View style={[styles.cardHeader, {width: width / 2.3}]}>
                        <View style={styles.cardImg}>
                          <Image source={chairs} />
                        </View>
                        <View style={styles.pdRight}>
                          <Text style={styles.cardno}>F1500</Text>
                          <Text style={styles.cardTxt}>
                            Lorem ipsum sit amet dolor in consectetur.
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.cardHeader, {width: width / 2.3}]}>
                        <View style={styles.cardImg}>
                          <Image source={chairs} />
                        </View>
                        <View style={styles.pdRight}>
                          <Text style={styles.cardno}>F1500</Text>
                          <Text style={styles.cardTxt}>
                            Lorem ipsum sit amet dolor in consectetur.
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                ) : (
                  <View style={styles.mainCard}>
                    <View style={styles.cardContainer}>
                      <TouchableOpacity onPress={handlepress}>
                        <View style={[styles.cardHeader, {width: width / 2.3}]}>
                          <View style={styles.cardImg}>
                            <Image source={chairs} />
                          </View>
                          <View style={styles.pdRight}>
                            <Text style={styles.cardno}>F1500</Text>
                            <Text style={styles.cardTxt}>
                              Lorem ipsum sit amet dolor in consectetur.
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={handlepress}>
                        <View style={[styles.cardHeader, {width: width / 2.3}]}>
                          <View style={styles.cardImg}>
                            <Image source={chairs} />
                          </View>
                          <View style={styles.pdRight}>
                            <Text style={styles.cardno}>F1500</Text>
                            <Text style={styles.cardTxt}>
                              Lorem ipsum sit amet dolor in consectetur.
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Products;
