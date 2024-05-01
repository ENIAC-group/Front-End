import React, { useState } from "react";
import NavBar_SideBar from "../SidebarNabar/NavBar_SideBar";
import Footer from "../Footer/Footer";
import img from "../../assets/Female_Avatar.jpg";
import styles from "./reservation.module.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import HourCard from "./HourCard";
import { BsCalendarDate } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as shamsi from "shamsi-date-converter";

function DateString(input) {
  var changed = shamsi.jalaliToGregorian(input.year, input.month, input.day);
  var y = `${changed[0]}`;
  var m = changed[1] < 10 ? `0${changed[1]}` : `${changed[1]}`;
  var d = changed[2] < 10 ? `0${changed[2]}` : `${changed[2]}`;
  return [y, m, d].join("-");
}

function ChangeDate(input) {
  var date = new DateObject(input);
  date.convert(persian);
  const changed = {
    year: parseInt(date.year),
    month: parseInt(date.month),
    day: parseInt(date.day),
  };
  return changed;
}
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Helper function to add days to a date
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const ReservationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialState = location.state || {};

  const [doctor_id, setCode] = useState(initialState.doctorId || "");
  console.log("doctor_id:");
  console.log(doctor_id);
  const hours = ["19:00:00", "18:00:00", "17:00:00", "20:00:00"];
  const [responseData, setResponseData] = useState([]);
  const [selectedDay, setSelectedDay] = useState(
    ChangeDate(utils().getToday())
  );
  const [selected, setSelect] = useState(-1);
  async function getReservation() {
    try {
      console.log("hello");
      const startDate = formatDate(new Date()); // Format today's date as "yyyy-mm-dd" string
      const endDate = formatDate(addDays(new Date(), 30)); // Format 30 days later as "yyyy-mm-dd" string

      const token = localStorage.getItem("accessToken");
      const response = await axios(
        "http://127.0.0.1:8000/reserve/between_dates/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: {
            start_date: startDate,
            end_date: endDate,
            doctor_id: 1,
          },
        }
      );

      console.log("hello2");
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        setResponseData(response.data);
        console.log("last data");
        console.log(responseData);
        //
        // navigate("/Verification", { state: data });

        //console.log("you can login now");
        //navigate("/Signup");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getReservation();
  }, []);

  const [doctorProfile, setDoctorProfile] = useState([]);
  const baseUrl = "http://127.0.0.1:8000/profile/doctors/";

  // Alternatively, you can use string concatenation:
  const url = baseUrl + doctor_id + "/";

  useEffect(() => {
    //  تابع برای دریافت اطلاعات پروفایل دکتراز بک‌اند
    const fetchDoctorProfile = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setDoctorProfile(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching doctor profile:", error);
      }
    };

    fetchDoctorProfile();
  }, []);
  async function CreateReservation() {
    try {
      const ReservationDate = DateString(selectedDay); // Format today's date as "yyyy-mm-dd" string
      console.log(ReservationDate);
      // const endDate = formatDate(addDays(new Date(), 30)); // Format 30 days later as "yyyy-mm-dd" string

      const token = localStorage.getItem("accessToken");
      const response = await axios("http://127.0.0.1:8000/reserve/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          type: "حضوری",
          date: ReservationDate,
          time: hours[selected],
          doctor_id: doctor_id,
          //psychiatrist: doctor_id,
        },
      });

      // console.log("hello2");
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        setResponseData(response.data);
        console.log("last data");
        console.log(responseData);
        console.log("you reserved successfully");
        // navigate("/Verification", { state: data });

        //console.log("you can login now");
        //navigate("/Signup");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <NavBar_SideBar />

      <div className={styles.reserve_body}>
        <div className={styles.reserve_Box}>
          <div className={styles.reserve_docProfile}>
            <a href="#">
              <img src={img} alt="Avatar" />
            </a>
            <h2 className={styles.reserve_docName}>{doctorProfile.name}</h2>
          </div>
          <div className={styles.reserve_wrap}>
            <div className={styles.reserve_date_wrap}>
              <Calendar
                value={selectedDay}
                onChange={setSelectedDay}
                minimumDate={ChangeDate(utils().getToday())}
                shouldHighlightWeekends
                locale="fa"
                colorPrimary="#9c7aed"
                calendarClassName={styles.custom_calendar}
                calendarTodayClassName="custom-today-day"
              />
            </div>

            <div className={styles.reserve_hour_wrap}>
              <h6>ساعت های قابل رزرو</h6>
              <div className={styles.reserve_hour_items}>
                {hours.map((time, index) => (
                  <HourCard
                    time={time}
                    index={index}
                    selected={selected}
                    onClick={(event) =>
                      setSelect(selected == index ? -1 : index)
                    }
                  />
                ))}
              </div>
            </div>
            <div
              className={styles.reserve_result}
              style={selected == -1 ? { display: "none" } : {}}
            >
              تاریخ و زمان انتخابی:
              <br />
              <span>
                <BsCalendarDate />
              </span>
              تاریخ:
              <br />
              {selectedDay.year}/{selectedDay.month}/{selectedDay.day}
              <br />
              <span>
                <IoMdTime />
              </span>
              ساعت:
              <br />
              {hours[selected]}
              <br />
              <br />
              <button className={styles.button_74} onClick={CreateReservation}>
                رزرو
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReservationPage;
