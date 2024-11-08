import { useEffect,useState } from "react";
import axios from "axios";


function useFetch(url){
   
    const [data,setData]=useState([]);
    const [loading,setLoaging]=useState(true)
    const [error,setError]=useState()

    const fetchData=async()=>{
        try {
            const {data:responseData}=await axios.get(url)
            setData(responseData)
            setLoaging(false)
        } catch (error) {
            setLoaging(false)
            setError(error.message)
        }
           
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {error,loading,data}
    

}

export default useFetch;