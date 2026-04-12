import React from "react";


class Child3 extends React.Component
{
constructor(props){
    super(props)
    console.log("Child3 Constructor")
}

componentDidMount()
{
console.log("Child3 Did Mount")
}


render()
{
    console.log("Child3 Render")
    return
}

}
export default Child3