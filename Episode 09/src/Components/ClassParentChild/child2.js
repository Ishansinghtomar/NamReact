import React from "react";


class Child2 extends React.Component
{
constructor(props){
    super(props)
    console.log("Child2 Constructor")
}

componentDidMount()
{
console.log("Child2 Did Mount")
}


render()
{
    console.log("Child2 Render")
    return
}

}
export default Child2