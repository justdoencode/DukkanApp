
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

import styles from "./Button.style";



const Button = ({text,onPress,loading}) =>{
    return(
        <TouchableOpacity style={styles.conteiner} onPress={onPress} disabled={loading}>
           
            {loading ? (
                <ActivityIndicator color="White"/>
            ):(
                <Text style={styles.title}>{text}</Text>
            )}
            
        </TouchableOpacity>
    )
}


export default Button;