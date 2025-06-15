**is JSX mandatory for React** : No , JSX is not mandatory for React but it is highly recommended for React because it makes its writing and reading ui much more intuitive and expressive

**is ES6 mandatory for React** : No , ES6 is not mandatory for React but it is highly recommended for react because 
1.modern react codebases use ES6 features
2.react documentation and tutorials have familiarity with ES6
3.ES6 makes the code more   concise and readable

**how to write comments in JSX** : In JSX , we can write comments using curly braces and javascript style comments

**React.Fragment and <></>** :
<React.Fragment></React.Fragment> : is a built in react component that wraps multiple elements without rendering any actual HTML like element like div in DOM
<></> : is a shorthand syntax for React.Fragment

**Virtual DOM" : is a lightweight javascript representation of the real DOM used in libraries like React to improve efficiency and performance

**reconciliation** : is the process of comparing the new virtual DOM with the pervious virtual DOM to determine the minimum number of updates needed to sync the real DOM with our application's new state

**React Fibre** : is the new reconciliation engine that improves how react renders components , handles updates , and manages performance. it has features like:-
1.concurrent rendering - prepare multiple versions of Ui at the same time
2.suspense -handling asynchronous operations like data fetching or lazy loading
3.time-slicing - splits rendering into chunks
4.Interruptible  rendering - pause rendering in the middle and restart or cancel if it is something important

**keys in React** : keys helps you with which items are changed , been added or removed  from the list. they are essential during reconciliation for performance
we use it in .map() , whenever we were rendering list of elements

**can we use index as keys in React**: yes , we can use but it is not recommended unless specific conditions are met

**Props and how they are used** :(short term-properties) props are read-only inputs passed from parent component to child component. they allow data to flow form parent to child
1.basic usage - function Greeting(props) {}
2.destructuring props -  function Greeting({name , time}) {}
3.passing functions as props - function Greeting({onclick}) {}
4.passing JSX as props - function Greeting({children}) {}

**Config driven UI** : is design approach  where the user interface(UI) is generated based on the configuration data (usually JSON)
