import React from "react";
import { ActivityIndicator, SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products/Products";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";




const Stack=createNativeStackNavigator();
function Router(){

  const userSession=useSelector(s=>s.user);
  const isAuthLoading=useSelector(s=>s.isAuthLoading);
  return(
    <NavigationContainer>
        {isAuthLoading ?(
          <ActivityIndicator size={"large"}/>
        ): !userSession ? (
          <Stack.Navigator>
          <Stack.Screen name="LoginPage" component={Login} options={{headerShown:false}}/>
          </Stack.Navigator>
        ):(
          <Stack.Navigator>
          <Stack.Screen name="ProductsPage" component={Products} options={{
            title:"Dükkan",
            headerStyle:{backgroundColor:"#64b5f6"},
            headerTitleAlign:"center",
            headerTitleStyle:{color:"white"}
        }}/>

        <Stack.Screen name="DetailPage" component={Detail} options={{
          title:"Detay",
          headerStyle:{backgroundColor:"#64b5f6"},
          headerTitleAlign:"center",
          headerTitleStyle:{color:"white"},
          headerTintColor:"white",
        }}/>
        </Stack.Navigator>
        )}
    </NavigationContainer>
  )
  
}

export default Router;