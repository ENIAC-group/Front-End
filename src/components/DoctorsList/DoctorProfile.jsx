import React from "react";
import "./DoctorsList.css";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CompleteInfoModal from "../CompleteInfoModal/Complete_Info.jsx";
import { ToastContainer } from "react-toastify";

const DoctorProfile = ({
  doctor_id,
  name,
  Description,
  Image,
  ProfileType,
  IsPrivate,
  Psychiatrist,
}) => {
  {
    console.log(Image);
    console.log({ ProfileType });
    console.log({ doctor_id });
    const navigate = useNavigate();
    async function GetUserInfo(event) {
      event.preventDefault();
      const accessToken = localStorage.getItem("accessToken");
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
            console.log(response);
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
            if (check);
            else {
              num = 1;
              navigate("/Reserve", { state: doctor_id }); // ی جوری باید بهش بگی برای کدوم دکتره
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

    // const CheckInfo = () => {
    //   if (
    //     firstname.length === 0 ||
    //     lastname.length === 0 ||
    //     phonenumber.length === 0 ||
    //     genderOption === "" ||
    //     dateOfBirth === ""
    //   ) {
    //     // console.log("has empty");
    //     setShow(true);
    //     // console.log(firstname, lastname, phonenumber, genderOption, dateOfBirth);
    //   } else {
    //     toast.warn("!شما قبلا اطلاعات خود را ثبت کرده اید", {
    //       position: "bottom-left",
    //       autoClose: 3000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //     setShow(true);
    //     // Swal.fire({
    //     //   icon: "warning",
    //     //   title: "!شما قبلا اطلاعات خود را ثبت کرده اید",
    //     //   background: "#473a67",
    //     //   color: "#b4b3b3",
    //     //   width: "26rem",
    //     //   height: "18rem",
    //     //   confirmButtonText: "تایید",
    //     //   customClass: {
    //     //     container: 'custom-swal-container'
    //     //   }
    //     // });
    //   }
    // };

    if (name == null) {
      withReactContent(Swal).fire({
        icon: "warning",
        title: "!مشاوری یافت نشد",
        background: "#473a67",
        color: "#b4b3b3",
        width: "35rem",
        backdrop: `
                        rgba(84, 75, 87.0.9)
                        left top
                        no-repeat`,
      });
    } else {
      return (
        <div
          className="rounded team-item"
          style={{ fontFamily: "Ios15Medium" }}
        >
          <div className="team-content">
            <div className="team-img-icon">
              <div className="team-img rounded-circle">
                <img
                  src={Image}
                  className="img-fluid w-100 rounded-circle"
                  alt={`${name}'s Image`}
                />
              </div>
              <div className="team-name text-center py-3">
                <h4 className="" style={{ color: "gray" }}>
                  {name}
                </h4>
                <p className="m-0">{ProfileType}</p>
                <p className="m-0">{Description}</p>
              </div>
              <div
                className="buttonReserve"
                onLoad={GetUserInfo}
                onClick={GetUserInfo2}
              >
                <CompleteInfoModal doctorId={doctor_id}/>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default DoctorProfile;
