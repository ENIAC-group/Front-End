import React from "react";
import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";
import image from "../../assets/Landing.png";

const Landing = () => {
  const navigate = useNavigate()
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.BrandName}>ENIAC</h1>
        <button className={styles.StartButton} onClick={e=>navigate("/Signup")}>برای شروع کلیک کنید</button>
        {/* <button className={styles.StartButton}>برای شروع کلیک کنید</button> */}
      </header>
      <div className={styles.Landingbody}>
        <p className={styles.Desc}>
          وسیله ای برای همراهی و پیشروی در سلامت روحی افراد
          <br />
          <br />
          جلوگیری از بیماری های روانی
          <br />
          <br />
          درمان مشکلات
          <br />
          <br />
          با ثبت نام در اینیاک میتوانید با کمک افراد با‌مهارت و خبّره در این
          زمینه پیشرفت کنید!!
          <button className={styles.signup} onClick={e=>navigate("/Signup")}  >ثبت نام</button>
          {/* <button className={styles.signup}>ثبت نام</button> */}
        </p>
          <img className={styles.imageimagecover} src={image} alt="" />
        <h4 className={styles.footer}>
          کاری از بچه های 400 مهندسی کامپیوتر علم و صنعت
          <br />
        </h4>
      </div>
    </>
  );
};

export default Landing;
