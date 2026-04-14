import { useEffect, useState } from "react"
import { Menu_API } from "./urls";

const useCardApi=(resid)=>{
const [apidata,setapidata]=useState([]);

useEffect(()=>{
getdata()
},[])

const getdata=async ()=>{
const apidata=await fetch(Menu_API+resid)
const json= await apidata.json()
setapidata(json?.data?.cards)
}
return apidata;
}

export default useCardApi