import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import PhoneInput from 'react-native-phone-number-input'

const CountryCode = ({navigation}) => {
    const [phoneNumber,setPhoneNumber] = useState('')

  return (
    <View style = { styles.Container } >
        <View style = { styles.Title }>
            <Text style ={{fontSize: 35, fontWeight: 'bold', color: '#191970'}} >
                Continue with
            </Text>
            <Text style ={{fontSize: 35, fontWeight: 'bold', color: '#191970'}} >
                Phone
            </Text> 
        </View>
        <View style = { styles.Phone } >
            
            <View>
                <Text style = {{
                    marginLeft: 3,
                    }}>
                    Enter Phone Number
                </Text>
            </View>
            <PhoneInput style = {{
                backgroundColor:'#FFF',
                placeholder: "Enter Phone Number",
            }}
                defaultvalue = {phoneNumber}
            />
        </View>
        <View style = {styles.alerttext}>
            <Text style = {{ fontWeight: '700', fontSize: 15 }}>
                We'll send you a text with a four(4) digit to your device.
            </Text>
        </View>
        <View style = { styles.button }>
            <TouchableOpacity  onPress={() => navigation.navigate('Verification',{phoneNumber})}>
                <View style={styles.continue}>
                    <Text style={{fontSize: 18,
      lineHeight: 18 * 1.4,
      color: 'white',}}>Continue</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CountryCode

const styles = StyleSheet.create({
    Container:{
        flex:0,
        width:'100%',
    },
    Title:{
        marginTop: '20%',
        marginLeft: 40,
    },
    Phone:{
        marginTop: '20%',
        marginLeft: 40,
    },
    alerttext:{
        marginTop: '10%',
        marginLeft: 40,
    },
    button:{
        marginTop: 50,
        marginLeft: 40,
    },
    continue: { 
        backgroundColor: '#191970',
        borderRadius: 8, 
        marginHorizontal: 5, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '85%', 
        height: 45,
    }
});