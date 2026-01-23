const Parent=React.createElement("div",{clas:"parent"},
    React.createElement("div",{clas:"child"},
        React.createElement("H1",{},"Hi ishan")
    )
)
const Root=ReactDOM.createRoot(document.getElementById("root"))
console.log(Parent)
Root.render(Parent)