// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   ScrollView
// } from 'react-native';
// import CommonButton from '../../component/CommonButton';

// const Signin = () => {
//   const [mobileNumber, setMobileNumber] = useState('');

//   const handleLogin = () => {

//     console.log('Login button pressed');
//   };



//   return (
//     <ScrollView>
//       <View style={styles.container}>




//         <View style={{}}>
//           <Text style={styles.title}>Sign in to Continue</Text>
//         </View>
//  <View style={{ marginRight: "86%" }}>
//                     <Text style={{ backgroundColor: "#6C63FF", height: 7, borderRadius: 10, marginTop: 15 }}></Text>
//                 </View>


//         <View style={styles.imageContainer}>
//           {/* <Image source={require("../Images/Login.png")} /> */}

//         </View>
//         <Text style={styles.message}>
//           We will send you One Time Password (OTP) on this Mobile Number
//         </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your mobile number"
//           value={mobileNumber}
//           onChangeText={setMobileNumber}
//         />


//         <CommonButton
//           title={"Next"}
//           titleStyle={{ color: "white", fontWeight: "600" }}





//         />







//         {/* <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Next</Text>
//         </TouchableOpacity> */}
//       </View>



//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     // textAlign: 'center',
//     marginBottom: 20,
//   },
//   imageContainer: {
//     width: 325,
//     height: 284,

//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   message: {
//     textAlign: 'center',
//     marginBottom: "12%",
//     fontWeight: "300",
//     fontSize: 18
//   },
//   input: {
//     borderRadius: 10,
//     padding: 10,
//     width: '100%',
//     marginBottom: 20,
//     backgroundColor: "#C4C4C4"
//   },
//   button: {
//     backgroundColor: '#6C63FF',
//     padding: 10,
//     borderRadius: 5,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 18,
//   },
// });

// export default Signin;




import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import CommonButton from '../../component/CommonButton';


const Signin = ({ navigation }) => {

  const [mobileNumber, setMobileNumber] = useState('');

  const HandleLogin = () => {
    navigation.navigate("OTPVerification")
  }


  return (
    <View style={{ marginHorizontal: 20 }}>

      <View style={{ marginTop: "20%" }}>
        <Text style={{ fontWeight: "500", fontSize: 30, lineHeight: 36.31, color: "#000000" }}>
          Sign in to Continue
        </Text>
      </View>

      <View style={{ marginRight: "86%" }}>
        <Text style={{ backgroundColor: "#6C63FF", height: 7, borderRadius: 10, marginTop: 15 }}></Text>
      </View>





      <View style={{ marginTop: "10%" }}>
        <Image

          style={{ width: 325, height: 249 }}

          source={require('../../assets/Images/Login.png')} />
      </View>



      <View >
        <Text style={{ fontWeight: "300", fontSize: 18, fontStyle: "Montserrat", lineHeight: 26 }}>

          We will send you One Time Password (OTP) on this Mobile Number
        </Text>
      </View>

      <View style={{ marginTop: "10%" }}>
        <TextInput
          style={{
            borderRadius: 10,
            padding: 10,
            width: '100%',
            marginBottom: 20,
            backgroundColor: "#C4C4C4"
          }}
          placeholder="Enter your mobile number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
      </View>

      <CommonButton
        title={"Login"}
        onPress={HandleLogin}
      />

    </View>
  )
}

export default Signin