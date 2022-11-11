import React,{useState} from 'react';
import {StyleSheet, View, Text,Dimensions,FlatList,SafeAreaView,ScrollView,TouchableOpacity,Button,ImageBackground}from 'react-native';
import {Feather} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
// import App from "../screen/details.js";



const listTab =[
  {
    status:'All'
  },
  {
    status:'Casual'
  },
  {
    status:'Sick'
  }
]
const data =[
  {
    name:'Half day leave',
     day:'Dec 10',
    status:'Casual',
    reason:'Awaiting',
  },
  {
    name:'Full day leave',
     day:'Nove 20',
    status:'Sick',
    reason:'Awaiting',
  },
  {
    name:'Two days leave',
     day:'Oct 10 - Oct11',
    status:'Casual',
    reason:'Approved',
  },
  {
    name:'Full day leave',
     day:'July 20',
    status:'Sick',
    reason:'Approved',
  },
  {
    name:'Full day leave',
     day:'July 20',
    status:'Sick',
    reason:'Approved',
  },
]

const HomeScreen = ({navigation}) => {
  const [status,setStatus]=useState('All')
  const [datalist,setDatalist]=useState(data)

  const setStatusFilter=status=>{
    if (status !=="All"){
      setDatalist([...data.filter(e=>e.status===status)])
    } else {
      setDatalist(data)
    }
    setStatus(status)
}
const RenderItem = ({item,index}) => {
  return(
    
    
    <View key={index} style={{ width: Dimensions.get('screen').width/1.1,marginLeft: 10,marginBottom:10,  borderWidth:2,borderColor:'#EBEBEB', padding: 10,borderRadius: 10, justifyContent: 'center'}}>
   
   {/* <View style={{ width: Dimensions.get('screen').width/4,marginLeft: 200,borderRadius:20, marginTop:5, borderWidth:2,borderColor:'#EBEBEB', backgroundColor: '#ffdead',padding: 5,borderRadius: 10, justifyContent: 'center'}}>
     <Text style={{fontSize: 10, color: 'black' }}>{item.reason}</Text>   
   </View> */}
   <View style={styles.itemBody}>
   
     <Text style={{ fontSize: 18, color: 'black' }}>{item.name}</Text>   
   </View>
   <View style={styles.itemBody}>
     <Text style={{fontSize: 18, color: 'black' }}>{item.day}</Text>   
   </View>
   <View style={styles.itemBody}>
   <Text style={{fontSize: 11, color: 'green',marginLeft: 280,borderRadius: 10,borderWidth:2,borderColor:'#EBEBEB',backgroundColor: '#ffdead' }}>{item.reason}</Text>   
   </View>
   
   <View style={[styles.itemStatus,{Color: item.status === 'Casual'? 'green':'black'}]}>
     <Text style={{ fontSize: 18, color: 'blue',margintop:2}}>{item.status}</Text> 
      
   </View>
   
   
    </View>
    
    
 
 
  )
 }
const separator = () =>{
  return <View style={{height:1,backgroundColor:'#f1f1f1'}}/>
}

return (
  
            

    
      <SafeAreaView style={{paddingVertical:15}}>
        <View style={{backgroundColor:`#8a2be2`}}>
        
        <ImageBackground
           source={{ uri: "data:image/jpeg;base64,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" }}  
          style={{padding:10 ,marginTop:0}}>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <Feather name='bell' size={22} color='blue'  style={{position:'absolute',marginTop: 15, top:0, marginLeft:310, opacity:0.6 }}></Feather>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Newleave')}>
            <Feather name='plus-square' size={22} color='blue'    style={{position:'absolute', marginTop: 15,top:0, marginLeft:340, opacity:0.6 }}></Feather>
            </TouchableOpacity>
            <View style={{marginTop: 50,marginLeft: 10,}}>
                <Text style={{fontSize: 26,color:'black',fontWeight: 'bold'}}>Leaves</Text>
              
             </View>
             
</View>
         </ImageBackground>    
         </View>
        <View style={styles.listTab}>
          {
            listTab.map(e=>(
              <TouchableOpacity 
                 style={[styles.btnTab,status ===e.status && styles.btnTabActivate]}
                 onPress={() => setStatusFilter(e.status)}> 
                 
                <Text style={[styles.textTab,status ===e.status && styles.textTabActivate]}>{e.status}</Text>
             </TouchableOpacity>

            ))
          }
            </View>
            <ScrollView  >
           <FlatList
            
            data={datalist}
            keyExtractor={( e, i) => i.toString()}
            renderItem={RenderItem}
            ItemSeparatorComponent={separator}
         />  
          </ScrollView>  
          
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
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Newleave')}
        title="Go to and apply leave"
      />
    </View>
   
    
         
        </SafeAreaView>
        
     
  );
};
export default HomeScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab: {
    flexDirection:'row',
    alighnSelf:'center',
    marginBottom:10,
    marginTop:5,
    marginLeft:10,
  },
  btnTab:{
    width:120,
    flexDirection:'row',
    borderRadius:10,

    borderWidth:2,
    borderColor:'#EBEBEB',
    padding:10,
    justifyContent:'center',
  },
  textTab:{
    fontSize:16,
  },
  // btnTabActivate:{
  //  backgroundColor:'#fff',
  // },
  textTabActivate:{
    color:'blue',
  },
  // itemContainer:{
  //   flexDirection:'row',
  //   paddingVertical:15,
  // },
  itemStatus:{
    // flex:1,
    // justifyContent:'center',
    paddingHorizontal:0,
    width:100,
  },
  itemName:{
    fontSize:15,
  }
  
});


