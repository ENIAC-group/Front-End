import React, { useState } from "react";
import NavBar_SideBar from "../SidebarNabar/NavBar_SideBar";
import Footer from "../Footer/Footer";
import img from "../../assets/Female_Avatar.jpg";
import styles from './reservation.module.css';
import  'react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar , utils } from 'react-modern-calendar-datepicker';
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";

function ChangeDate(input) 
{
  var date = new DateObject(input)
  date.convert(persian)
  const changed = {
    year:  parseInt(date.year),
    month: parseInt(date.month),
    day: parseInt(date.day),
  }
  return changed
}
const HourCard = ({time}) =>{
  return(
    <>
    <div className={styles.res_hcard_body} >
      {time}
      </div></>
  )
}
const ReservationPage = () => {
  
  const [selectedDay, setSelectedDay] = useState(ChangeDate(utils().getToday()));
  return (
    <>
    <NavBar_SideBar/>

    <div className={styles.reserve_body}>
        <div className={styles.reserve_Box}>
            <div className={styles.reserve_docProfile}>
            <a href="#">
                <img
                  src={img}
                  alt="Avatar"
                />
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
                colorPrimary="#9c88ff" 
                calendarClassName={styles.custom_calendar}
                calendarTodayClassName="custom-today-day"/>
                </div>
                <div className={styles.reserve_hour_wrap}>
                  <h6>ساعت های قابل رزرو</h6>
                  <HourCard time={"asa"}/>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default ReservationPage;
