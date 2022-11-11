import  React , { useState,useRef }from 'react';
import {StyleSheet, View, Text,TextInput,Dimensions,ImageBackground,Flatlist,SafeAreaView,TouchableOpacity,Button,Pressable,Alert, Modal}from 'react-native';
import {Feather} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomSheet from 'react-native-simple-bottom-sheet';
// import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
const data = [
  { label: 'Casual', value: '1' },
  { label: 'Sick', value: '2' },
  
];




export default function Newleave({ navigation }) {
 
  const [datePicker, setDatePicker] = useState(false);
  const panelRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(null);
  
 
  const [date, setDate] = useState(new Date());
  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };
    return (
      <View >
      
      
       
        
          <ImageBackground
          source={{ uri: "data:image/jpeg;base64,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" }}  
          style={{padding: 20}}>
           
            <View>
            <Feather name='chevron-left' size={22} color='blue' onPress={() => navigation.goBack()} style={{position:'absolute',marginTop: 30,marginLeft:20, top:0,  opacity:0.6 }} ></Feather>
            </View>
            <View style={{marginTop: 80,marginLeft: 30,}}>
                <Text style={{fontSize: 26,color:'black',fontWeight: 'bold'}}>New Leave</Text>
               
            </View>
            </ImageBackground>  
            <View style={{ width: Dimensions.get('screen').width/1.1,marginLeft: 10,marginBottom:10,marginTop:15,  borderWidth:2,borderColor:'#EBEBEB', padding: 10,borderRadius: 10, justifyContent: 'center'}}>
            <View style={ { marginTop: 10}}>
                <Text style={ {fontSize: 13,marginBottom: 6,fontWeight: 'bold'}}>Leavetype</Text>
                <TextInput style={ {width: '100%',height: 40,fontSize: 13,backgroundColor: '#dfe4ea',borderRadius: 4,paddingHorizontal: 10}}
                autoCapitalize={false}
                />
                
                

        {/* <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select the type"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }} */}

        {/* // renderLeftIcon={() => ( */}
           {/* <AntDesign style={styles.icon} color="black" name="Safety" size={20} /> */}
         {/* )} */}
        
     
      {/* <TextInput style={ {width: '100%',height: 40,fontSize: 13,backgroundColor: '#dfe4ea',borderRadius: 4,paddingHorizontal: 10}}
                autoCapitalize={false}
                /> */}
      
      
                
                
              

              </View>
              <View style={ { marginTop: 10}}>
                <Text style={ {fontSize: 13,marginBottom: 6,fontWeight: 'bold'}}>Cause</Text>
                <TextInput style={ {width: '100%',height: 40,fontSize: 13,backgroundColor: '#dfe4ea',borderRadius: 4,paddingHorizontal: 10}}
                autoCapitalize={false}
               
               
              />

              </View>
              <View style={ { marginTop: 10}} >
                <Text style={ {fontSize: 13,marginBottom: 6,fontWeight: 'bold'}}>From</Text>
                <View><Text style={ {width: '100%',height: 40,fontSize: 13,backgroundColor: '#dfe4ea',borderRadius: 4,paddingHorizontal: 10}}> {date.toDateString()}</Text></View>
                {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            // style={styleSheet.datePicker}
          />
        )}
        {!datePicker && (
          <View style={{ margin: 10 }}>
            <Button title="Pick a date" color="#8a2be2" onPress={showDatePicker} />
          </View>
        )}

              </View >    
              <View style={ { marginTop: 10}}>
                <Text style={ {fontSize: 13,marginBottom: 6,fontWeight: 'bold'}}>To </Text>
                <View><Text style={ {width: '100%',height: 40,fontSize: 13,backgroundColor: '#dfe4ea',borderRadius: 4,paddingHorizontal: 10}}> {date.toDateString()}</Text></View>
                {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            // style={styleSheet.datePicker}
          />
        )}
        {!datePicker && (
          <View style={{ margin: 10 }}>
            <Button title="Pick a date" color="#8a2be2" onPress={showDatePicker} />
          </View>
        )}
               

              </View>  
                 </View>
            <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Successfully applied🙌🙌</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Apply </Text>
      </Pressable>
    </View>

            {/* <TouchableOpacity  style={{ width:Dimensions.get('screen').width/1.1,backgroundColor: '#8a2be2',marginTop: 10,paddingVertical: 10,paddingHorizontal:10,borderRadius: 0,marginLeft:15}}>
              <Text style={{color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Apply For Leave</Text> */}
              
              {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View> */}
            
           
           
      </View>
    );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius:20,
    padding: 10,
    elevation: 4,
    width:Dimensions.get('screen').width/2,
    // width:Dimensions.get('screen').width/2,
    // backgroundColor: '#8a2be2',
    // marginTop: 10,
    // paddingVertical: -10,
    // paddingHorizontal:10,
    // marginLeft:15
    
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
    height:10,
    width:Dimensions.get('screen').width/2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:15
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

});
