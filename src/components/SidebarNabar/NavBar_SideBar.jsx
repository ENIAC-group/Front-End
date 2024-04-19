import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHref } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { GrContactInfo } from "react-icons/gr";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";
import styles from "./NavBar.module.css";

import {
  FaCog,
  FaHome,
  FaServicestack,
  FaRegStickyNote,
  FaRegFileAlt,
} from "react-icons/fa";
import styles1 from "./Sidebar.module.css";
const NavBar_SideBar = () => {
  const navigate = useNavigate();
  const [sideBarToggle, setsideBarToggle] = useState(false);
  const handsidebarToggle = () => {
    setsideBarToggle(!sideBarToggle);
  };
  return (
    <>
      <div
        className={styles.navbar}
        style={sideBarToggle ? { marginRight: "16rem" } : {}}
      >
        <div className={styles.navcontainer}>
          <div style={{ position: "relative" }}>
            <div className={styles.profile_btn}>
              <FaUserCircle style={{ width: "18px", height: "18px" }} />
              <div className={styles.profile_menu}>
                <ul className={styles.prof_list}>
                  <li>
                    <label onClick={(e) => navigate("/User_Panel")}>
                      پروفایل
                    </label>
                  </li>
                  {localStorage.getItem("accessToken") != null ? (
                    <li>
                      <label onClick={(e)=>{navigate("/Home");}}>خروج از حساب کاربری</label>
                    </li>
                  ) : (
                    <li>
                      <label onClick={(e)=>navigate("/signup")}>ورود به حساب کاربری</label>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <a className={styles.con} onClick={(e) => navigate("/Doctors")}>
            <FaUserDoctor className={styles.FB} />
          </a>
          <a className={styles.con}>
            <FaBell className={styles.FB} onClick={(e) => navigate("/Notif")} />
          </a>
        </div>
        <div className={styles.p1} onClick={(e) => navigate("/Home")}>
          <label className={styles.sitetitle}>ENIAC</label>
        </div>
        <div className={styles.p1}>
          <div style={{ width: "90px" }}></div>
          <FaBars className={styles.fBar} onClick={handsidebarToggle} />
        </div>
      </div>
      {/* ----------------------------------------------------------------- */}
      <div style={sideBarToggle ? { display: "block" } : { display: "none" }}>
        <div className={styles1.side_body}>
          <div className={styles1.side_p1}>
            <h1 className={styles1.side_title}>داشبورد</h1>
          </div>
          <hr style={{ borderBlockColor: "white" }}></hr>
          <ul className={styles1.side_list}>
            <li
              className={styles1.side_list_element}
              onClick={(e) => {
                handsidebarToggle();
                navigate("/Home");
              }}
            >
              <label href="" className={styles1.side_list_element_text}>
                <FaHome className={styles1.side_icons} /> خانه
              </label>
            </li>
            {localStorage.getItem("accessToken") != null ? (
                    <li
                    className={styles1.side_list_element}
                    onClick={(e) => {
                      handsidebarToggle();
                      navigate("/User_panel");
                    }}
                  >
                    <label href="" className={styles1.side_list_element_text}>
                      <FaUserCircle className={styles1.side_icons} /> پروفایل
                    </label>
                  </li>
                  ) : <></>}
            <li
              className={styles1.side_list_element}
              onClick={(e) => {
                handsidebarToggle();
                navigate("/Tests");
              }}
            >
              <label href="" className={styles1.side_list_element_text}>
                <FaRegFileAlt className={styles1.side_icons} /> تست ها
              </label>
            </li>
            <li
              className={styles1.side_list_element}
              onClick={(e) => {
                handsidebarToggle();
                navigate("/Landing");
              }}
            >
              <label href="" className={styles1.side_list_element_text}>
                <FaServicestack className={styles1.side_icons} /> خدمات
              </label>
            </li>
            <li
              className={styles1.side_list_element}
              onClick={(e) => {
                handsidebarToggle();
                navigate("/Aboutus");
              }}
            >
              <label href="" className={styles1.side_list_element_text}>
                <FaRegStickyNote className={styles1.side_icons} /> معرفی
              </label>
            </li>
            <li
              className={styles1.side_list_element}
              onClick={(e) => {
                handsidebarToggle();
                navigate("/Setting");
              }}
            >
              <label href="" className={styles1.side_list_element_text}>
                <FaCog className={styles1.side_icons} /> تنظیمات
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar_SideBar;
