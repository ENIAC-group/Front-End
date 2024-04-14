import React from "react";
import Slider from "../Slider/Slider.jsx";
import Footer from "../Footer/Footer";
import Statistic from "../Counter/Statistic.jsx";
import Tests from "../Tests/Tests.jsx";
import Doctors_Home from "../Doctor/doctor.jsx";
import CompleteInfo from "../Modal/Complete_Info.jsx";

function Home() {
  return (
    <>
      <Slider />
      <Doctors_Home />
      <CompleteInfo />
      <Statistic />
      <Tests />
      <Footer />
    </>
  );
}

export default Home;
