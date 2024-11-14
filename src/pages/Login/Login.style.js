import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:"#64b5f6",
    },
    logo_conteiner:{
        flex:1,
        justifyContent:"center",
    },
    body_conteiner:{
        flex:1,
    },
    logo:{
        width:Dimensions.get("window").width *0.9,
        height:Dimensions.get("window").height /3,
        resizeMode:"contain",
        tintColor:"white",
    }
})