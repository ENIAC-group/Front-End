import React, { useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";
import validator from "validator";
import withReactContent from "sweetalert2-react-content";

import { TbGenderBigender } from "react-icons/tb";
import { FaRegCalendarDays, FaPhoneFlip } from "react-icons/fa6";
import { MdDriveFileRenameOutline, MdAlternateEmail } from "react-icons/md";

import {JBDateInput} from 'jb-date-input-react';

function ChangeInformation({ p_pages, user_info, setinfo }) {
  const [sub1, setSub1] = useState(true);
  const [sub2, setSub2] = useState(true);
  const [sub3, setSub3] = useState(true);
  const [sub4, setSub4] = useState(true);
  const GetFirstName = (event) => {
    if (
      validator.isAlpha(event.target.value.replace(" ", ""), "fa-IR") |
      validator.isAlpha(event.target.value.replace(" ", ""), "en-AU")
    )
      setSub1(true);
    else setSub1(false);
  };
  const GetLastName = (event) => {
    if (
      validator.isAlpha(
        event.target.value.replace(" ", "").replace(" ", ""),
        "fa-IR"
      ) |
      validator.isAlpha(
        event.target.value.replace("  ", "").replace(" ", ""),
        "en-AU"
      )
    )
      setSub2(true);
    else setSub2(false);
  };
  const GetNumber = (event) => {
    if (
      validator.isNumeric(event.target.value) &
      (event.target.value.length == 11)
    )
      setSub3(true);
    else setSub3(false);
  };

  async function SendUserInfo(event) {
    const n_firstname = document.getElementById("user_firstname").value;
    const n_lastname = document.getElementById("user_lastname").value;
    const n_gender = document.getElementById("user_gender").value;
    const n_birthday = document.querySelector("jb-date-input").value;
    const n_phonenumber = document.getElementById("user_phonenumber").value;
    event.preventDefault();
    if (!(sub1 & sub2 & sub3))
      withReactContent(Swal).fire({
        icon: "warning",
        title: "!تغییر درست فیلد ها برای اصلاح اطلاعات الزامی است",
        background: "#473a67",
        color: "#b4b3b3",
        width: "35rem",
        backdrop: `
      rgba(84, 75, 87.0.9)
      left top
      no-repeat`,
        confirmButtonText: "تایید",
      });
    else if (sub4)
      withReactContent(Swal).fire({
        icon: "warning",
        title: "!تغییری برای اعمال وجود ندارد",
        background: "#473a67",
        color: "#b4b3b3",
        width: "35rem",
        backdrop: `
      rgba(84, 75, 87.0.9)
      left top
      no-repeat`,
        confirmButtonText: "تایید",
      });
    else {
      const accessToken = localStorage.getItem("accessToken");
      try {
        const response = await axios(
          "http://127.0.0.1:8000/accounts/complete_info/",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            data: {
              firstname: n_firstname,
              lastname: n_lastname,
              phone_number: n_phonenumber,
              date_of_birth: n_birthday,
              gender: n_gender,
            },
          }
        );
        if (response.status == 200) {
          setSub4(true);
          withReactContent(Swal).fire({
            icon: "success",
            title: "!اطلاعات شما با موفقیت ثبت شد",
            background: "#473a67",
            color: "#b4b3b3",
            width: "35rem",
            backdrop: `
        rgba(84, 75, 87.0.9)
        left top
        no-repeat`,
            confirmButtonText: "تایید",
          });
          setinfo({
            FirstName: n_firstname,
            LastName: n_lastname,
            Email: user_info.Email,
            BirthDay: n_birthday,
            Gender: n_gender,
            PhoneNumber: n_phonenumber,
          });
        }
      } catch (error) {
        if (error.response.status == 500)
          withReactContent(Swal).fire({
            icon: "error",
            title: "!ثبت اطلاعات موفقیت آمیز نبود",
            background: "#473a67",
            color: "#b4b3b3",
            width: "35rem",
            backdrop: `
          rgba(84, 75, 87.0.9)
          left top
          no-repeat`,
            confirmButtonText: "تایید",
          });
        if (error.response.status == 400) {
          const msg = error.response.data;
          console.log(msg);
          if (msg.phone_number != null)
            withReactContent(Swal).fire({
              icon: "error",
              title: "!شماره باید در قالب ایران باشد",
              background: "#473a67",
              color: "#b4b3b3",
              width: "35rem",
              backdrop: `
          rgba(84, 75, 87.0.9)
          left top
          no-repeat`,
              confirmButtonText: "تایید",
            });
        }
      }
    }
  }
  return (
    <div className="panel" style={{ direction: "rtl" }} onLoad={SendUserInfo}>
      <div
        className="panel-body bio-graph-info"
        style={p_pages == 2 ? { display: "inline-block" } : { display: "none" }}
      >
        <h1>اصلاح اطلاعات شخصی</h1>
        <div className="row">
          <div className="bio-row">
            <p>
              <MdDriveFileRenameOutline style={{ color: "#ACBCFF" }} />
              <span>نام: </span>
              <br />
              <input
                type="text"
                id="user_firstname"
                defaultValue={user_info.FirstName}
                className="profile_input"
                onChange={(e) => {
                  GetFirstName(e);
                  setSub4(false);
                }}
              />
              <div
                className="profile_sub_error"
                style={sub1 ? { display: "none" } : {}}
              >
                نام وارد شده باید فقط دارای حروف باشد
              </div>
            </p>
          </div>
          <div className="bio-row">
            <p>
              <MdDriveFileRenameOutline style={{ color: "#ACBCFF" }} />
              <span>نام خانوادگی :</span>
              <br />
              <input
                type="text"
                id="user_lastname"
                defaultValue={user_info.LastName}
                className="profile_input"
                onChange={(e) => {
                  GetLastName(e);
                  setSub4(false);
                }}
              />
              <div
                className="profile_sub_error"
                style={sub2 ? { display: "none" } : {}}
              >
                نام وارد شده باید فقط دارای حروف باشد
              </div>
            </p>
          </div>
          <div className="bio-row">
            <p>
              <TbGenderBigender style={{ color: "#ACBCFF" }} />
              <span>جنسیت:</span>
              <br />
              <select
                id="user_gender"
                className="profile_input_G"
                defaultValue={user_info.Gender}
                onChange={(e) => {
                  setSub4(false);
                }}
              >
                <option value="F" className="profile_input_F">
                  مونث
                </option>
                <option value="M" className="profile_input_M">
                  مذکر
                </option>
                <option value="B" className="profile_input_B">
                نامشخص
                </option>
              </select>
            </p>
          </div>
          <div className="bio-row" style={{ display: "flex" }}>
            <p>
              <FaRegCalendarDays style={{ color: "#ACBCFF" }} />
              <span>تاریخ تولد:</span>
              <br />
              <div class="component-wrapper">
                <jb-date-input
                  onClick={(e) => {
                    setSub4(false);
                  }}
                  id="user_birthday"
                  input-type="JALALI"
                  format="YYYY-MM-DD"
                  value={user_info.BirthDay}
                />
              </div>
            </p>
          </div>
          <div className="bio-row">
            <p>
              <FaPhoneFlip style={{ color: "#ACBCFF" }} />
              <span>شماره همراه :</span>
              <br />
              <input
                type="text"
                id="user_phonenumber"
                defaultValue={user_info.PhoneNumber}
                className="profile_input"
                onChange={(e) => {
                  GetNumber(e);
                  setSub4(false);
                }}
              />
              <div
                className="profile_sub_error"
                style={sub3 ? { display: "none" } : {}}
              >
                شماره همراه وارد شده صحیح نیست!
              </div>
            </p>
          </div>
          <button
            className="button-86"
            role="button"
            style={{ width: "25%", marginRight: "60%" }}
            onClick={(e) => {
              SendUserInfo(e);
            }}
          >
            ثبت {"   "}اطلاعات
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangeInformation;
