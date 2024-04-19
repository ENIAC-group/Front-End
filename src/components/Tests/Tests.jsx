import React from 'react';
import "./Tests.css";

const Tests = () => {
  return (
    <div className="container-fluid services py-5 my-5">
      <html>
        <head>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        </head>
      </html>
      <h1 className='TestHeader'>تست ها</h1>
      <div className="container py-48">
        <div className="row g-5 services-inner">
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
            <div className="services-item">
              <div className="p-4 text-center services-content">
                <div className="services-content-icon">
                  <i className="fa fa-user fa-7x mb-4 text-primary" style={{ color:'#ACBCFF' }}></i>
                  <h4 className="TestName">تست های فردی</h4>
                  <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">دیدن تست ها</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
            <div className="services-item">
              <div className="p-4 text-center services-content">
                <div className="services-content-icon">
                  <i className="fa fa-book fa-7x mb-4 text-primary" style={{ color:'#ACBCFF' }}></i>
                  <h4 className="TestName">تست های تحصیلی</h4>
                  <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">دیدن تست ها</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
            <div className="services-item">
              <div className="p-4 text-center services-content">
                <div className="services-content-icon">
                  <i className="fa fa-venus-double fa-7x mb-4 text-primary" style={{ color:'#ACBCFF' }}></i>
                  <h4 className="TestName">تست های پیش از ازدواج</h4>
                  <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">دیدن تست ها</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tests