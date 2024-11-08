import React from "react";
import { ActivityIndicator, Image, SafeAreaView, Text, View } from "react-native";
import styles from "./Detail.style";
import useFetch from "../../hooks/useFetch/useFetch";
import Config from "react-native-config";

const Detail=({route})=>{
    const {id}=route.params

    const {loading,error,data}=useFetch(Config.API_URL + "/" + id);

    if(loading){
        return <ActivityIndicator size={"large"}/>
    }
    if(error){
        <Text>{error}</Text>    
    }

    return( 
        <View style={styles.conteiner}>
            <Image style={styles.image} source={{uri: data.image}}/>
            <View style={styles.body_conteiner}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
            
        </View>
            
    )
}

export default Detail;