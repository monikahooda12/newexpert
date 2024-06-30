// import React, { useState } from 'react';
// import { View,  Button, SafeAreaView, Dimensions } from 'react-native';
// import Onboarding from 'react-native-onboarding-swiper';





// const OnBoardings = ({ navigation }) => {
//     const onNext = () => {
//       // Handle the "Next" button click============================
//     };

//     const onSkip = () => {
//       // Handle the "Skip" button click=================================================
//     };

//     const [boarding,setBoarding] = useState(
//         [

//           {
//             backgroundColor: '#fff',
//             image:require('../assets/Images/Welcome.png'),

//         //   style={{ width: 209, height: 150 }}

//             title: 'Welcome to Our App',
//             subtitle: 'Lorem ipsum dolor sit amet',
//           },
//           {
//             backgroundColor: '#eee',
//             image: require('../assets/Images/welcome2.png'),
//             title: 'Discover Great Features',
//             subtitle: 'Lorem ipsum dolor sit amet',
//           },
//           {
//             backgroundColor: '#f9f9f9',
//             image: require('../assets/Images/welcome3.png'),
//             title: 'Get Started Now',
//             subtitle: 'Lorem ipsum dolor sit amet',
//           },
//         ]

//         )

//     // return (
//     //   <Onboarding
//     //     onSkip={onSkip}
//     //     onDone={() => navigation.navigate('Signin')}
//     //     pages={
//     //         [
//     //       {
//     //         backgroundColor: '#fff',
//     //         image:require('../assets/Images/Welcome.png'),

//     //     //   style={{ width: 209, height: 150 }}

//     //         title: 'Welcome to Our App',
//     //         subtitle: 'Lorem ipsum dolor sit amet',
//     //       },
//     //       {
//     //         backgroundColor: '#eee',
//     //         image: require('../assets/Images/welcome2.png'),
//     //         title: 'Discover Great Features',
//     //         subtitle: 'Lorem ipsum dolor sit amet',
//     //       },
//     //       {
//     //         backgroundColor: '#f9f9f9',
//     //         image: require('../assets/Images/welcome3.png'),
//     //         title: 'Get Started Now',
//     //         subtitle: 'Lorem ipsum dolor sit amet',
//     //       },
//     //     ]}
//     //   />
//     // );
//     return <>
//     <SafeAreaView 
//     style={{flex:1}}
//     >

//         <View>

//         </View>
//     </SafeAreaView>
//     </>
//   };

//   // export default OnBoardings;==========================




// import React, { useState } from 'react'
// import { Button, Image, Text, View } from 'react-native'
// import AppIntroSlider from 'react-native-app-intro-slider'

// // import { COLORS, SIZES } from './src/Assets/constants/thems'
// // import { Colors } from 'react-native/Libraries/NewAppScreen'
// import { COLORS, SIZES } from './thems'
// import { Color } from '../assets/Colors/Color'

// const slides=[
//     {
//     id:1,
//     title:'Discover best please',
//     description:'lorum fdgd dfdfffffffffff fdfdfdddddddddddddd dfdfdff dfddfd',
//     image:require('../assets/Images/Welcome.png')
//     },
//     {
//         id:2,
//         title:'Discover best please',
//         description:'lorum fdgd dfdfffffffffff fdfdfdddddddddddddd dfdfdff dfddfd',
//         image:require('../assets/Images/welcome2.png')
//     },
//     {
//             id:3,
//             title:'Discover best please',
//             description:'lorum fdgd dfdfffffffffff fdfdfdddddddddddddd dfdfdff dfddfd',
//             image:require('../assets/Images/welcome3.png')
//    },


// ]


// const OnBoarding = () => {

//     const [showHomePage,setShowHomePage] = useState(false);

//     const handleNavigate = () => {
//         navigation.navigate('signin'); // Navigate to the 'login' screen============================
//       };

//      const  buttonlabel=(label)=>{
//         return(
//             <View style={{
//                 padding:12,}}>

//             <Text style={{
//                 color:Color.title,
//                 fontWeight:"600",
//                 fontSize:SIZES.h4
//             }}>
//             {label}
//             </Text>
//             </View>
//         )

//      }

//  if(!showHomePage){
//     return(
//         <AppIntroSlider
//         data={slides}
//         renderItem={({item})=>{
//             return(
//                 <View style={{
//                     flex:1,
//                     alignItems:'center',
//                     padding:'15',
//                     paddingTop:'100'
//                 }}>
//                 <Image 
//                 source={item.image}
//                 style={{ width:SIZES.width-80,
//                     height:400,}}
//                     resizeMode="contain"


//                 />

//                 <Text style={{
//                    fontWeight:'bold',
//                    color:COLORS.title,
//                    fontSize:SIZES.h1,

//                 }}>{item.title} </Text>
//                 <Text 
//                 style={{
//                     textAlign:'center',
//                     paddingTop:5,
//                     color:COLORS.title
//                 }}
//                 >{item.description} </Text>
//                 </View>

//             )


//         }}

//         activeDotStyle={{
//             backgroundColor:COLORS.primary,
//             width:30,
// }}
// showSkipButton
// //  renderNextButton={()=>buttonlabel('next')}
// renderNextButton={()=>buttonlabel('next')}
//  renderSkipButton={()=> buttonlabel("skip")}
//  renderDoneButton={()=>buttonlabel("done")}
//  onDone={()=>{
//     setShowHomePage(true);
//  }}
//   />



//     )
//  }




//   return (
//     <View style={{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//     }}>
//       <Text>Welcome</Text>
//       <Button title="Go to Home Screen" onPress={handleNavigate} />
//  </View>
//   )
// }

// export default OnBoarding




import React, { useRef, useState } from 'react'
import { View, Text, Dimensions, StatusBar, FlatList, Animated, TouchableOpacity, ImageBackground } from 'react-native'
// import Onboarding from 'react-native-onboarding-swiper';
import StepIndicator from './StepIndigator'
import LinearGradient from 'react-native-linear-gradient'

const OnboardingScreens = () => {
  const { width, height } = Dimensions.get('window')
  const [currentIndex, setCurrentIndex] = useState(0)
  const onBoardRef = useRef(null)

  const onScroll = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x
    const index = Math.floor(contentOffsetX / width)
    setCurrentIndex(index)
  }

  const gotoNext = () => {
    if (currentIndex < Data.length - 1) {
      onBoardRef.current.scrollToIndex({ index: currentIndex + 1 })
    } else {
      // Handle "Get Started" action
      console.log('Get Started Pressed')
    }
  }

  const Data = [
    {
      id: 1,
      img: require("../assets/Images/logo.png"),
      heading: "It’s simple, easy, and accessible with Milestone 101",
      subHeading: "Climb the bridge between you and your big breaks with our digital hub and credibility. Excel in the industry smoothly"
    },
    {
      id: 2,
      img: require("../assets/Images/Welcome.png"),
      heading: "For you dreams... you can count on us.",
      subHeading: "the first step is the hardest, and we ensure that you take it right with our abundance of experience and support."
    },
    {
      id: 3,
      img: require("../assets/Images/welcome2.png"),
      heading: "Simplify your journey to reach the heights.",
      subHeading: "We bring artists and opportunities closer through our professional digital platform. Start your journey under expert guidance with us"
    },
  ]

  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'light-content'}
        animated
        showHideTransition={'fade'}
      />
      <View style={{ flex: 1, position: 'relative' }}>
        <FlatList
          data={Data}
          ref={onBoardRef}
          bounces={false}
          onMomentumScrollEnd={onScroll}
          scrollEnabled={true}
          horizontal
          pagingEnabled
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={{ flex: 1 }}>
                <ImageBackground
                  style={{
                    width: width,
                    height: height,
                  }}
                  resizeMethod='resize'
                  resizeMode='cover'
                  source={item.img}
                >
                  <View style={{
                    alignItems: 'center', flex: 1,
                    justifyContent: 'flex-end'
                  }}>
                    <Text style={{
                      fontSize: 28,
                      color: '#FFFFFF', 
                      fontFamily: 'SemiBold',
                      width: '70%',
                      textAlign: 'center',
                      top: "-20%"
                    }}>{item.heading}</Text>


                    <Text style={{
                      fontSize: 28,
                      color: '#FFFFFF', 
                      fontFamily: 'SemiBold', 
                      width: '70%',
                      textAlign: 'center',
                      top: "-20%"
                    }}>{item.subHeading}</Text>
                  </View>
                </ImageBackground>
              </View>
            )
          }}
        />
        <View style={{ position: "absolute", bottom: 40, alignItems: "center", width: width }}>
          <View style={{ marginBottom: "2%" }}>
            <StepIndicator total={Data.length} count={currentIndex} />
          </View>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: "90%", borderRadius: 16 }} colors={['#FF6347', '#FF4500']}>
            <TouchableOpacity
              onPress={gotoNext}
              style={{ width: "100%", height: 52, justifyContent: "center", alignItems: "center" }} >
              <Text style={{ color: '#FFFFFF', fontFamily: 'SemiBold' }}> 
                {currentIndex < 2 ? "Next" : "Get Started"}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={{ position: "absolute", top: "9%", right: "9%" }}>
          {currentIndex < 2 && (
            <TouchableOpacity onPress={() => setCurrentIndex(2)}>
              <Text style={{ fontFamily: 'Regular', color: '#FFFFFF', fontSize: 20 }}> 
                Skip
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  )
}
export default OnboardingScreens
