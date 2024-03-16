import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import Product from '../screen/Product';
import Account from '../screen/Account';
import Products from '../screen/BottomScreen/Products';
import ChairDescription from '../components/ChairDescription';
import Measure from '../screen/BottomScreen/Measure';
import Begin from '../components/Measure/Begin';
import PositionMeasure from '../components/Measure/PositionMeasure';
import MeasureCamera from '../components/Measure/MeasureCamera';
import MeasurementSave from '../components/Measure/MeasurementSave';
import ManageMeasure from '../screen/ManageMeasure';
import ProfileAccount from '../screen/BottomScreen/ProfileAccount';
import BottomTabs from '../components/BottomTabs';
import Myprofile from '../screen/AuthScreen/Myprofile';
import DealerID from '../screen/AuthScreen/DealerID';
import Login from '../screen/AuthScreen/Login';
import MeasureManagement from '../screen/AuthScreen/MeasureManagement';
import SignUp from '../screen/AuthScreen/SignUp';
import ForgetPassword from '../screen/AuthScreen/ForgetPassword';
import ChangePassword from '../screen/AuthScreen/ChangePassword';
import EmailVarified from '../screen/AuthScreen/EmailVarified';
import EditPassword from '../screen/AuthScreen/EditPassword';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name='ProfileAccount' component={ProfileAccount} />
                <Stack.Screen name='Measure' component={Measure} />
                <Stack.Screen name='Products' component={Products} /> */}

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="ChairDescription" component={ChairDescription} />
        <Stack.Screen name="Begin" component={Begin} />
        <Stack.Screen name="PositionMeasure" component={PositionMeasure} />
        <Stack.Screen name="MeasureCamera" component={MeasureCamera} />
        <Stack.Screen name="MeasurementSave" component={MeasurementSave} />
        <Stack.Screen name="ManageMeasure" component={ManageMeasure} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Myprofile" component={Myprofile} />
        <Stack.Screen name="DealerID" component={DealerID} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="EmailVarified" component={EmailVarified} />
        <Stack.Screen name="EditPassword" component={EditPassword} />
        <Stack.Screen name="MeasureManagement" component={MeasureManagement} />

        {/* <Stack.Screen name='CameraScreen' component={CameraScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
