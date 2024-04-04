import React from "react";
import "./doctor.css";

import myImage1 from "./img/teenagers2.jpg";
import myImage2 from "./img/kids.jpg";
import myImage3 from "./img/couples.jpg";
import myImage4 from "./img/clinical.jpg";
import myImage5 from "./img/psychiatry.jpg";
import myImage6 from "./img/couching.jpg";

const Doctor_Home = () => {
  return (
    <div className="container-fluid project py-5 mb-5">
      <div className="container">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: "600px" }}
        >
          {/* <h5 className="text-primary">معرفی روان درمانگر ها</h5> */}
          <h1 className="doctor_h1">معرفی روان درمانگر ها</h1>
        </div>
        <div className="row g-5">
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
            <div className="project-item">
              <div className="project-img">
                <img
                  src={myImage1}
                  className="img-fluid w-100 rounded z-4 relativ"
                  alt="img1"
                />
                <div className="project-content">
                  <a href="#" className="text-center">
                    <h4 className="text-secondary">حوزه تحصیلی</h4>
                    <p className="m-0 text-white">معرفی روانشناسان</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
            <div className="project-item">
              <div className="project-img">
                <img
                  src={myImage2}
                  className="img-fluid w-100 rounded z-4 relativ"
                  alt="img2"
                />
                <div className="project-content">
                  <a href="#" className="text-center">
                    <h4 className="text-secondary">حوزه کودک</h4>
                    <p className="m-0 text-white">معرفی روانشناسان</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
            <div className="project-item">
              <div className="project-img">
                <img
                  src={myImage3}
                  className="img-fluid w-100 rounded z-4 relativ"
                  alt="img3"
                />
                <div className="project-content">
                  <a href="#" className="text-center">
                    <h4 className="text-secondary">حوزه خانواده</h4>
                    <p className="m-0 text-white">معرفی روانشناسان</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
            <div className="project-item">
              <div className="project-img">
                <img
                  src={myImage4}
                  className="img-fluid w-100 rounded z-4 relativ"
                  alt="img4"
                />
                <div className="project-content">
                  <a href="#" className="text-center">
                    <h4 className="text-secondary">حوزه بالینی</h4>
                    <p className="m-0 text-white">معرفی روانشناسان</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
            <div className="project-item">
              <div className="project-img">
                <img
                  src={myImage5}
                  className="img-fluid w-100 rounded z-4 relativ"
                  alt="img5"
                />
                <div className="project-content">
                  <a href="#" className="text-center">
                    <h4 className="text-secondary">حوزه روانپزشکی</h4>
                    <p className="m-0 text-white">معرفی روانپزشکان</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
            <div className="project-item">
              <div className="project-img">
                <img
                  src={myImage6}
                  className="img-fluid w-100 rounded z-4 relativ"
                  alt="img6"
                />
                <div className="project-content">
                  <a href="#" className="text-center">
                    <h4 className="text-secondary">حوزه کوچینگ</h4>
                    <p className="m-0 text-white">معرفی کوچ ها</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Doctor_Home;
