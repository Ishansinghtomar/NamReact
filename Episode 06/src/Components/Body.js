import RestCard from "./RestCard"
import resdata from "../utils/data"
import { useState } from "react"
import { useEffect } from "react"

//update resdata to get mock data 

const Body=()=>{
    const [Dataorignal,setDataorignal]=useState([]);
    const [Datamain,setDatamain]=useState([]);
    const [search,setsearch]=useState("");
    const fetchData= async ()=>{
        const apidata= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.567225&lng=77.3970354&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json =await apidata.json();

     console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      let API_Data_value  =json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setDatamain(API_Data_value);
        setDataorignal(API_Data_value)
    }
    useEffect(()=>{
        fetchData();
    },[])

// if(Dataorignal.length === 0)
// {
//     return <h1>Loading...</h1>
// }optimised

return Dataorignal.length === 0 ?(<h1>Loading...</h1>):(
        <div className="body">
            <div className="Filter-btn">
                          <div className="search">
                    <input type="text"className="search-bar" value={search} placeholder="Search restaurants..." onChange={(e)=>setsearch(e.target.value)}/>
                    <button className="btn" onClick={()=>{
                        const searchfilter=Dataorignal.filter((res)=>( res?.info?.name.toLowerCase().includes(search.toLowerCase())
                            
                    ))
                        setDatamain(searchfilter)
                    }}>Search</button>
                </div>
                <button className="btn" onClick={()=>{
                    setDatamain(Dataorignal);
                }
                }>All Outlets </button>  
                <button className="btn" onClick={()=>{
                    const topval=Dataorignal.filter((val)=> val.info.avgRating > 4.2)
                    setDatamain(topval);
                }
                }>Top Rated Outlets </button>  
                <button className="btn" onClick={()=>{
                    const topval1=Dataorignal.filter((val)=> val.info.sla.deliveryTime < 30)
                    setDatamain(topval1);
                }
                }>Quick Dileverables </button>   
                  <button className="btn" onClick={()=>{
                    const topval1=Dataorignal.filter((val)=> val.info.cuisines.includes("Burgers"))
                    setDatamain(topval1);
                }
                }>Burger Outlets </button> 
                  <button className="btn" onClick={()=>{
                    const topval1=Dataorignal.filter((val)=>  val.info.cuisines.includes("Pizzas"))
                    setDatamain(topval1);
                }
                }> Pizza Outlets </button> 
             </div>
             
            <div className="res-container">
           {
            Datamain.map((resturarant)=>
                <RestCard data={resturarant} key={resturarant.info.id} ></RestCard>

           )
           }
            </div>

        </div>
    )
}

export default Body