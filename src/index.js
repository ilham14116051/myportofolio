import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components/Footer/Footer.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './LandingPage';
import NavBar from './Components/Navbar/NavBAr';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <NavBar/>
    
    <LandingPage/>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
