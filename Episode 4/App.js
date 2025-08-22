import React from "react";
import ReactDOM from "react-dom/client"
import Data from "./data.js"

const AppLayout=()=>{
    return(
<div className="app">
<Header/>
<Body/>
</div>
    )
}

const style1={backgroundColor:"red"}

const Header=()=>
    {
        return(
        <div className="header" style={style1}>
            <div className="logo">
                <img src="https://shorturl.at/iWvPU" alt="" />
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                      <li>Contact Us</li>
                        <li>Cart</li>
                    
                </ul>
            </div>
        </div>
        )
    }
const Body=()=>
{
    return(
<div className="body">
    <div className="Search">Search</div>
    <div className="res-container">
        <ResContainer resData={Data[0]}/> 
        {Data.map((resturarnt)=>(
            <ResContainer resData={resturarnt} key={resturarnt?.info?.id}/>  
        ))}

    </div>

</div>


    )
}

const ResContainer=(props)=>{
    const cdn="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" 

    const {name,costForTwo}=props?.resData?.info
    return(
<div className="res-card">
    {console.log(props)}
    <img src={cdn + props?.resData?.info?.cloudinaryImageId} ></img>
    <h5>{name}</h5>
    <h6>{props?.resData?.info?.cuisines.join(",")}</h6>
    <h6>{props?.resData?.info?.avgRating}</h6>
    <h6>{costForTwo}</h6>
    <h6>{props?.resData?.info?.sla?.deliveryTime} Minutes</h6>
   
   </div>
    )
}



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
