import React,{useState,useEffect} from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text } from "react-native";
import Config from "react-native-config";
import axios from "axios";
import ProductCard from "./../../components/ProductCard/ProductCard"
import useFetch from "./../../hooks/useFetch/useFetch"


const Products=({navigation})=>{

    const {loading,data,error}=useFetch(Config.API_URL)

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
            <FlatList
                data={data}
                renderItem={renderProduct}
            />
        </SafeAreaView>
    )
}

export default Products; 