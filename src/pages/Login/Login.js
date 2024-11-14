import React from "react";
import { Alert, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./Login.style";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";


import { Formik } from "formik";
import usePost from "../../hooks/usePost/usePost";

import Config from "react-native-config";
import { useDispatch } from "react-redux";



const Login = () =>{
    
    const {data,loading,error,post}=usePost();
    const dispatch=useDispatch();

    
    if(error){
        Alert.alert("Dükkan","Bir hata oluştu")
    }
    if(data){
        if(data.status==="Error"){
            Alert.alert("Dükkan","Kullanıcı Bulunamadı")
        }else{
            dispatch({type:"SET_USER", payload:{user}});
        }
    }

    const handleLogin= (values) =>{
        post(Config.API_AUTH_URL + "/login", values)
    }
    
    return(
        <SafeAreaView style={styles.conteiner}>
            <View style={styles.logo_conteiner}>
                <Image style={styles.logo} source={require("../../asstes/icon.png") } />
            </View>

            <Formik
            initialValues={{username:"",password:""}}
            onSubmit={handleLogin}
            >
                {({handleSubmit,handleChange,values})=>(
                    <View style={styles.body_conteiner}>
                        <Input 
                            placeholder="Kullanıcı Adınızı Giriniz.."
                            value={values.username}
                            onType={handleChange('username')}
                        />
                        <Input 
                            placeholder="Şifrenizi Giriniz.." 
                            value={values.password}
                            onType={handleChange('password')}
                            />
                        <Button text="GİRİŞ YAP" onPress={handleSubmit} loading={loading}/>
                    </View>
                )}
                
            </Formik>
            
        </SafeAreaView>
    )

}

export default Login;

const user={
    "address": {
      "geolocation": {
        "lat": "-37.3159",
        "long": "81.1496"
      },
      "city": "kilcoole",
      "street": "new road",
      "number": 7682,
      "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
      "firstname": "john",
      "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
  };