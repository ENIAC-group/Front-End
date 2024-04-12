import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './styles.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// import { Icon } from "react-icons-kit";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
// import { eye } from "react-icons-kit/feather/eye";

import gender_icon from "../../assets/gender.png";
import date_icon from "../../assets/date.png";
import phone_icon from "../../assets/phone.png";
import person_icon from "../../assets/person.png";




const CompleteInfo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="button-20">
        تکمیل اطلاعات
      </Button>

      <Modal show={show} onHide={handleClose} className="bd wrapper">
        <Modal.Header className="header">
          <Modal.Title className='title'>تکمیل اطلاعات</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body className="form_container .login"> */}
        <div className='form_container'>
          <div className="form_details">
            <form action="#" className="form login">
              <pre></pre>
              <div className="field">
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
                />
              </div>
              <div className="field">
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
                />
              </div>
              <div className="field">
                <input
                  className="input"
                  type="text"
                  placeholder="شماره تماس"
                  style={{
                    backgroundImage: `url(${phone_icon})`,
                    backgroundRepeat: "no-repeat",
                    paddingRight: "40px",
                    backgroundPosition: "right",
                  }}
                />
              </div>

              <div className="field">
                <select style={{backgroundColor: "white",
                  backgroundImage: `url(${gender_icon})`,
                  backgroundRepeat: "no-repeat",
                  paddingRight: "40px",
                  backgroundPosition: "right",
                  color: "rgb(188, 186, 186)",
                }}className="input" defaultValue="" >
                  <option className="input" value="" disabled hidden>
                    جنسیت
                  </option>
                  <option style={{fontFamily: "Vazir, Arial, sans-serif"}} value="male">مرد</option>
                  <option style={{fontFamily: "Vazir, Arial, sans-serif"}} value="female">زن</option>
                  <option style={{fontFamily: "Vazir, Arial, sans-serif"}} value="other">سایر</option>
                </select>
              </div>

              <div style={{
                    backgroundImage: `url(${date_icon})`,
                    backgroundRepeat: "no-repeat",
                    paddingRight: "40px",
                    backgroundPosition: "right",
                  }}className="field">
                <DatePicker
                  className="input"
                  placeholderText="تاریخ تولد"
                  // selected={selectedDate}
                  // onChange={handleDateChange}
                  style = {{
                    borderBottom: "2px solid #adadad",
                    transition: "border-color 0.3s ease",
                    width: "100%",
                    height: "100%"
                  }}
                />
              </div>
              <pre></pre>
              <div className="field btn">
                <div className="btn_layer"></div>
                <input
                  type="submit"
                  value="ارسال"
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
}

export default CompleteInfo;