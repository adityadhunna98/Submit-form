import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import './index.css';  
import Form from './component/Form';  
import App from './App'  
// import Contact from './contact'  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <div>  
    <Router>  
      {/* <h1>React Router Example</h1>   */} 
      <Route path="/" component={App} />  
      <Route path="/from" component={Form} />  
      {/* <Route path="/contact" component={Contact} />   */}
    </Router>  
    </div>
    
  </React.StrictMode>
);
// const routing = (  
 
// )  
// ReactDOM.render(routing, document.getElementById('root'));  



// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Form from './component/Form';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
    
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
