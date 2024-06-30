import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';

// import StackNavigation from './src/Routing/StackRoute';
// import CoverImage from './src/pages/content/coverImage';


import DrawerNavigation from './src/Routing/DrawerNavigation'
import SplashScreen from './src/pages/SplaceScreen/SplashScreen';
import StackNavigation from './src/Routing/StackRoute';
import CoverImage from './src/pages/content/coverImage';
import Main from './src/pages/content/Main';
import OnBoarding from './src/Slider/OnBoarding';
import MyComponent from './src/Slider/OnBoarding';
// import OnboardingScreen from './src/Slider/OnBoarding';
import HomeScreen from './src/Slider/HomeScreen';
import { StackActions } from '@react-navigation/native';
// import OnboardingScreens from './src/Slider/OnBoarding';

const App = () => {
  return (
  //  <OnboardingScreens/>
       <StackNavigation/>
    // <CoverImage />
   //  <HomeScreen/>
    // <View style={{ flex: 1 }}>
    //   {/* <CoverImage/> */}
    //   {/* <StackNavigation/> */}
   // <OnBoarding/>
   //<OnBoarding/>
     //  <DrawerNavigation/>
    //   <SplashScreen/>
    // </View>
  )
}

export default App