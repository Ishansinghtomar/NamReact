import RestCard from "./RestCard"
import resdata from "../utils/data"
import { useState } from "react"

const Body=()=>{
    const [Datamain,setDatamain]=useState(resdata)
    return (
        <div className="body">
            <div className="Filter-btn">
                <button className="btn" onClick={()=>{
                    setDatamain(resdata);
                }
                }>All Outlets </button>  
                <button className="btn" onClick={()=>{
                    const topval=resdata.filter((val)=> val.info.avgRating > 4.2)
                    setDatamain(topval);
                }
                }>Top Rated Outlets </button>  
                <button className="btn" onClick={()=>{
                    const topval1=resdata.filter((val)=> val.info.sla.deliveryTime < 30)
                    setDatamain(topval1);
                }
                }>Quick Dileverables </button>   
                  <button className="btn" onClick={()=>{
                    const topval1=resdata.filter((val)=> val.info.cuisines.includes("Burgers"))
                    setDatamain(topval1);
                }
                }>Burger Outlets </button> 
                  <button className="btn" onClick={()=>{
                    const topval1=resdata.filter((val)=>  val.info.cuisines.includes("Pizzas"))
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