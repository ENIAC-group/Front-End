// Statistic.jsx

import React, { useEffect, useState } from "react";
import CounterUp from "./counter";
import axios from "axios";

const Statistic = () => {
  const [patientsCount, setPatientsCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [reservationsCount , setReservationCount] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", getEndNumbers);
    return () => {
      window.removeEventListener("scroll", getEndNumbers);
    };
  }, []);

  async function getEndNumbers() {
    try {
      const response = await axios.get(
        "https://sinaharaeeni.ir/HomePage/count/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const patientsCountRounded = Math.ceil(response.data.Pationt_data.Pationt_count / 5) * 5;
        const doctorsCountRounded = Math.ceil(response.data.doctor_data.doctor_count / 5) * 5;
        const reservationsCountRounded = Math.ceil(response.data.reservation_data.reservation_count / 5) * 5;

        setPatientsCount(patientsCountRounded);
        setDoctorsCount(doctorsCountRounded);
        setReservationCount(reservationsCountRounded);
      }
    } catch (error) {
      console.log("something went wrong");
    }
  }

  return (
    <div id="statistics" className="statistics-container">
      <div className="statistics-row">
        <div style = {{fontSize: "44px"}} className="statistics-item">
          <CounterUp EndNum={patientsCount} label="مراجعین" />
        </div>
        <div style = {{fontSize: "44px"}} className="statistics-item">
          <CounterUp EndNum={doctorsCount} label="درمانگران" />
        </div>
        <div style = {{fontSize: "41px"}} className="statistics-item">
          <CounterUp EndNum={reservationsCount} label="نوبت ثبت شده" />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
