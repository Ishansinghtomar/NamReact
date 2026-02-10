import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {Menu_API} from '../utils/urls'


function ResMenu() {

const [mainData,setDatamain]=useState([]);
const[orignalData,setDataorignal]=useState([])
const params=useParams()


useEffect(()=>{
   fetchData()
},[])

const fetchData=async ()=>{
const apidata= await fetch(Menu_API+params.resid)
const json=await apidata.json()
console.log(json?.data?.cards)

setDatamain(json?.data?.cards)
setDataorignal(json?.data?.cards)
}

if( mainData.length == 0)
    return( <h1>Loading</h1>)

console.log(mainData[5]?.groupedCard?.cardGroupMap?.
REGULAR.cards[1].card.card.itemCards)
const {name,cuisines,costForTwoMessage}=mainData[2]?.card?.card?.info
const resDataMain=mainData[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
  return (
    <div className='menu'>
        <h1>{name}</h1>
       <p>{cuisines.join(",")}</p>
       <p>{costForTwoMessage}</p>
        <ul>
           {resDataMain?.map((item,index)=>{
           return <li key={index}>{item.card.info.name} - Rs.{item?.card?.info?.price/100}</li>

           })}
        </ul>
    </div>

  )
}

export default ResMenu