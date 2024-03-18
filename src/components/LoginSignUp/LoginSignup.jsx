import react from "react";
import React, { useState } from "react";
import "./LoginSignup.css";

import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'

import lock_icon from "../../assets/password.png";
import email_icon from "../../assets/email.png";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const navigate = useNavigate();

  const [loginLabelsColor, setLoginLabelsColor] = useState(false);
  const [passwordType, setPasswordType] = useState('password');
  const [repeatPasswordType, setRepeatPasswordType] = useState('password');
  const [passwordIcon, setPasswordIcon] = useState(eyeOff);
  const [repeatPasswordIcon, setRepeatPasswordIcon] = useState(eyeOff);

  const handlePasswordToggle = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
    setPasswordIcon(passwordIcon === eye ? eyeOff : eye);
  };

  const handleRepeatPasswordToggle = () => {
    setRepeatPasswordType(repeatPasswordType === 'password' ? 'text' : 'password');
    setRepeatPasswordIcon(repeatPasswordIcon === eye ? eyeOff : eye);
  };

  const handleSignupClick = () => {
    const loginForm = document.querySelector("form.login");
    const loginText = document.querySelector(".header .login");
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
    setRepeatPasswordType('password');
    setRepeatPasswordIcon(eyeOff);
    setPasswordType('password');
    setPasswordIcon(eyeOff);
  };

  const handleLoginClick = () => {
    const loginForm = document.querySelector("form.login");
    const loginText = document.querySelector(".header .login");
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
    setLoginLabelsColor(!loginLabelsColor);
    setRepeatPasswordType('password');
    setRepeatPasswordIcon(eyeOff);
    setPasswordType('password');
    setPasswordIcon(eyeOff)
  };



  // const handleSignupLinkClick = (e) => {
  //   e.preventDefault();
  //   const signupBtn = document.querySelector("label.signup");

  //   signupBtn.click();
  // };

  return (
    <>
      <body className="bd">
        <div className="hello">
          <div className="wrapper">
            <div className="header">
              <div className="title login">ورود</div>
              <div className="title signup">ثبت نام</div>
            </div>

            <div className="form_container">
              <div className="slider_controls">
                <input type="radio" name="slide" id="login" defaultChecked />
                <input type="radio" name="slide" id="signup" />

                <label
                  htmlFor="login"
                  className="slide login"
                  onClick={handleLoginClick}
                >
                  ورود
                </label>
                <label
                  htmlFor="signup"
                  className="slide signup"
                  onClick={handleSignupClick}
                >
                  ثبت نام
                </label>
                <div className="slider_tab"></div>
              </div>
              <div className="form_details">
                <form action="#" className="login">
                  <pre></pre>
                  <div className="field">
                    <input
                      type="text"
                      placeholder="ایمیل"
                      style={{
                        backgroundImage: `url(${email_icon})`,
                        backgroundRepeat: "no-repeat",
                        paddingRight: "40px",
                        backgroundPosition: "right",
                      }}
                    />
                  </div>
                  <div className="field">
                    <input
                      type={passwordType}
                      placeholder="رمز عبور"
                      style={{
                        backgroundImage: `url(${lock_icon})`,
                        backgroundRepeat: "no-repeat",
                        paddingRight: "40px",
                        backgroundPosition: "right",
                      }}
                    />
                    <span className="toggle-icon" onClick={handlePasswordToggle}>
                      <Icon icon={passwordIcon} size={23} />
                    </span>
                  </div>
                  <div className="pass_link">
                    <a href="#"> فراموشی رمز عبور</a>
                  </div>
                  <div className="field btn">
                    <div className="btn_layer"></div>
                    <input type="submit" value="ورود" />
                  </div>
                  <div className="signup_link">
                    {" "}
                    <a href="#" onClick={(e) => navigate("/Landing")}>
                      {" "}
                      صفحه اصلی
                    </a>
                  </div>
                </form>
                {/*signup form*/}
                <form action="#">
                  {/*<div className="field">
                    <input type="text" placeholder='Name'/>
                  </div>*/}
                  <div className="field">
                    <input
                      type="text"
                      placeholder="ایمیل"
                      style={{
                        backgroundImage: `url(${email_icon})`,
                        backgroundRepeat: "no-repeat",
                        paddingRight: "40px",
                        backgroundPosition: "right",
                      }}
                    />
                  </div>

                  <div className="field">
                    <input
                      type={passwordType}
                      placeholder="رمز عبور"
                      style={{
                        backgroundImage: `url(${lock_icon})`,
                        backgroundRepeat: "no-repeat",
                        paddingRight: "40px",
                        backgroundPosition: "right",
                      }}
                    />
                    <span className="toggle-icon" onClick={handlePasswordToggle}>
                      <Icon icon={passwordIcon} size={23} />
                    </span>
                  </div>
                  <div className="field">
                    <input
                      type={repeatPasswordType}
                      placeholder="تکرار رمز عبور"
                      style={{
                        backgroundImage: `url(${lock_icon})`,
                        backgroundRepeat: "no-repeat",
                        paddingRight: "40px",
                        backgroundPosition: "right",
                      }}
                    />
                    <span className="toggle-icon" onClick={handleRepeatPasswordToggle}>
                      <Icon icon={repeatPasswordIcon} size={23} />
                    </span>
                  </div>
                  <div className="field btn">
                    <div className="btn_layer"></div>
                    <input type="submit" value="ثبت نام" />
                  </div>
                  <div className="signup_link">
                    {" "}
                    <a href="#" onClick={(e) => navigate("/Landing")}>
                      {" "}
                      صفحه اصلی
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default LoginContainer;