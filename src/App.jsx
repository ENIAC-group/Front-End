import React from "react";
import LoginContainer from "./components/LoginSignUp/LoginSignUp.jsx";
import Landing from "./components/LandingPage/LandingPage.jsx";
import AboutUS from "./components/aboutus/aboutus.jsx";
import Verification from "./components/Verification/verification.jsx";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword.jsx";
import * as Router from "react-router-dom";

function App() {
  return (
    <Router.BrowserRouter>
      <Router.Routes>
        <Router.Route path="/" element={<Landing />}>
          {" "}
        </Router.Route>
        <Router.Route path="/Signup" element={<LoginContainer />}>
          {" "}
        </Router.Route>
        <Router.Route path="/Landing" element={<Landing />}>
          {" "}
        </Router.Route>
        <Router.Route path="/AboutUs" element={<AboutUS />}>
          {" "}
        </Router.Route>
        <Router.Route path="/verification" element={<Verification />}>
          {" "}
        </Router.Route>
        <Router.Route path="/ForgetPassword" element={<ForgetPassword />}>
          {" "}
        </Router.Route>
      </Router.Routes>
    </Router.BrowserRouter>
  );
}

export default App;
