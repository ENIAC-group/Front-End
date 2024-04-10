import React, { useEffect, useState } from "react";
import CounterUp from "./counter";
import axios from "axios";

const Statistic = () => {
  const [patientsCount, setPatientsCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", getEndNumbers);
    return () => {
      window.removeEventListener("scroll", getEndNumbers);
    };
  }, []);

  async function getEndNumbers() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/HomePage/count/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setPatientsCount(response.data.Pationt_data.Pationt_count);
        setDoctorsCount(response.data.doctor_data.doctor_count);
      }
    } catch (error) {
      console.log("something went wrong");
    }
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <CounterUp EndNum={patientsCount} label="مراجعین" />
        </div>
        <div style={{ flex: 1 }}>
          <CounterUp EndNum={doctorsCount} label="درمانگران" />
        </div>
        <div style={{ flex: 1 }}>
          <CounterUp EndNum={150} label="نوبت ثبت شده" />
        </div>
      </div>
    </div>
  );
};

export default Statistic;