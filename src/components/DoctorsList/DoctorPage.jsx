import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./DoctorPage.css";
import NavBar_SideBar from '../SidebarNabar/NavBar_SideBar';
import Footer from '../Footer/Footer';
import DoctorProfile from './DoctorProfile';
import { useLocation } from "react-router-dom";


const DoctorPage = () => {
    const location = useLocation();
    const doctorId = location.state;

    const [doctorProfile, setDoctorProfile] = useState([]);
    useEffect(() => {
        const fetchDoctorProfile = async () => {
            try {
                const response1 = await axios.get(
                    `http://127.0.0.1:8000/profile/doctors/${doctorId}/`,
                    {}
                );
                setDoctorProfile(response1.data);
            } catch (error) {
                console.error("Error fetching doctor profile:", error);
            }
        };

        fetchDoctorProfile();
    }, []);

    const [Reservations, setReservations] = useState([]);
    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response1 = await axios.get(
                    "http://127.0.0.1:8000/reserve/last_week/",
                    {}
                );
                setReservations(response1.data);
            } catch (error) {
                console.error("Error fetching reservations:", error);
            }
        };

        fetchReservations();
    }, []);

    return (
        <div>
            <NavBar_SideBar />
            <br />
            <h1 className="text-center mx-auto pb-2 wow fadeIn Doctor_List_title"
                data-wow-delay=".3s"
                style={{ maxWidth: "600px", fontFamily: "Ios15Medium" }}>پروفایل دکتر</h1>

            {/* {reservations.map((index) => (
                  <DoctorProfile
                    key={index}
                    name={index?.name}
                    Description={index?.description}
                    Image={index?.image}
                    ProfileType={index?.profile_type}
                    IsPrivate={index?.is_private}
                    Psychiatrist={index?.psychiatrist}
                  />
                ))} */}
            <div className='container'>
                <div className="rounded team-item" style={{ fontFamily: 'Ios15Medium', width: '298.668px', float:"right" }}>
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

                            {/* <div className='buttonReserveAndProfile'>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" onClick={handleClickToDoctorPage}>
                                        <i className="fab material-symbols-outlined">account_circle</i>
                                    </a>
                                </div>
                                <div className='buttonReserve' onLoad={GetUserInfo} onClick={GetUserInfo2}>
                                    <CompleteInfoModal />
                                    <ToastContainer />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div style={{ float: 'right', marginRight: '50px', marginTop: "10px" }}>
                <DoctorProfile
                    key={doctorProfile?.id}
                    name={doctorProfile?.name}
                    Description={doctorProfile?.description}
                    Image={doctorProfile?.image}
                    ProfileType={doctorProfile?.profile_type}
                    IsPrivate={doctorProfile?.is_private}
                    Psychiatrist={doctorProfile?.psychiatrist}
                />
            </div> */}

                <div className="containerTable">
                    <h1 style={{ fontFamily: "Ios15Medium", textAlign: "center", color: 'gray' }}>نوبت های رزرو شده</h1>
                    <ul className="responsive-table">
                        <li className="table-header">
                            {/* <div className="col col-1">Job Id</div> */}
                            <div className="col col-2" style={{ fontFamily: "Ios15Medium" }}>ساعت</div>
                            <div className="col col-2" style={{ fontFamily: "Ios15Medium" }}>تاریخ</div>
                            <div className="col col-1" style={{ fontFamily: "Ios15Medium" }}>نام بیمار</div>
                        </li>
                        <li className="table-row">
                            {/* <div className="col col-1" data-label="Job Id">42235</div> */}
                            <div className="col col-3" style={{ fontFamily: "Ios15Medium" }} data-label="ساعت">19:00</div>
                            <div className="col col-2" style={{ fontFamily: "Ios15Medium" }} data-label="تاریخ">1403/2/30</div>
                            <div className="col col-1" style={{ fontFamily: "Ios15Medium" }} data-label="نام بیمار">زهره</div>
                        </li>
                        <li className="table-row">
                            {/* <div className="col col-1" data-label="Job Id">42442</div> */}
                            <div className="col col-3" style={{ fontFamily: "Ios15Medium" }} data-label="ساعت">14:00</div>
                            <div className="col col-2" style={{ fontFamily: "Ios15Medium" }} data-label="تاریخ">1403/3/5</div>
                            <div className="col col-1" style={{ fontFamily: "Ios15Medium" }} data-label="نام بیمار">مریم</div>
                        </li>
                        <li className="table-row">
                            {/* <div className="col col-1" data-label="Job Id">42257</div> */}
                            <div className="col col-3" style={{ fontFamily: "Ios15Medium" }} data-label="ساعت">9:00</div>
                            <div className="col col-2" style={{ fontFamily: "Ios15Medium" }} data-label="تاریخ">1403/3/11</div>
                            <div className="col col-1" style={{ fontFamily: "Ios15Medium" }} data-label="نام بیمار">هادی</div>
                        </li>
                        <li className="table-row">
                            {/* <div className="col col-1" data-label="Job Id">42311</div> */}
                            <div className="col col-3" style={{ fontFamily: "Ios15Medium" }} data-label="ساعت">16:30</div>
                            <div className="col col-2" style={{ fontFamily: "Ios15Medium" }} data-label="تاریخ">1403/3/20</div>
                            <div className="col col-1" style={{ fontFamily: "Ios15Medium" }} data-label="نام بیمار">امین</div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DoctorPage;
