import React from 'react';
import './DoctorsList.css';
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import './DoctorProfile.jsx';
import DoctorProfile from './DoctorProfile.jsx';
import Footer from '../Footer/Footer.jsx';


const DoctorsList = () => {
    const navigate = useNavigate();
    async function GetUserInfo(event) {
        event.preventDefault();
        const accessToken = localStorage.getItem("accessToken");
        try {
            const response = await axios("http://127.0.0.1:8000/accounts/get_user/", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`, // Bearer <access token >
                    "Content-Type": "application/json",
                },
            });
            if (response.status == 200) {
                const data = response.data.user;
                setinfo({
                    FirstName: data.firstname == null ? "--" : data.firstname,
                    LastName: data.lastname == null ? "--" : data.lastname,
                    Email: data.email,
                    BirthDay:
                        data.date_of_birth == null ? "00-00-00" : data.date_of_birth,
                    Gender: data.gender == null ? "--" : data.gender,
                    PhoneNumber: data.phone_number == null ? "--" : data.phone_number,
                });
            }
        } catch (error) {
            if (error.response.status == 403) {
                withReactContent(Swal).fire({
                    icon: "error",
                    title: "!برای مشاهده اطلاعات شخصی ورود به اکانت خود الزامی است",
                    background: "#473a67",
                    color: "#b4b3b3",
                    width: "35rem",
                    backdrop: `
              rgba(84, 75, 87.0.9)
              left top
              no-repeat`,
                    confirmButtonText: "تایید",
                    preConfirm: () => {
                        navigate("/Signup");
                    },
                });
            }
        }
    }

    async function GetUserInfo2(event) {
        event.preventDefault();
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken == null)
            withReactContent(Swal)
                .fire({
                    icon: "warning",
                    title: "!برای رزور وقت ورود به  اکانت خود الزامی است",
                    background: "#473a67",
                    color: "#b4b3b3",
                    width: "35rem",
                    backdrop: `
          rgba(84, 75, 87.0.9)
          left top
          no-repeat`,
                    showDenyButton: true,
                    confirmButtonText: "ورود به سایت",
                    denyButtonText: "صفحه اصلی",
                    denyButtonColor: "#89817e",
                    confirmButtonColor: "rgb(183, 153, 255)",
                    customClass: {
                        actions: "my-actions",
                        confirmButton: "order-2",
                        denyButton: "order-3",
                    },
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        navigate("/Signup");
                    } else if (result.isDenied) {
                        navigate("/Home");
                    }
                });
        else {
            try {
                const response = await axios(
                    "http://127.0.0.1:8000/accounts/get_user/",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${accessToken}`, // Bearer <access token >
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (response.status == 200) {
                    const data = response.data.user;
                    const check =
                        data.firstname == null
                            ? false
                            : data.lastname == null
                                ? false
                                : data.date_of_birth == null
                                    ? false
                                    : data.gender == null
                                        ? false
                                        : data.phone_number == null
                                            ? false
                                            : true;
                    if (check)
                        navigate("/Reserve"); // ی جوری باید بهش بگی برای کدوم دکتره
                    else {
                        //modal بچه ها نشون داده بشه
                    }
                }
            } catch (error) {
                if (error.response.status == 403) {
                    withReactContent(Swal)
                        .fire({
                            icon: "warning",
                            title: "!برای رزور وقت ورود به  اکانت خود الزامی است",
                            background: "#473a67",
                            color: "#b4b3b3",
                            width: "35rem",
                            backdrop: `
                rgba(84, 75, 87.0.9)
                left top
                no-repeat`,
                            showDenyButton: true,
                            confirmButtonText: "ورود به سایت",
                            denyButtonText: "صفحه اصلی",
                            denyButtonColor: "#89817e",
                            confirmButtonColor: "rgb(183, 153, 255)",
                            customClass: {
                                actions: "my-actions",
                                confirmButton: "order-2",
                                denyButton: "order-3",
                            },
                        })
                        .then((result) => {
                            if (result.isConfirmed) {
                                navigate("/Signup");
                            } else if (result.isDenied) {
                                navigate("/Home");
                            }
                        });
                }
            }
        }
    }

    const [doctorProfile, setDoctorProfile] = useState([]);

    useEffect(() => {
        //  تابع برای دریافت اطلاعات پروفایل دکترها از بک‌اند
        const fetchDoctorProfile = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/profile/doctors/');
                setDoctorProfile(response.data);
            }
            catch (error) {
                console.error('Error fetching doctor profile:', error);
            }
        };

        fetchDoctorProfile();
    }, []);

    return (
        <>
        <div className="container-fluid my-5 team" style={{ paddingTop: '0rem', paddingBottom: '3rem' }}>
            <html>
                <head>
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
                        rel="stylesheet"
                    />
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
                        rel="stylesheet"
                    />
                    <link
                        href="lib/animate/animate.min.css"
                        rel="stylesheet"
                    />
                    <link
                        href="./owl.carousel.min.css"
                        rel="stylesheet"
                    />
                </head>
            </html>

            <div className="container-fluid py-0 my-0 team">
                <div className="container py-0">
                    <div className="text-center mx-auto pb-2 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                        <h1>لیست مشاورها</h1>
                    </div>
                    <br />

                    <div className="owl-carousel team-carousel wow fadeIn owl-loaded owl-drag" data-wow-delay=".5s" style={{ visibility: 'visible' }}>
                        <div className='distanceBetween'>
                            {doctorProfile.map((index) => (
                                <DoctorProfile
                                    key={index}
                                    name={index?.name}
                                    Description={index?.description}
                                    Image={index?.image}
                                    ProfileType={index?.profile_type}
                                    IsPrivate={index?.is_private}
                                    Psychiatrist={index?.psychiatrist}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/></>
    )
}

export default DoctorsList