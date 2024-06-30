import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, SafeAreaView, Dimensions, StatusBar, FlatList, TouchableOpacity,} from 'react-native';


const{width,height}  = Dimensions.get('window')
 const  COLORS = {Primary:'#282534',white:'#fff'}



  const  Slide=({item})=>{
    return <View style={{alignItems:'center'}}>
      <Image source={item.img} style={{height:'70%',width:'50%',resizeMode:'contain'}}/>
       <Text style={styles.heading}>{item.heading}</Text>
       <Text style={styles.subHeading}>{item.subHeading}</Text>
    </View>
  }


const Slides = [
  {
    id: 1,
    img: require("../assets/Images/welcome3.png"),
    heading: "It’s simple,gggggggg eas",
    subHeading: "Climb thedigl in the industry smoothly"
  },
  {
    id: 2,
    img: require("../assets/Images/Welcome.png"),
    heading: "For you dreams... you can count on us.",
    subHeading: "the fih our abundance of experience and support."
  },
  {
    id: 3,
    img: require("../assets/Images/welcome2.png"),
    heading: "Simplify your journey toghts.",
    subHeading: "We bring . Start your journey under expert guidance with us"
  },
]


const OnboardingScreen = ({navigation})=>{
  const [currentSlideIndex,setCurrentSlideIndex] = React.useState(0)
 const  Footer = ()=>{
  return <View style ={{
    height:height*0.25,
    justifyContent:'space-between',
    paddingHorizontal:20,
  }}>
    <View style={{
      flexDirection:'row',
      justifyContent:'content',
      margin:20,
    }}>

      {Slides.map((_,index)=>(
<View key={index} style={[styles.indicator,currentSlideIndex==index&&{
  backgroundColor : COLORS.white ,
  width:25
}]}>
</View>
         ))}
         
         <View style={{marginBottom:20}}></View>
         <View style={{flexDirection:'row'}}></View>
         <TouchableOpacity style={[styles.btn,{backgroundColor:'transparent',borderWidth:1,borderColor:COLORS.white}]}>
          <Text style={{fontWeight:'bold',fontSize:15,color:COLORS.white}}>SKIP</Text>
         </TouchableOpacity>
         <TouchableOpacity style ={styles.btn}>
          <Text style={{fontWeight:'bold',fontSize:15}}>Next</Text>
         </TouchableOpacity>
    </View>

  </View>
 }



 const updateCurrentSliderIndex = e =>{
  const  contentOffsetX = e.nativeEvent.contentOffset.x;
  const  currentIndex =   Math.round(contentOffsetX/width)
  SetCurrentSliderIndex(currentIndex)
  console.log(currentIndex)
 }
  const  goNextSlide=()=>{
    const nextSlideIndex = currentSlideIndex+1;
    const offset = nextSlideIndex*width;
  };

  return <SafeAreaView  style= {{flex:1,backgroundColor:COLORS.Primary}}> 
  <StatusBar  backgroundColor={COLORS.Primary}/>

  <FlatList
   onMomentumScrollEnd = {updateCurrentSliderIndex}
  pagingEnabled
  data = {Slides} contentContainerStyle={{height:height*0.75}}
   horizontal
  showsHorizontalScrollIndicator={false}
  renderItem={({item})=> <Slide item={item}/>}
  />
  <Footer/>
  </SafeAreaView>
} 




const styles = StyleSheet.create({
  heading:{
    color:COLORS.white,
    fontSize:22,
    fontWeight:'bold',
    margin:20,
    textAlign:'center',
  },
  subHeading:{
    color:COLORS.white,
    fontSize:30,
    marginTop:10,
    maxWidth:'70%',
    textAlign:'center',
    // lineHeight:23,
    margin:20
  },
  indicator:{
    height:2.5,
    width:10,
    backgroundColor:'red',
    marginHorizontal:3,

  },
 
  btn:{
    flex:1,
    height:40,
    borderRadius:5,
    backgroundColor:COLORS.white,
    justifyContent:'center',
    alignItems:'center',
  }

})
export default OnboardingScreen