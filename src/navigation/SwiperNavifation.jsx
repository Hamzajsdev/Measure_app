import React, { useState } from 'react';
import { View, TouchableOpacity, useWindowDimensions } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import HomeScreen from '../screen/HomeScreen';
import Product from '../screen/Product';
import Account from '../screen/Account';


const SwiperNavifation = () => {
    const { width } = useWindowDimensions();
    const [index, setIndex] = useState(0);
  
    const handleIndexChange = (index) => {
      setIndex(index);
    };
  
    const handlePressProduct = () => {
      setIndex(1);
    };
  
    const handlePressAccount = () => {
      setIndex(2);
    };
    return (
        <View style={{ flex: 1 }}>
        <SwiperFlatList
          index={index}
          onChangeIndex={handleIndexChange}
          showPagination
          paginationActiveColor='black'
          paginationDefaultColor='gray'
          paginationStyleItem={{ width: 10, height: 10, margin: 2 }}
        >
          <View style={{ width }}>
            <TouchableOpacity onPress={handlePressProduct}>
              <HomeScreen />
            </TouchableOpacity>
          </View>
          <View style={{ width }}>
            <TouchableOpacity onPress={handlePressAccount}>
              <Product />
            </TouchableOpacity>
          </View>
          <View style={{ width }}>
            <Account />
          </View>
        </SwiperFlatList>
      </View>
    )
}

export default SwiperNavifation