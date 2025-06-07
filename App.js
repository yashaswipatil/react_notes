import React from "react";
import { createRoot } from 'react-dom/client';

const parent = React.createElement('div' , {id:"parent"} , React.createElement('div' , { id: "child"} , [React.createElement('h1', { key : 'h1'} , "I'm the H1 tag!") , React.createElement('h2' , { key : 'h2'} , "I'm the h2 tag!")]))


const heading = React.createElement("h1" , {} , "Hello world from React!")

const root = createRoot(document.getElementById("root"))

root.render(parent)