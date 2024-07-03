import React from "react";
import "./Recommendation.css"; // Import your CSS file if you have styles
import first_image from "./img/psychology3.jpg";
import second_image from "./img/psychology2.jpg";
import { FcBusinessContact } from "react-icons/fc";

const AboutSection = () => {
  return (
    <div className="container-fluid py-5 my-5">
      <div className="container pt-5">
        <div className="row g-5" >
          
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeIn",
             
            }}
          >
            <div className="h-100 position-relative" >
              <img
                src={first_image}
                className="img-fluid w-75 rounded"
                alt=""
                style={{ marginBottom: "35%" }}
              />
              <div
                className="position-absolute w-75"
                style={{ top: "35%", left: "35%" }}
              >
                <img
                  src={second_image}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeIn",
            }}
          >
            <h4 className="text-primary doctor_h2">راهنمای رزرو نوبت</h4>
            <h1 className="mb-4 doctor_h2">پیشنهاد روان درمانگر</h1>
            <p className="recom_text">
              گروه روانشناسی اینیاک با بهره گیری از جدید ترین الگوریتم های هوش
              مصنوعی موفق به طراحی سامانه پیشنهاد روان درمانگر گردیده است.
            </p>
            <h5 className="text-primary doctor_h2">  پیشنهاد بهترین درمانگر برای شما بر اساس</h5>
            <p className=" recom_text">
            <FcBusinessContact />
            ملاحظات شخصی
            </p>
            <p className=" recom_text">
            <FcBusinessContact />
            سابقه درمانی 
            </p>
            <p className=" recom_text">
            <FcBusinessContact />
            تناسب تخصص پزشک و شرح حال شما 
            </p>
            <a
              href="#"
              className="btn btn-secondary rounded-pill px-5 py-3 text-white"
            >
              شروع
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
