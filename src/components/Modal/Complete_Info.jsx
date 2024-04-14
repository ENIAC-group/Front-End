import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { isValidPhoneNumber } from "react-phone-number-input";
import moment from 'moment';

// import { Icon } from "react-icons-kit";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
// import { eye } from "react-icons-kit/feather/eye";

import gender_icon from "../../assets/gender.png";
import date_icon from "../../assets/date.png";
import phone_icon from "../../assets/phone.png";
import person_icon from "../../assets/person.png";

function toFarsiNumber(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n
    .toString()
    .split("")
    .map((x) => farsiDigits[x])
    .join("");
}

const CompleteInfo = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [date_of_birth, set_date_of_birth] = useState("");
  const [gender, setGender] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ChangeGender = (event) => {
    if (event.target.value === "مرد") {
      setGender("M");
    } else if (event.target.value === "زن") {
      setGender("F");
    } else if (event.target.value === "ساير") {
      setGender("B");
    }
  };

  const handleDateChange = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    set_date_of_birth(formattedDate);
    console.log(date_of_birth);
    console.log(formattedDate);
  };

  useEffect(() => {
    if (date_of_birth !== "") {
      set_date_of_birth(date_of_birth);
    }
  }, [date_of_birth]);


  const SendUsersNewInfo = async (event) => {
    console.log("helloo");
    event.preventDefault();
    const errors = {
      FirstNameLengthError: "",
      LastNameLengthError: "",
      PhonenumberFormatError: "",
      date_of_birthError: "",
      GenderError: "",
    };
    const errorMessages = [];

    if (firstname.length === 0) {
      errors.FirstNameLengthError = "وارد کردن نام الزامی است!";
      errorMessages.push(errors.FirstNameLengthError);
    } else if (firstname.length > 20) {
      errors.FirstNameLengthError = "نام طولانی است!";
      errorMessages.push(errors.FirstNameLengthError);
    }

    if (lastname.length === 0) {
      errors.LastNameLengthError = "وارد کردن نام خانوادگی الزامی است!";
      errorMessages.push(errors.LastNameLengthError);
    } else if (lastname.length > 30) {
      errors.LastNameLengthError = "نام خانوادگی طولانی است!";
      errorMessages.push(errors.LastNameLengthError);
    }

    if (phonenumber === "") {
      errors.PhonenumberFormatError = "وارد کردن شماره تماس الزامی است!";
      errorMessages.push(errors.PhonenumberFormatError);
    }
    //else if (
    //   !isValidPhoneNumber(phonenumber.toString()) ||
    //   phonenumber.length > 15
    // ) {
    //   errors.PhonenumberFormatError = "قالب شماره درست نیست!";
    //   errorMessages.push(errors.PhonenumberFormatError);
    // }

    const date_of_birth = new Date(date_of_birth);
    const today = new Date();
    // Check if the date_of_birth is a valid date
    if (isNaN(date_of_birth.getTime())) {
      errors.date_of_birthError = "تاریخ تولد معتبر نیست!";
      errorMessages.push(errors.date_of_birthError);
    }

    //
    // Check if the date_of_birth is in the future
    if (date_of_birth > today) {
      errors.date_of_birthError = "تاریخ تولد نمی‌تواند در آینده باشد!";
      errorMessages.push(errors.date_of_birthError);
    }

    // Calculate the minimum allowed date_of_birth (e.g., 18 years ago from today)
    const mindate_of_birth = new Date();
    mindate_of_birth.setFullYear(today.getFullYear() - 18);

    // Check if the date_of_birth is below the minimum allowed date_of_birth
    if (date_of_birth > mindate_of_birth) {
      errors.date_of_birthError = "شما باید حداقل ۱۸ سال داشته باشید!";
      errorMessages.push(errors.date_of_birthError);
    }

    // if (gender === "") {
    //   errors.GenderError = "انتخاب جنسیت الزامی است!";
    //   errorMessages.push(errors.GenderError);
    // }

    // Check if there are any errors
    if (errorMessages.length === 0) {
      // No errors, proceed with submitting the form
      try {
        console.log("hello");
        // Make an API request to submit the form data
        const token = localStorage.getItem("accessToken");
        console.log(token);
        const response = await axios(
          "http://127.0.0.1:8000/accounts/complete_info/",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            data: {
              firstname: firstname,
              lastname: lastname,
              phone_number: phonenumber,
              date_of_birth: date_of_birth,
              gender: "M",
            },
          }
        );

        // Handle the response accordingly
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "اطلاعات با موفقیت ثبت شد!",
            background: "#473a67",
            color: "#b4b3b3",
            width: "26rem",
            height: "18rem",
            confirmButtonText: "تایید",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "خطا در ثبت اطلاعات!",
            background: "#473a67",
            color: "#b4b3b3",
            width: "26rem",
            height: "18rem",
            confirmButtonText: "تایید",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "خطا در ارسال درخواست!",
          background: "#473a67",
          color: "#b4b3b3",
          width: "26rem",
          height: "18rem",
          confirmButtonText: "تایید",
        });
        console.log(error);
      }
    } else {
      // Display a single pop-up with all the error messages
      Swal.fire({
        icon: "error",
        title: "خطا",
        html: errorMessages.join("<br>"), // Display error messages as separate lines
        background: "#473a67",
        color: "#b4b3b3",
        width: "26rem",
        height: "18rem",
        confirmButtonText: "تایید",
      });
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="button-20">
        تکمیل اطلاعات
      </Button>

      <Modal show={show} onHide={handleClose} className="bd_modal wrapper_modal" centered>
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
                {/* <PhoneInput
                  placeholder="شماره تماس"
                  value={phonenumber}
                  onChange={setPhonenumber}
                  className='input'
                  style={{
                    backgroundImage: `url(${phone_icon})`,
                    backgroundRepeat: "no-repeat",
                    paddingRight: "40px",
                    backgroundPosition: "right",
                  }}
                /> */}
                <input
                  className="input"
                  type="text"
                  placeholder="شماره تماس"
                  value={phonenumber.toString()}
                  onChange={(event) => setPhonenumber(event.target.value)}
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
                  paddingRight: "40px",
                  backgroundPosition: "right",
                }}
                className="field_modal"
              >
                <DatePicker
                  dateFormat="yyyy-MM-dd"
                  selected={date_of_birth}
                  value={date_of_birth}
                  className="input"
                  placeholderText="تاریخ تولد"
                  // selected={selectedDate}
                  // onChange={handleDateChange}
                  style={{
                    borderBottom: "2px solid #adadad",
                    transition: "border-color 0.3s ease",
                    width: "100%",
                    height: "100%",
                  }}
                  onChange={handleDateChange}
                />
              </div>
              <pre></pre>
              <div className="field_modal btn">
                <div className="btn_layer"></div>
                <input
                  type="submit"
                  value="ارسال"
                  //onChange={(event) => SendUsersNewInfo(event)}
                  onClick={SendUsersNewInfo}
                />
              </div>
            </form>
          </div>
        </div>
        {/* </Modal.Body> */}
      </Modal>
      {show && <div className="modal-background" />}
    </>
  );
};

export default CompleteInfo;
