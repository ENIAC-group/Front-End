import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./DoctorPage.css";
import NavBar_SideBar from '../SidebarNabar/NavBar_SideBar';
import Footer from '../Footer/Footer';
import DoctorProfile from '../DoctorsList/DoctorProfile';
import { useLocation } from "react-router-dom";
import ReservationTable from './ReservationTable';

const DoctorPage = () => {
    const location = useLocation();
    const doctorId = location.state;

    const [doctorProfile, setDoctorProfile] = useState([]);
    useEffect(() => {
        const fetchDoctorProfile = async () => {
            try {
                const response1 = await axios.get(
                    `http://127.0.0.1:8000/profile/doctors/${doctorId}/`);
                setDoctorProfile(response1.data);
                // console.log(response1);
            } catch (error) {
                console.error("Error fetching doctor profile:", error);
            }
        };
        fetchDoctorProfile();
    }, [doctorId]);

    const [Reservations, setReservations] = useState([]);
    useEffect(() => {
        const fetchReservations = async () => {
            const token = localStorage.getItem("accessToken");
            try {
                const response1 = await axios(
                    "http://127.0.0.1:8000/DoctorPanel/NextWeekReservations/", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                          },
                    });
                console.log( response1 ) ; 
                setReservations(response1.data.reservations_next_seven_days);
                console.log(Reservations); 
            } catch (error) {
                console.error("Error fetching reservations:", error);
            }
        };
        fetchReservations();
    }, [doctorId]);

    return (
        <div>
            <NavBar_SideBar />
            <br />
            <h1 className="text-center mx-auto pb-2 wow fadeIn Doctor_List_title"
                data-wow-delay=".3s"
                style={{ maxWidth: "600px", fontFamily: "Ios15Medium" }}>پروفایل دکتر</h1>


            <div className='container'>
                <div className="rounded team-item" style={{ fontFamily: 'Ios15Medium', width: '298.668px', float: "right" }}>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                    <div className="team-content">
                        <div className="team-img-icon">
                            <div className="team-img rounded-circle">
                                <img src={doctorProfile?.image} className="img-fluid w-100 rounded-circle" alt={`${doctorProfile?.name}'s Image`} />
                            </div>
                            <div className="team-name text-center py-3">
                                <h4 className="" style={{ color: 'gray', fontFamily: "Ios15Medium" }}>{doctorProfile?.name}</h4>
                                <p className="m-0" style={{ fontFamily: "Ios15Medium", color: 'gray' }}>{doctorProfile?.profile_type}</p>
                                <p className="m-0" style={{ fontFamily: "Ios15Medium", color: 'gray' }}>{doctorProfile?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="containerTable">
                <h1 style={{ fontFamily: "Ios15Medium", textAlign: "center", color: 'gray' }}>نوبت های رزرو شده</h1>
                <ul className="responsive-table">
                    <li className="table-header">
                        {/* <div className="col col-1" style={{ fontFamily: "Ios15Medium" }}>پرونده پزشکی بیمار</div> */}
                        <div className="col col-1" style={{ fontFamily: "Ios15Medium" }}>لینک جلسه مجازی</div>
                        <div className="col col-1" style={{ fontFamily: "Ios15Medium" }}>نوع مراجعه</div>
                        <div className="col col-1" style={{ fontFamily: "Ios15Medium" }}>ساعت</div>
                        <div className="col col-1" style={{ fontFamily: "Ios15Medium" }}>تاریخ</div>
                        <div className="col col-1" style={{ fontFamily: "Ios15Medium" }}>نام بیمار</div>
                    </li>

                    {Reservations.map((index) => (
                        <ReservationTable
                            PatiantId={index?.pationt}
                            PatiantName={index?.patient_full_name}
                            Day={index?.day}
                            Date={index?.date}
                            time={index?.time}
                            type={index?.type}
                            MeetingLink={index?.MeetingLink}
                        />
                    ))}
                </ul>
            </div>

            <Footer />
        </div>
    );
};

export default DoctorPage;
