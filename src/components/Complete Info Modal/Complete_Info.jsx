import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import {JBDateInput} from 'jb-date-input-react';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { convertToPersianNumbers, convertToEnglishNumbers, isPersianString } from './Coverters_Checkers.js';
import gender_icon from "../../assets/gender.png";
import date_icon from "../../assets/date.png";
import phone_icon from "../../assets/phone.png";
import person_icon from "../../assets/person.png";
import "./styles.css"

const CompleteInfo = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [show, setShow] = useState(false);
  // const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ChangeGender = (event) => {
    const selectedValue = event.target.value.toString().trim();
    if (selectedValue === "male") {
      setGender("M");
    } else if (selectedValue === "female") {
      setGender("F");
    } else if (selectedValue === "other") {
      setGender("B");
    } else {
      setGender("");
    }
  };
  useEffect(() => {
    console.log(gender);
  }, [gender]);

  useEffect(() => {
    console.log(dateOfBirth);
  }, [dateOfBirth]);

  const SendUsersNewInfo = async (event) => {
    event.preventDefault();
    const errors = {};
    const errorMessages = [];

    // firstname field validations
    if (firstname.length === 0) {
      errors.FirstNameLengthError = "!وارد کردن نام الزامی است";
      errorMessages.push(errors.FirstNameLengthError);
    } else if (!isPersianString(firstname)) {
      errors.FirstNameLengthError = "!نام باید فقط شامل حروف فارسی باشد";
      errorMessages.push(errors.FirstNameLengthError);
    } else if (firstname.length > 20) {
      errors.FirstNameLengthError = "!نام طولانی است";
      errorMessages.push(errors.FirstNameLengthError);
    }

    // lastname field validations
    if (lastname.length === 0) {
      errors.LastNameLengthError = "!وارد کردن نام خانوادگی الزامی است";
      errorMessages.push(errors.LastNameLengthError);
    } else if (!isPersianString(lastname)) {
      errors.LastNameLengthError = "!نام خانوادگی باید فقط شامل حروف فارسی باشد";
      errorMessages.push(errors.LastNameLengthError);
    } else if (lastname.length > 30) {
      errors.LastNameLengthError = "!نام خانوادگی طولانی است";
      errorMessages.push(errors.LastNameLengthError);
    }

    // phonenumebr field validations
    const phoneRegex = /^(?:\+98|0)(?:\s?)9[0-9]{9}/;
    if (!phonenumber.trim()) {
      errors.PhonenumberFormatError = "!وارد کردن شماره تماس الزامی است";
      errorMessages.push(errors.PhonenumberFormatError);
    } else if (!phoneRegex.test(phonenumber) || phonenumber.length > 15) {
      errors.PhonenumberFormatError = "!قالب شماره درست نیست";
      errorMessages.push(errors.PhonenumberFormatError);
    }

    // gender field validations
    if (gender === "") {
      errors.GenderError = "!انتخاب جنسیت الزامی است";
      errorMessages.push(errors.GenderError);
    }

    // date of brith validation
    const dateOfBirthDate = new Date(dateOfBirth);
    const today = new Date();
    if (dateOfBirth === "") {
      errors.dateOfBirthError = "!وارد کردن تاریخ تولد الزامی است";
      errorMessages.push(errors.dateOfBirthError);
    } else if (isNaN(dateOfBirthDate.getTime())) {
      errors.dateOfBirthError = "!تاریخ تولد معتبر نیست";
      errorMessages.push(errors.dateOfBirthError);
    } else if (dateOfBirthDate > today) {
      errors.dateOfBirthError = "!تاریخ تولد نمی‌تواند در آینده باشد";
      errorMessages.push(errors.dateOfBirthError);
    } else {
      const minDateOfBirth = new Date();
      minDateOfBirth.setFullYear(today.getFullYear() - 18);
      if (dateOfBirthDate > minDateOfBirth) {
        errors.dateOfBirthError = "!شما باید حداقل ۱۸ سال داشته باشید";
        errorMessages.push(errors.dateOfBirthError);
      }
    }

    // send POST requesnt and handle errors
    if (errorMessages.length === 0) {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.post("http://127.0.0.1:8000/accounts/complete_info/", {
          firstname,
          lastname,
          phone_number: phonenumber,
          date_of_birth: dateOfBirth,
          gender,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          toast.success('!اطلاعات شما با موفقیت ثبت شد', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setShow(false);
          setFirstname("");
          setLastname("");
          setGender("");
          setPhonenumber("");
          setDateOfBirth("");
        } else {
          Swal.fire({
            icon: "error",
            title: "!خطا در ثبت اطلاعات",
            background: "#473a67",
            color: "#b4b3b3",
            width: "26rem",
            height: "18rem",
            confirmButtonText: "تایید",
            customClass: {
              container: 'custom-swal-container'
            }
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "!خطا در ارسال درخواست",
          background: "#473a67",
          color: "#b4b3b3",
          width: "26rem",
          height: "18rem",
          confirmButtonText: "تایید",
          customClass: {
            container: 'custom-swal-container'
          }
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "!خطا",
        html: errorMessages.join("<br>"),
        background: "#473a67",
        color: "#b4b3b3",
        width: "26rem",
        height: "18rem",
        confirmButtonText: "تایید",
        customClass: {
          container: 'custom-swal-container'
        }
      });
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="button-20">
        تکمیل اطلاعات
      </Button>

      <Modal backdrop="static" show={show} onHide={handleClose} className="bd_modal modal wrapper_modal" centered>
        <Modal.Header className="header_modal">
          <Modal.Title className="title_modal">تکمیل اطلاعات</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body className="form_container .login"> */}
        <div className="form_container_modal">
          <div className="form_details_modal">
            <form action="#" className="form login">
              <pre></pre>
              <div className="field_modal">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="نام"
                  style={{
                    backgroundImage: `url(${person_icon})`,
                    backgroundRepeat: "no-repeat",
                    paddingRight: "40px",
                    backgroundPosition: "right",
                  }}
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </div>
              <div className="field_modal">
                <input
                  className="input"
                  type="text"
                  placeholder="نام خانوادگی"
                  style={{
                    backgroundImage: `url(${person_icon})`,
                    backgroundRepeat: "no-repeat",
                    paddingRight: "40px",
                    backgroundPosition: "right",
                  }}
                  onChange={(event) => setLastname(event.target.value)}
                />
              </div>
              <div className="field_modal">
                <input
                  className="input"
                  type="text"
                  placeholder="شماره تماس"
                  value={convertToPersianNumbers(phonenumber)}
                  onChange={(event) => setPhonenumber(convertToEnglishNumbers(event.target.value))}
                  style={{
                    backgroundImage: `url(${phone_icon})`,
                    backgroundRepeat: "no-repeat",
                    paddingRight: "40px",
                    backgroundPosition: "right",
                  }}
                />
              </div>

              <div className="field_modal">
                <select
                  style={{
                    backgroundColor: "white",
                    backgroundImage: `url(${gender_icon})`,
                    backgroundRepeat: "no-repeat",
                    paddingRight: "40px",
                    backgroundPosition: "right",
                    color: "rgb(188, 186, 186)",
                  }}
                  className="input"
                  defaultValue=""
                  onChange={(event) => ChangeGender(event)}
                >
                  <option className="input" value="" disabled hidden>
                    جنسیت
                  </option>
                  <option
                    style={{ fontFamily: "Vazir, Arial, sans-serif" }}
                    value="male"
                  >
                    مرد
                  </option>
                  <option
                    style={{ fontFamily: "Vazir, Arial, sans-serif" }}
                    value="female"
                  >
                    زن
                  </option>
                  <option
                    style={{ fontFamily: "Vazir, Arial, sans-serif" }}
                    value="other"
                  >
                    سایر
                  </option>
                </select>
              </div>
              <div
                style={{
                  backgroundImage: `url(${date_icon})`,
                  backgroundRepeat: "no-repeat",
                  // paddingRight: "40px",
                  backgroundPosition: "right",
                  borderBottom: "2px solid #adadad",
                  // transition: "border-color 0.3s ease"
                  marginBottom: "20px"
                }}
                className="field_modal"
              >
                {/* <DatePicker
                  id="datePicker"
                  format="YYYY/MM/DD"
                  selected={date_of_birth}
                  value={date_of_birth}
                  placeholderText="تاریخ تولد"
                  // style={{
                  //   width: "95%",
                  //   border: "none",
                  //   height: "100%",
                  //   direction: "rtl",
                  //   outline: "none",
                  //   paddingLeft: "15px",
                  //   fontSize: "18px",
                  //   color: "gray",
                  //   caretColor: "rgb(152, 103, 175)",
                  //   fontFamily: "Vazir, Arial, sans-serif",
                  // }}
                  onChange={handleDateChange}
                /> */}
                <div
                style={{
                  border: "none",
                  height: "40px",
                  width: "92%",
                  direction: "rtl",
                  fonySize: "15px",
                  marginBottom: "10px"
                }}>
                 <JBDateInput placeholder="تاریخ تولد"
                 usePersianNumber={true}
                 onSelect={(event) => {setDateOfBirth(event.target.value)}}
                 format="YYYY-MM-DD"
                 id="datePicker"
                 style={{
                  border:"none !important",
                  backgroundColor: "white"
                 }}
                 className="jb-date-input-web-component input-box"
                 calendarClassName="custom-calendar"
                 >
                </JBDateInput>
                </div>
              </div>
              <pre></pre>
              {/* <div className="field_modal btn">
                <div className="btn_layer"></div>
                <input
                  type="submit"
                  value="ارسال"
                  //onChange={(event) => SendUsersNewInfo(event)}
                  onClick={SendUsersNewInfo}
                />
              </div> */}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="field_modal btn" style={{ marginRight: '10px' }}>
                <div className="btn_layer"></div>
                <input
                  type="submit"
                  value="بستن"
                  onClick={() => setShow(false)}
                />
              </div>
              <div className="field_modal btn" style={{ marginLeft: '10px' }}>
                <div className="btn_layer"></div>
                <input
                  type="submit"
                  value="ارسال"
                  onClick={SendUsersNewInfo}
                />
              </div>
            </div>

            </form>
          </div>
        </div>
      </Modal>
      {show && <div className="modal-background" />}
    </>
  );
};

export default CompleteInfo;
