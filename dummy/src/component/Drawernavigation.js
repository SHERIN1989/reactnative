import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#009387'}}>
        {/* <ImageBackground
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvVPZXwZytugqIVDXSQqPHd4h4zLhbEU6XQ&usqp=CAU" }}  
          style={{padding: 20}}> */}
        
          <Image
            source={{ uri: "https://us.123rf.com/450wm/pandavector/pandavector1901/pandavector190105594/126045801-isolated-object-of-avatar-and-dummy-icon-collection-of-avatar-and-image-vector-icon-for-stock-.jpg?ver=6" }}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          /> 
          
         <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            Anna Mariyam
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
             
                marginRight: 5,
              }}>
            Go....
            {/* </ImageBackground> */}
            </Text>
           
            {/* <FontAwesome5 name="coins" size={14} color="#fff" /> */}
          </View>
      
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
       
      </DrawerContentScrollView>
      
      
      {/* {/* <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
             <Ionicons name="share-social-outline" size={22} /> */}
             {/* <Text
              style={{
                fontSize: 15,
            
                marginLeft: 5,
              }}>
              profile
            </Text> 
           </View>
         </TouchableOpacity> 
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}> */}
           <View style={{flexDirection: 'row', alignItems: 'center'}}>
             {/* <Ionicame="exit-outline" size={22} />   */}
             <Text
               style={{
                 fontSize: 15,
                
                marginLeft: 5,
             }}>
             Sign Out
            </Text>
           </View>
         {/* </TouchableOpacity> */}
      {/* </View>  */}
    </View>
  );
};

export default CustomDrawer;