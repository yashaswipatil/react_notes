import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";

const heading = React.createElement("div" , {class :"title"} , [React.createElement("h1" , {} , "hello world!") , React.createElement("h2" , {} , "we have just started learning react")  , React.createElement("h3", {} , "we shall share all the experiences with you on this journey") ] )

// const jsxHeading = <h1 id="heading">Yesashwini is here</h1>
const jsxHeading = (<div className="title">
<h1>hello world!</h1>
            <h2>we have just started learning react</h2>
            <h3>we shall share all the experiences with you on this journey</h3>
</div>);

const FunctionalHeading = function () {
    return (
        <div className="title">
             <Navbar/>
            <h1>hello world!</h1>
            <h2>we have just started learning react</h2>
            <h3>we shall share all the experiences with you on this journey</h3>
           
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FunctionalHeading/>)
