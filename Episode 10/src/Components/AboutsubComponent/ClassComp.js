import React from "react"
class ClassComp extends React.Component
{

    constructor(props)
    { 
        super(props);
        console.log(props)
        this.state={
            count:0
        }
    }
    render()
    {
        const {name,Contact}=this.props
       return (
    <div className="parent">
        <div className="count">{this.state.count}</div>
        <button onClick={()=>{
            this.setState({
                count: this.state.count+1
            })
        }}>Increase</button>
        <div className="name">Name:{name}</div>
        <div className="conta">Contact:{Contact}</div>
        <div className="post">Post:Engineer</div>
    </div>
)
    }
}
export default ClassComp