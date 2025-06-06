**🔴 Emmet** : it is developer productivity tool built into most modern code editors(like vs code) that helps your write HTML , CSS , JSX faster using shortcuts called abbreviations

**🔴 Difference between library and framework** : In library , we can control the part of the code , you can call library functions whenever and wherever you need them but for framework , it controls the code and the entire floe of the app , it calls your code as a part of its built-in flow(inversion of control) 


**🔴 CDN and its uses**: Content delivery network is network of servers distributed globally to deliver web content(like Javascript libraries , images , videos etc) faster by reducing latency.
1.faster content delivery
2.reduced server load
3.improved website performance
4.global reach
5.Enhanced security
6.High availability and reliability
7.

**🔴 Reason behind react is called as react**: because it efficiently reacts to changes in data with minimal DOM updates in user interfaces and updates UI accordingly.

**🔴 cross-origin in script tag** : is a HTML attribute used in elements like <script> , <img> , <video> and other similar elements to control how cross-origin requests are handled -particularly in relation with 
-CORS (cross-origin resource sharing)
-credentials(like authorization , headers , cookies)
-security and browser behavior

**🔴 Difference between React and ReactDOM** : 1.purpose of react: is a core library to build components , logic and purpose of ReactDOM : provides methods to render react components in the DOM.
2.use case of react :defines UI , components , hooks , state , prop etc and use case of ReactDOM : bridges react with the actual browser DOM.


**🔴 Difference between development.js and production.js** :1.purpose of Development.js includes warnings , error messages and dev tools to help during development and purpose of production.js stripped for warnings and extra checks, minified for better performance
2.development.js : used in development environment only and production.js : used in production (live) apps

**🔴 Async and Defer** : async : downloads the script in parallel , but executes it immediately after download, does not wait for HTML parsing to finish , scripts may run out of order if multiple are async
<script src="script.js" async></script>
defer : download the script in parallel but exutes it only after the HTML is fully parsed , maintains excution order of multiple defer scripts
<script src="script.js" defer></script>