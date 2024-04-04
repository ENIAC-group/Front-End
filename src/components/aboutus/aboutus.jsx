import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.css";


const AboutUsPage = () => {
    const navigate = useNavigate()
    return (
        <body className={styles.aboutusbody}>
        <div className={styles.backgroundaboutus}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <br />
            <h1 className={styles.headeraboutus}>درباره ما
                <i class="material-icons icons">diversity_1</i></h1>
            <br />
            <p className={styles.paragsize}>"مرکز روانشناسی و مشاوره خانواده"
            <br />
            .این مرکز فعالیت خود را با هدف ارائه خدمات روانشناسی و روانپزشکی توسط متخصصان و روانپزشکان مجرب و حاذق آغاز کرده است. این مرکز با داشتن فضایی مناسب، خدماتی تخصصی نظیر روان درمانی فردی، درمان مشکلات زوج و خانواده، مشاوره انلاین، روانپزشکی سالمندان، کودکان و نوجوانان را ارائه می دهد
            <br />
            :بخش‌های مختلف این مرکز، شامل</p>
            <div align='center'>
            <table className={styles.tableaboutus} align='center'>
                <tr>
                    <th><button className={styles.button1}>گروه روان پزشکان و پزشکان سلامت</button></th>
                    <th><button className={styles.button3}>گروه زوج درمانگران</button></th>
                    <th><button className={styles.button1}>گروه روان درمانگران فردی</button></th>
                    <th><button className={styles.button1}>گروه مشاوره کودک</button></th>
                </tr>
                <tr>
                    <th><button className={styles.button4}>واحد روان سنجی و پژوهش</button></th>
                    <th><button className={styles.button1}>گروه مشاورین تحصیلی و شغلی</button></th>
                    <th><button className={styles.button1}>گروه مشاورین پیش از ازدواج</button></th>
                    <th><button className={styles.button1}>گروه مشاوره نوجوان</button></th>
                </tr>
            </table>
            </div>
            <br />
            <div align='center'>
                <a target="_blank">
                    <img src="https://www.uab.edu/news/images/2018/CC_10.2.jpg" className={styles.image1space} alt="Cinque Terre" width="300" height="200" />
                    
                    <img src="https://www.uab.edu/news/images/2018/CC_10.3.jpg" className={styles.imageclinic} alt="Cinque Terre" width="300" height="200" />
                </a>
                <div>تصاویری از محیط کلینیک</div>
            </div>
            <div align='center'>
            <button className={styles.button1} onClick={e=>navigate("/Landing")}>بازگشت به صفحه اصلی</button>
            </div>
            <p className={styles.paragend}>🌱.منتظر حضور سبزتان هستیم</p>

            <a align='center' href="https://github.com/ENIAC-group">
                <div><img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo-768x432.png" className={styles.imagegit}></img></div>
            </a>
        </div >
        </body>
    );
};

export default AboutUsPage;