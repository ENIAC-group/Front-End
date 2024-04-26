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

const ReservationPage = () => {
  const hours = ["19:00", "18:00", "17:00", "20:00"];
  const [selectedDay, setSelectedDay] = useState(
    ChangeDate(utils().getToday())
  );
  const [selected, setSelect] = useState(-1);
  
  return (
    <>
      <NavBar_SideBar />

      <div className={styles.reserve_body}>
        <div className={styles.reserve_Box}>
          <div className={styles.reserve_docProfile}>
            <a href="#">
              <img src={img} alt="Avatar" />
            </a>
            <h2 className={styles.reserve_docName}>اسم دکتر</h2>
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
              <br/>
              <span><BsCalendarDate/></span>
              تاریخ:
              <br/>
              {selectedDay.year}/{selectedDay.month}/{selectedDay.day}
              <br/>
              <span><IoMdTime/></span>
              ساعت:
              <br/>
              {hours[selected]}<br/><br/>
              <button className={styles.button_74} onClick>رزرو</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReservationPage;
