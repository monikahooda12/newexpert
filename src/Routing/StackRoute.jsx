import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OTPVerification from '../pages/Login/OtpVerification';

import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../Slider/HomeScreen';
import OnboardingScreen from '../Slider/OnboardingScreen';

const StackNavigation = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator>
                {/* <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name='signin' component={Signin} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="OTPVerification" component={OTPVerification} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name='onBoarding' component={OnBoarding} options={{headerShown:false}}/> */}
                 {/* <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />  */}
                <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} options={{ headerShown: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation