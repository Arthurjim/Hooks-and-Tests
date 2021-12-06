
import React from "react";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Navigate
} from "react-router-dom";
import AboutScreen from './AboutScreen'
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'
import NavBar from "./components/NavBar";

const AppRouter = () => {
    return (
       <Router>
           <div>
               <NavBar/>
               <div className="container">

                    <Routes >
                        <Route exact path="/"  element={<HomeScreen />}/>
                        <Route exact path="/about" element={<AboutScreen />}/>
                        <Route exact path="/login" element={<LoginScreen />}/>
                        {/* <Route element={<HomeScreen />}/> */}
                        <Route  path="*" element={<Navigate replace to="/" />} />  
                        
                    </Routes >
               </div>
           </div>
       </Router>
    )
}

export default AppRouter
