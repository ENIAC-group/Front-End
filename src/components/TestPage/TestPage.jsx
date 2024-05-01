import React from "react";
import { useState } from "react";
import "./TestPage.css";
import first_image from "./courses/course-1.jpg";
import second_image from "./courses/course-2.jpg";
import test_header from "./img/page-title.jpg";
import third_image from "./courses/course-3.jpg";
import NavBar_SideBar from "../SidebarNabar/NavBar_SideBar";
import Footer from "../Footer/Footer";

const CourseList = () => {
  const [isExpandedone, setIsExpandedone] = useState(false);
  const [isExpandedtwo, setIsExpandedtwo] = useState(false);
  const [isExpandedthree, setIsExpandedthree] = useState(false);
  const [isExpandedfour, setIsExpandedfour] = useState(false);

  const toggleExpansionone = () => {
    setIsExpandedone(!isExpandedone);
  };
  const toggleExpansiontwo = () => {
    setIsExpandedtwo(!isExpandedtwo);
  };
  const toggleExpansionthree = () => {
    setIsExpandedthree(!isExpandedthree);
  };
  const toggleExpansionfour = () => {
    setIsExpandedfour(!isExpandedfour);
  };

  return (
    <>
      <NavBar_SideBar />
      <div dir="rtl">
        <section
          className="Test_page-title-section Test_overlay"
          data-background={third_image}
          style={{ backgroundImage: `url(${test_header})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <ul className=" Test_custom-breadcrumb mb-2 Tul" >
                  <li className=" text-white h3  Test_nasted test_header" >
                    انواع تست های شخصیت شناسی معتبر
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </section>
        <section className="Test_section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="Test_section-title text-white htitles h2">با تست روانشناسی و شخصیت شناسی توانایی‌هایتان را بشناسید
                </h2>
                <h6 className="text-white Test_font-secondary Test_mb-50 htitles h6">
                  برای شرکت در تست ها در اینیاک ثبت نام کنید
                </h6>
                <a href="/Signup" className="Test_btn Test_btn-secondary Ta">
                  ثبت نام
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="Test_section-sm">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex align-items-center Test_section-title justify-content-between">
                  <h2
                    id="testTitle"
                    className="Test_test_title_part1 mb-0 text-nowrap mr-3 htitles h2"
                  >
                    تست های فردی
                  </h2>
                  <div className="border-top w-100 Test_border-primary d-none d-sm-block"></div>
                </div>
              </div>
            </div>

            {/* course list */}
            <div className="row justify-content-center">
              {/* course item */}
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="card p-0 Test_border-primary rounded-0 Test_hover-shadow">
                  <img
                    src={second_image}
                    className="Timg card-img-top rounded-0"
                    alt="course thumb"
                  />
                  <div className="card-body">
                    <ul className="list-inline mb-2 Tul">
                      <li className="list-inline-item test_raygan">
                        <i className="ti-calendar mr-1 Test_text-color "></i>
                        #رایگان
                      </li>
                      <li className="list-inline-item"></li>
                    </ul>
                    <a href="course-single.html" className="test_title Ta">
                      <h4 className="card-title htitles h4">MBTI</h4>
                    </a>
                    <p className="card-text mb-4 paragraph">
                      {" "}
                      تست شخصیت شناسی MBTI با ارزیابی چهار مشخصه رفتاری ، افراد
                      را به شانزده تیپ شخصیتی تقسیم میکند.
                    </p>
                    <a
                      href="/MBTI"
                      className="Test_btn btn-primary btn-sm Ta"
                    >
                      شروع
                    </a>
                  </div>
                </div>
              </div>

              {/* remaining course items */}
            </div>
            {/* /course list */}
            {/* mobile see all button */}
            <div className="row">
              <div className="col-12 ">
                <a
                  href="courses.html"
                  className="Test_btn btn-sm btn-primary-outline d-sm-none d-inline-block Ta"
                >
                  sell all
                </a>
              </div>
            </div>
          </div>
          <div id="testTitle2" className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex align-items-center Test_section-title justify-content-between">
                  <h2 className="Test_test_title_part1 mb-0 text-nowrap mr-3 htitles h2">
                    تست های پیش از ازدواج
                  </h2>
                  <div className="border-top w-100 Test_border-primary d-none d-sm-block"></div>
                </div>
              </div>
            </div>

            {/* course list */}
            <div className="row justify-content-center">
              {/* course item */}
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="card p-0 Test_border-primary rounded-0 Test_hover-shadow">
                  <img
                    src={first_image}
                    className="Timg card-img-top rounded-0"
                    alt="course thumb"
                  />
                  <div className="card-body">
                    <ul className="list-inline mb-2 Tul">
                      <li className="list-inline-item test_raygan">
                        <i className="ti-calendar mr-1 text-color "></i>
                        #رایگان
                      </li>

                      <li className="list-inline-item"></li>
                    </ul>
                    <a href="course-single.html" className="test_title Ta">
                      <h4 className="card-title Test_Card_title htitles h4">Glasser</h4>
                    </a>
                    <p className="card-text mb-4 paragraph">
                      {" "}
                      تست شخصیت شناسی گلاسر 5 نیاز اساسی شما را بررسی کرده و در
                      فرآیند شناخت پیش از ازدواج کمک میکند
                    </p>
                    <a
                      href="/Glasser"
                      className="Test_btn btn-primary btn-sm Ta"
                    >
                      شروع
                    </a>
                  </div>
                </div>
              </div>

              {/* remaining course items */}
            </div>
            {/* /course list */}
            {/* mobile see all button */}
            <div className="row">
              <div className="col-12 text-center">
                <a
                  href="courses.html"
                  className="Test_btn btn-sm btn-primary-outline d-sm-none d-inline-block Ta"
                >
                  sell all
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="testq_kb-layout">
          <div className="script-only">
            <section className="jobs-faq m-t-60">
              <div className="jobs-faq-container">
                <h2 className="faq-title htitles h2">
                  سؤالات متداول درباره‌ی تست شخصیت شناسی
                </h2>
                <ul
                  className="question-list no-list-style p-0 m-t-60 Tul"
                  id="accordion"
                >
                  <li className="question-item">
                    <div
                      className={`title-row accordion-toggle ${
                        isExpandedone ? "" : "collapsed"
                      }`}
                      onClick={toggleExpansionone}
                    >
                      <h3 className="question-title htitles h3">
                        <span
                          className={`plus-icon ${
                            isExpandedone ? "minus-icon" : ""
                          }`}
                        >
                          {isExpandedone ? "-" : "+"}
                        </span>
                        <span className="written_question">
                          تست روانشناسی چه نقشی در فرایند استخدام و ارزیابی شغلی
                          دارد؟
                        </span>
                      </h3>
                    </div>
                    {isExpandedone && (
                      <div className="panel-collapse">
                        <p className="faq-answer paragraph">
                          استفاده از انواع تست های خودشناسی و تست شخصیت به
                          مدیران استخدام برای شناسایی متناسب‌ترین افراد برای
                          سازمانشان کمک می‌کند. این کار باعث می‌شود تا هنگام
                          استخدام افراد کلیدی، افراد مناسب بدون هیچ غافلگیری
                          انتخاب شوند.
                        </p>
                      </div>
                    )}
                  </li>

                  <li className="question-item">
                    <div
                      className={`title-row accordion-toggle ${
                        isExpandedtwo ? "" : "collapsed"
                      }`}
                      onClick={toggleExpansiontwo}
                    >
                      <h3 className="question-title htitles h3">
                        <span
                          className={`plus-icon ${
                            isExpandedtwo ? "minus-icon" : ""
                          }`}
                        >
                          {isExpandedtwo ? "-" : "+"}
                        </span>
                        <span className="written_question">
                          چطور تست‌های اینیاک به خودشناسی در روانشناسی کمک
                          می‌کند؟
                        </span>
                      </h3>
                    </div>
                    {isExpandedtwo && (
                      <div className="panel-collapse">
                        <p className="faq-answer paragraph">
                          انواع تست روانشناسی شخصت در اینیاک نگاه به خودشناسی از
                          بُعد روانشناسی تهیه شده است تا صفات، ویژگی‌ها و
                          ساختاری شخصیتی را بااستفاده از یک سری الگوها، مورد
                          سنجش قرار دهند و به افراد برای کسب شناخت بهتر از خود
                          کمک کند.
                        </p>
                      </div>
                    )}
                  </li>
                  <li className="question-item">
                    <div
                      className={`title-row accordion-toggle ${
                        isExpandedthree ? "" : "collapsed"
                      }`}
                      onClick={toggleExpansionthree}
                    >
                      <h3 className="question-title htitles h3">
                        <span
                          className={`plus-icon ${
                            isExpandedthree ? "minus-icon" : ""
                          }`}
                        >
                          {isExpandedthree ? "-" : "+"}
                        </span>
                        <span className="written_question">
                          چه تست‌هایی را می‌توان به‌عنوان تست شخصیت دانست؟
                        </span>
                      </h3>
                    </div>
                    {isExpandedthree && (
                      <div className="panel-collapse">
                        <p className="faq-answer paragraph">
                          کاربوم با ارائه شناخته‌شده‌ترین و معتبرترین تست‌های
                          دنیا در تلاش است تا به شما برای شناخت بهتر خودتان کمک
                          کند. از جمله این تست‌ها می‌توان از تست MBTI، تست شخصیت
                          شناسی ۵ عاملی نئو و تست شخصیت شناسی هارتمن یاد کرد.
                        </p>
                      </div>
                    )}
                  </li>
                  <li className="question-item">
                    <div
                      className={`title-row accordion-toggle ${
                        isExpandedfour ? "" : "collapsed"
                      }`}
                      onClick={toggleExpansionfour}
                    >
                      <h3 className="question-title htitles h3">
                        <span
                          className={`plus-icon ${
                            isExpandedfour ? "minus-icon" : ""
                          }`}
                        >
                          {isExpandedfour ? "-" : "+"}
                        </span>
                        <span className="written_question">
                          کدام تست شخصیت شناسی آنلاین را می‌توان به صورت رایگان
                          انجام داد؟
                        </span>
                      </h3>
                    </div>
                    {isExpandedfour && (
                      <div className="panel-collapse">
                        <p className="faq-answer paragraph">
                          سه تست شخصیت شناسی MBTI، تست هوش ریون و تست شخصیت
                          شناسی هارتمن از تست‌های رایگان شخصیت شناسی به حساب
                          می‌آیند. البته به سایر تست‌های شخصیت شناسی آنلاین را
                          نیز با پرداخت یک مبلغی جزئی می‌توان دسترسی پیدا کرد.
                        </p>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseList;