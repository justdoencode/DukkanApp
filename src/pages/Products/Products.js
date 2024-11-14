import React,{useState,useEffect} from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text, View, VirtualizedList } from "react-native";
import Config from "react-native-config";
import axios from "axios";
import ProductCard from "./../../components/ProductCard/ProductCard"
import useFetch from "./../../hooks/useFetch/useFetch"
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";


const Products=({navigation})=>{

    const {loading,data,error}=useFetch(Config.API_PRODUCT_URL)
    const dispatch=useDispatch();

    if(loading){
        return <ActivityIndicator size={"large"}/>
    }
    if(error){
        return <Text>{error}</Text>
    }

    const handleProductSelect=(id)=>{
        navigation.navigate("DetailPage",{id})
    }

    const renderProduct=({item})=><ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/>;
    
    return(
        <SafeAreaView>
            <View>
                <Button title={"LogOut"} onPress={()=>dispatch({type:"SET_USER",payload:{user:null}})}/>
            </View>
            <FlatList
                data={data}
                renderItem={renderProduct}
            />
        </SafeAreaView>
    )
}

export default Products; 