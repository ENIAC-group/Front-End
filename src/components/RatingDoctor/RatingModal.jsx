import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import "./rating_style.css"
import Stars from "./Stars";

const RatingModal = (doctorId) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} className="rating-button-20">
        دادن امتیاز
      </Button>

      <Modal
        backdrop="static"
        show={show}
        onHide={() => setShow(false)}
        className="rating-bd_modal modal rating-wrapper_modal"
        centered
      >
        <Modal.Header className="rating-header_modal">
          <Modal.Title className="rating-title_modal">دادن امتیاز</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body className="form_container .login"> */}
        <div className="rating-form_container_modal">
          <h4 style={{ fontFamily: "Ios15Medium", color: "gray", fontSize: "22px", textAlign: "center", direction: "rtl", justifyContent: "center", alignItems: "center", marginTop: "2%"}}>به این درمانگر از ۱ تا ۵ چه امتیازی می‌دهید؟</h4>
          <Stars />
          <div>
          <h4 style={{ fontFamily: "Ios15Medium",marginBottom: "6%" ,color: "gray",fontSize: "22px", textAlign: "center", direction: "rtl", justifyContent: "center", alignItems: "center", marginTop: "10%"}}>نظر خود را در مورد این درمانگر بنویسید.</h4>
          <TextField
            fullWidth
            multiline
            rows={4}
            rowsMax={4}
            autoComplete="off"
            variant="outlined"
            value={value}
            onChange={handleChange}
            dir="rtl" // Set the direction to RTL
            InputLabelProps={{
              dir: 'rtl' // Set the direction of the label to RTL
            }}
          />
          </div>
          <div className="rating-field_modal rating-btn" style={{ width: "96%", marginLeft: "2%" ,marginTop: "15%"}}>
                  <div className="rating-btn_layer"></div>
                  <input
                    type="submit"
                    value="ارسال"
                  />
          </div>
        </div>
      </Modal>
      {show && <div className="rating-modal-background" />}
    </>
  );
};

export default RatingModal;
