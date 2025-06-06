{/* <div id="parent">
    <div id="child">
        <h1> I'm the h1 tag</h1>
    </div>
</div> */}

const parent = React.createElement('div' , {id:"parent"} , React.createElement('div' , { id: "child"} , [React.createElement('h1', {} , "I'm the H1 tag!") , React.createElement('h2' , {} , "I'm the h2 tag!")]))


const heading = React.createElement("h1" , {} , "Hello world from React!")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)