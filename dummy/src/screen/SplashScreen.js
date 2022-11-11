import React from 'react';
import {View, Text, StyleSheet,StatusBar,Image, TouchableOpacity} from 'react-native';

// import {Display} from '../utils';
const SplashScreen = ({navigation}) => {
  setTimeout(()=>{
    navigation.replace('Login')
   },3000)
    return (
        <View style={styles.container}>
         <StatusBar
            barStyle="light-content"
            backgroundColor={'white'}
            translucent
        />
        <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5x76H7TSUOmqAAvfuUek1_7Vndm7AQJh1g&usqp=CAU" }} style={{ width:200, height: 200 }} />
       
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    image: {
            Height:20,
            Width:5,
    },
  });
  
  export default SplashScreen;

// import React from "react";
// import { View, Text } from "react-native";

// const SplashScreen = () => {
//     return (
//         <View>
//             <Text>Splash Screen</Text>
//         </View>
//     )
// }

// export default SplashScreen;