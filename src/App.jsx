import React from 'react';
import LoginContainer from './components/SignUp/SignUp.jsx';
import Landing from './components/LandingPage/LandingPage.jsx';
import * as Router from "react-router-dom";


function App() {
  return (
    <Router.BrowserRouter>
    <Router.Routes>
    <Router.Route path="/Signup" element={<LoginContainer />}> </Router.Route>
    <Router.Route path="/Landing" element={<Landing />}> </Router.Route>
    </Router.Routes>
  </Router.BrowserRouter>
  );
}

export default App;