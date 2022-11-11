
import React, {useContext, useState } from "react";
import axios from "axios";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet,Dimensions,TouchableWithoutFeedback, Keyboard } from "react-native";
import { AuthContext } from "../context/AuthContext";
import {Feather} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
// import { Icon } from 'react-native-elements';
import {useRegisterUserMutation} from '../../services/authentication';
import Constants from "expo-constants";

const baseUrl = "http://10.0.0.2:8000/api/user";


const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const onChangeNameHandler = (name) => {
    setName(name);
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };
  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };
  const onChangePassword2Handler = (password2) => {
    setPassword2(password2);
  };

  const onSubmitFormHandler = async (event) => {
    if (!name.trim() || !email.trim()) {
      alert("Name or Email is invalid");
      return;
    }
    setIsLoading(true);
    axios.post("http://10.0.0.2:8000/api/user/register/", {
      name:name,
      email: email,
      password: password,
      password2:password2,
    })
    .then((response) => {
      console.log(response);
    });
    // try {
    //   const response = await axios.post(`${baseUrl}/register/`, {
    //     name,
    //     email,
    //     password,
    //     password2
    //   });
    //   if (response.status === 201) {
    //     alert(` You have created: ${JSON.stringify(response.data)}`);
    //     console.log(response.data);
    //     setIsLoading(false);
    //     setName('');
    //     setEmail('');
    //     setPassword('');
    //     setPassword2('');
    //   } else {
    //     throw new Error("An error has occurred");
    //   }
    // } catch (error) {
    //   alert("An error has occurred");
    //   setIsLoading(false);
    // }
  };
  // const clearTextInput = () => {
  //   setName('')
  //   setEmail('')
  //   setPassword('')
  //   setPassword2('')
  // }
  // const [userRegister] = useRegisterUserMutation()
  // const handleFormSubmit = async () => {
  //   const formData = { name, email, password, password2 }
  //   const res = await userRegister(formData)
  //   console.log("Response", res)
  //   if (res.data) {
  //     console.log("Response Data", res.data)
  //     // await storeToken(res.data.token)  // Store Token in Storage
  //     clearTextInput()
  //     navigation.navigate('Login')
  //   }
  // }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            {/* <View style={styles.logoBox}>
              <Icon
                color='#fff'
                name='comments'
                type='font-awesome'
                size={50}
              />
            </View> */}
            <Text style={styles.loginTitleText}>Register</Text>
            <View style={styles.hr}></View>


            
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Username</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                keyboardType='user-name'
                textContentType='username'
                value={name}
                onChangeText={onChangeNameHandler}
              />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput style={styles.input}
                
             
                keyboardType='email-address'
                textContentType='email'
                value={email}
                onChangeText={onChangeEmailHandler}
              />

            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                
                secureTextEntry={true}
                textContentType='password'
                value={password}
                onChangeText={onChangePasswordHandler}
              />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Confirmpassword</Text>
                <TextInput style={styles.input}
                
                secureTextEntry={true}
                textContentType='password2'
                value={password2}
                onChangeText={onChangePassword2Handler}
              />
            </View>
            <TouchableOpacity 
            
            style={styles.loginButton}
            onPress={onSubmitFormHandler}>
               {/* onPress={() => navigation.navigate('Login')} > */}
              <Text style={styles.loginButtonText} >Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.registerText}>
                Already have an account? Login Now
              </Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#ff6b81',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#ff7979',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '15%',
  },
  authBox: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#eb4d4b',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#ff4757',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});
export default RegisterScreen;




