import React, { useEffect, useState } from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./ProductCard.style";


const ProductCard=({product, onSelect})=>{

    
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.conteiner}>
            <Image
                style={styles.image}
                source={{uri:product.image}}
            />
            <View style={styles.body_conteiner}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
        
    )
}

export default ProductCard;