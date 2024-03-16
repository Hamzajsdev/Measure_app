import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import Products from '../screen/BottomScreen/Products';
import Measure from '../screen/BottomScreen/Measure';
import ProfileAccount from '../screen/BottomScreen/ProfileAccount';
import theme from '../common/Theme';
import { fontSizes, mediumFont } from '../assets/fonts/font';





const BottomTabs = () => {
    const { height } = useWindowDimensions()
    const Tab = createBottomTabNavigator();


    const textStyle = {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    };



    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    let iconImage;
                    let ticketImg;
                    let containerStyle;

                    if (route.name === 'Products') {
                        iconImage = require('../assets/images/bottomTabs/box.png');
                    } else if (route.name === 'Measure') {
                        ticketImg = require('../assets/images/bottomTabs/ruler1.png');
                        containerStyle = {
                            backgroundColor: theme.colors.primary,
                            borderRadius: 100,
                            borderColor: 'white',
                            width: 130,
                            height: 45,
                            bottom: 10,
                            // paddingTop: 10,
                            // paddingLeft: 20,
                            // justifyContent: 'center',

                        };


                    } else if (route.name === 'Account') {
                        iconImage = require('../assets/images/bottomTabs/user.png');
                    }
                    const tintColor = focused ? theme.colors.primary : theme.colors.mdGray;
                    return (
                        <View >
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <Image source={iconImage} style={{ tintColor, width: 20, height: 20, bottom: -20, }} />
                            </View>
                            <View style={[containerStyle, { flexDirection: 'row', paddingTop: 10, paddingLeft: 12, }]}>
                                <Image source={ticketImg} style={{ width: 20, height: 20 }} />

                                <Text style={[textStyle, { marginLeft: 10 }]}>Measure +</Text>
                            </View>
                        </View>
                    )
                },

                tabBarStyle: {
                    backgroundColor: theme.colors.white,

                    height: height / 10,


                },
                tabBarLabel: ({ focused }) => {
                    const routeName = route.name;
                    const textColor = focused ? theme.colors.primary : theme.colors.mdGray;

                    switch (routeName) {
                        case 'Products':
                        case '':
                        case 'Account':
                            return <Text style={{ color: textColor, fontSize: fontSizes.small, fontWeight: mediumFont.fontWeight, bottom: 10 }}>{routeName}</Text>;
                        default:
                            return null;
                    }
                },
            })}
        >
            <Tab.Screen name="Products" component={Products} />
            <Tab.Screen name="Measure" component={Measure} />
            <Tab.Screen name="Account" component={ProfileAccount} />
        </Tab.Navigator>
        
    )
}
export default BottomTabs