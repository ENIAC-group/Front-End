import React from 'react';
import LoginContainer from './components/LoginSigUp/LoginSignUp.jsx';
import Landing from './components/LandingPage/LandingPage.jsx';
// import AboutUS from './components/AboutUs/AboutUs.jsx';
import * as Router from "react-router-dom";


function App() {
  return (
    <Router.BrowserRouter>
    <Router.Routes>
    <Router.Route path="/" element={<Landing />}> </Router.Route>
    <Router.Route path="/Signup" element={<LoginContainer />}> </Router.Route>
    <Router.Route path="/Landing" element={<Landing />}> </Router.Route>
    {/* <Router.Route path="/AboutUs" element={<AboutUS />}> </Router.Route> */}
    </Router.Routes>
  </Router.BrowserRouter>
  );
}

export default App;