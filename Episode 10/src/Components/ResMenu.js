import { useParams } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import useCardApi from '../utils/useCardApi';

function ResMenu() {

const params=useParams()
const mainData=useCardApi(params.resid) || [];

// useEffect(()=>{
//    fetchData()
// },[])

// const fetchData=async ()=>{
// const apidata= await fetch(Menu_API+params.resid)
// const json=await apidata.json()
// console.log(json?.data?.cards)

// setDatamain(json?.data?.cards)
// setDataorignal(json?.data?.cards)
// }

const online=useOnline()
if(online == false)
  return "Check Your Internet Connection"

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