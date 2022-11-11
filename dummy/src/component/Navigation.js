import React, { useState } from "react";
import { View, Text,Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screen/HomeScreen.js";
import LoginScreen from "../screen/LoginScreen.js";
import RegisterScreen from "../screen/RegisterScreen.js";
import Newleave from "../screen/Newleave.js";
import VerificationScreen from "../screen/VerificationScreen.js";
import SplashScreen from "../screen/SplashScreen.js";
import CountryCode from "../screen/Phonenumber.js";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../component/Drawernavigation.js';
import {Feather} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import ProfileScreen from "../screen/ProfileScreen.js";



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Navigation = () => {
    return (
         <NavigationContainer>
               <Stack.Navigator>    
             {/* <Drawer.Navigator optinos={{ headerTitle:''
        }}
        initialRouteName="Home"
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
              headerStyle:{
                backgroundColor:"#009387"
              },
            //   headerShown: false,
              headerTitle:'',
              drawerActiveBackgroundColor: '#009387',
              drawerActiveTintColor: '#fff',
              drawerInactiveTintColor: '#009387',
              drawerLabelStyle: {
                // marginLeft: -25,
                
                fontSize: 15,
              },
            }}
            > 
        <Drawer.Screen name="Home" component={HomeScreen} 
        />
        <Drawer.Screen name="Newleave" component={Newleave}
         />
         <Drawer.Screen name="Profile" component={ProfileScreen}
         />
      </Drawer.Navigator>   */}
                    <Stack.Screen name="Splash"
                component={SplashScreen}
                options={{headerShown: false}}
                />      
                <Stack.Screen 
                 name="Login"
                 component={LoginScreen}
                 options={{headerShown: false}}
                 />  
                   <Stack.Screen 
                  name="Register"
                 component={RegisterScreen}
                 options={{headerShown: false}}
                 />     
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                optinos={{headerShown: false}}
                 />     
                  <Stack.Screen
                 name="Newleave"
                component={Newleave}
               options={{headerShown: false}} 
                 />        
                   <Stack.Screen
                name="CountryCode"
                component={CountryCode} 
                options={{headerShown: false}}
                />      
                 <Stack.Screen
                name="Verification"
                component={VerificationScreen}
                options={{headerShown: false}}
              /> 
              <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen} 
                options={{headerShown: false}}
                />         
                   
            
               </Stack.Navigator>      
        </NavigationContainer>
    )
}
export default Navigation;