import React from "react";
import Child1 from "./Child1";
import Child2 from "./child2";
import Child3 from "./Child3";
class Parent1 extends React.Component
{
constructor(props){
    super(props)
    console.log("Parent Constructor")
}

componentDidMount()
{
console.log("Parent Did Mount")
}


render()
{
    console.log("Parent Render")
    return(
        <div className="parent101">
          <Child1></Child1>
          <Child2></Child2>
          <Child3></Child3>
        </div>

    )
}

}

export default Parent1