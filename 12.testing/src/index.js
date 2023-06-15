// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {GoogleOAuthProvider} from "@react-oauth/google"
// import config from "../src/config/index"


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//      <BrowserRouter>
//     <GoogleOAuthProvider clientId={config.google.clientId}>
//     <App />
//     </GoogleOAuthProvider>
//     </BrowserRouter>


// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { GoogleOAuthProvider } from "@react-oauth/google"
// import config from "../src/config/index"

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <GoogleOAuthProvider clientId={config.google.clientId}>
//         <App />
//       </GoogleOAuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import { PostContextProvider } from './context/post-context';
import config from './config/index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={config.google.clientId}>
        <PostContextProvider>
          <App />
        </PostContextProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
