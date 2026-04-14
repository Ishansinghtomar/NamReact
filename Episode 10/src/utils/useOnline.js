const { useEffect, useState } = require("react")

const useOnline=()=>{
const[Online,setOnline]=useState(true)
useEffect(()=>{
window.addEventListener("online",()=> setOnline(true))
window.addEventListener("offline",()=>setOnline(false))
},[])
return Online
}

export default useOnline;