import React from "react";


class Child1 extends React.Component
{
constructor(props){
    super(props)
    console.log("Child1 Constructor")
}

componentDidMount()
{
console.log("Child1 Did Mount")
}


render()
{
    console.log("Child1 Render")
    return
}

}
export default Child1