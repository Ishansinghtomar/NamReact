
// const a=React.createElement("h1",{id:"head"},"hello from react app");
// console.log(a);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(a);


// parrebt child relationa and sibling relation;
// const nested=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"head"},"hi ishan"),React.createElement("h1",{id:"tail"},"hi yash")]));
// console.log(nested)
// const main=ReactDOM.createRoot(document.getElementById("root"));
// main.render(nested);

//jsx to make life easy ====
// const a =React.createElement("h2",{id:"value"},"welcome to my world");
// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(a); 


const a=React.createElement("div",{id:"parent"},React.createElement("h2",{id:"child"},React.createElement("h1",{id:"gchild"},"welcome to my world")))
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(a); 