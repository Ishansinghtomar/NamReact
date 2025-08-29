import ResContainer from "./ResContainer.js";
import Data from "../Utils/data.js"

const Body=()=>
{ let top=Data;
    return(
<div className="body">
    <div className="filter-btn">
        <button onClick={()=>{
            top=Data.filter((a)=> a?.info?.avgRating >= 4)

        }
    } 
        >Filter Top Rated</button>
    </div>
    <div className="res-container">
        <ResContainer resData={Data[0]}/> 
        {top.map((resturarnt)=>(
            <ResContainer resData={resturarnt} key={resturarnt?.info?.id}/>  
        ))}

    </div>

</div>


    )
}
export default Body;