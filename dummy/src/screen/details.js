import React,{useState} from 'react';
import {StyleSheet, View, Text,Dimensions,Flatlist,SafeAreaView,TouchableOpacity}from 'react-native';
import {Feather} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
// import App from "../screen/details.js";

const listTab =[
  {
    status:'All'
  },
  {
    status:'casual'
  },
  {
    status:'Sick'
  }
]
const data =[
  {
    name:'half day leave',
    //  day:'dec 10',
    // status:'Casual',
  },
  {
    name:'half day leave',
    //  day:'nove 20',
    // status:'Sick',
  }
]

const App = () => {
  const [status,setStatus]=useState('All')
  const setStatusFilter=status=>{
    setStatus(status)
}
const renderItem = ({item,index}) => {
    return(
     <View key={index} >
     <View >
       <Text >{item.name}</Text>   
     </View>
   
     </View>
   
   
    )
   }

return (
    
      <SafeAreaView >
        {/* <View>
            <Feather name='bell' size={22} color='blue'  style={{position:'absolute',marginTop: -50, top:0, marginLeft:310, opacity:0.6 }}></Feather>
            <Feather name='plus-square' size={22} color='blue'   onPress={() => navigation.navigate('Form')} style={{position:'absolute', marginTop: -50,top:0, marginLeft:340, opacity:0.6 }}></Feather>
            <View style={{marginBottom: 0,marginLeft: 0,}}>
                <Text style={{fontSize: 26,color:'black',fontWeight: 'bold'}}>Leaves</Text>
             </View>
         </View>     */}
        <View >
          {
            listTab.map(e=>(
              <TouchableOpacity 
                
                 onPress={() => setStatusFilter(e.status)}> 
                 
                <Text >{e.status}</Text>
             </TouchableOpacity>

            ))
          }
            </View>
           <Flatlist 
            data={data}
            keyExtractor={( e, i) => i.toString()}
            renderItem={renderItem}
         />    
          
           {/* <View style={{ width: Dimensions.get('screen').width/1.1,marginLeft: 0,marginBottom:10,  borderWidth:2,borderColor:'#EBEBEB', padding: 10,borderRadius: 10, justifyContent: 'center'}}>
                     
                    <Feather name='chevron-right' size={22} color='#8a2be2'  style={{position:'absolute', top:10, marginLeft:290, opacity:0.6 }}></Feather>
                    <Text style={{ fontSize: 18, color: 'black' }}>Half day application</Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>Wed 16,dec</Text>
                     <Text style={{ fontSize: 18, color: '#8a2be2'}}>Casual</Text>
                     <View style={{ width: Dimensions.get('screen').width/4,marginLeft: 200,borderRadius:20,  borderWidth:2,borderColor:'#EBEBEB', backgroundColor: '#ffdead',padding: 10,borderRadius: 10, justifyContent: 'center'}}> 
                     <Text style={{ fontSize: 10 ,color:'#daa520' }}>Awaiting</Text>
                    </View>
              </View>
              <View style={{ width: Dimensions.get('screen').width/1.1,marginLeft: 0,marginTop:5,  borderWidth:2,borderColor:'#EBEBEB', padding: 10,borderRadius:10, justifyContent: 'center'}}>
                     
                    <Feather name='chevron-right' size={22} color='#8a2be2'  style={{position:'absolute', top:10, marginLeft:290, opacity:0.6 }}></Feather>
                    <Text style={{ fontSize: 18, color: 'black' }}>full day application</Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>Wed 16,nov</Text>
                     <Text style={{ fontSize: 18, color: '#8a2be2' }}>Sick</Text>
                     <View style={{ width: Dimensions.get('screen').width/4,marginLeft: 200, borderWidth:2,borderColor:'#EBEBEB', padding: 10,borderRadius: 10, justifyContent: 'center',backgroundColor: '#9acd32',}}> 
                     <Text style={{ fontSize: 10, color: 'green' }}>Approved</Text>

                    </View>
              </View>
              <View style={{ width: Dimensions.get('screen').width/1.1,marginLeft: 0,marginBottom:10,marginTop:15,  borderWidth:2,borderColor:'#EBEBEB', padding: 10,borderRadius: 10, justifyContent: 'center'}}>
                     
                    <Feather name='chevron-right' size={22} color='#8a2be2'  style={{position:'absolute', top:10, marginLeft:290, opacity:0.6 }}></Feather>
                    <Text style={{ fontSize: 18, color: 'black' }}>Half day application</Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>Wed 16,dec</Text>
                     <Text style={{ fontSize: 18, color: '#8a2be2' }}>Casual</Text>
                     <View style={{ width: Dimensions.get('screen').width/4,marginLeft: 200,borderRadius:20,  borderWidth:2,borderColor:'#EBEBEB', backgroundColor: '#ffdead',padding: 10,borderRadius: 10, justifyContent: 'center'}}> 
                     <Text style={{ fontSize: 10 ,color:'#daa520' }}>Awaiting</Text>
                    </View>
              </View> */}
         
        </SafeAreaView> 
  );
};
export default App;



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     justifyContent: 'center',
//   },
//   listTab: {
//     flexDirection:'row',
//     alighnSelf:'center',
//     marginBottom:20,
//   },
//   btnTab:{
//     width:120,
//     flexDirection:'row',
//     borderRadius:10,

//     borderWidth:2,
//     borderColor:'#EBEBEB',
//     padding:10,
//     justifyContent:'center',
//   },
//   textTab:{
//     fontSize:16,
//   },
//   btnTabActivate:{
//    backgroundColor:'#fff',
//   },
//   textTabActivate:{
//     color:'blue',
//   },
//   itemContainer:{
//     flexDirection:'row',
//     paddingVertical:15,
//   },
//   itemBody:{
//     flex:1,
//     justifyContent:'center',
//     paddingHorizontal:10,
//   },
//   itemName:{
//     fontSize:15,
//   }
  
// });


