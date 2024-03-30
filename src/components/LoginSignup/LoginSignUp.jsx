import react from "react";
import React, { useState } from "react";
import "./LoginSignup.css";

import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { IsValidEmail } from "./IsValidEmail"
import { useNavigate } from "react-router-dom";

import lock_icon from "../../assets/password.png";
import email_icon from "../../assets/email.png";



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

  const handleSliderSignupClick = () => {
    const loginForm = document.querySelector("form.login");
    const loginText = document.querySelector(".header .login");
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
    setRepeatPasswordType('password');
    setRepeatPasswordIcon(eyeOff);
    setPasswordType('password');
    setPasswordIcon(eyeOff);
    resetErrors()
  };

  const handleSliderLoginClick = () => {
    const loginForm = document.querySelector("form.login");
    const loginText = document.querySelector(".header .login");
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
    setLoginLabelsColor(!loginLabelsColor);
    setRepeatPasswordType('password');
    setRepeatPasswordIcon(eyeOff);
    setPasswordType('password');
    setPasswordIcon(eyeOff);
    resetErrors()
  };


  // function handleChange(event) {
  //   setErrorMessage("");
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // }
  const [formData, setFormData] = useState({
    profileName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    profileNameError: "",
    usernameError: "",
    emailError: "",
    passError: "",
    passErrorRep: "",
    genderError: "",
    subjectError: "",
    backError: "",
  });
  
  async function handleLoginEnter(event) {
    event.preventDefault();
    const email = document.querySelector('.email1_input').value;
    const password = document.querySelector('.password1_input').value;
    const errors = [
      {
        profileNameError: "",
        usernameError: "",
        emailError: "",
        passError: "",
        passErrorRep: "",
        // genderError: "",
        // subjectError: "",
        backError: "",
      },
    ];

  
    if (email.trim().length === 0) {
      errors.emailError = "! وارد کردن ایمیل الزامی است";
    }
    if (!IsValidEmail(email) && !errors.emailError) {
      errors.emailError = "!قالب ایمیل قابل قبول نیست";
    }
    if (password.trim().length === 0) {
      errors.passError = "!وارد کردن رمز عبور الزامی است";
    }
    if (password.length < 8 && password) {
      errors.passError = "!رمز عبور باید حداقل شامل هشت کاراکتر باشد";
    }
    
    setErrorMessage({
      profileNameError: errors.profileNameError,
      usernameError: errors.usernameError,
      emailError: errors.emailError, 
      passError: errors.passError
    });
    if (
      errors.profileName ||
      errors.usernameError ||
      errors.emailError ||
      errors.passError
    ) {
      return;
    }
  }


  async function handleSignupEnter(event) {
    event.preventDefault();
    const email = document.querySelector('.email2_input').value;
    const password = document.querySelector('.password2_input').value;
    const passwordConfirm = document.querySelector('.passwordConf_input').value;

    const errors = [
      {
        profileNameError: "",
        usernameError: "",
        emailError: "",
        passError: "",
        passErrorRep: "",
        backError: "",
      },
    ];

    
    
    if (email.trim().length === 0) {
      errors.emailError = "! وارد کردن ایمیل الزامی است";
    }
    if (!IsValidEmail(email) && !errors.emailError) {
      errors.emailError = "!قالب ایمیل قابل قبول نیست";
    }
    if (password.trim().length === 0) {
      errors.passError = "!وارد کردن رمز عبور الزامی است";
    }
    if (password.length < 8 && password) {
      errors.passError = "!رمز عبور باید حداقل شامل هشت کاراکتر باشد";
    }
    if (passwordConfirm.trim().length === 0) {
      errors.passErrorRep = "!وارد کردن تکرار رمز عبور الزامی است";
    }
    if (
      password !== passwordConfirm &&
      !errors.passError &&
      !errors.passErrorRep
    ) {
      errors.passErrorRep = "!تکرار رمز عبور و رمز عبور یکسان نیست";
    }
    
    
    setErrorMessage({
      profileNameError: errors.profileNameError,
      usernameError: errors.usernameError,
      emailError: errors.emailError, 
      passError: errors.passError,
      passErrorRep: errors.passErrorRep
      // genderError: errors.genderError,
      // subjectError: errors.subjectError,
    });
    if (
      errors.profileName ||
      errors.usernameError ||
      errors.emailError ||
      errors.passError ||
      errors.passErrorRep
    ) {
      return;
    }
    // else {
    //   handleSignUp(formData, subject, gender);
    // }
  }

  const resetErrors = () => {
    setErrorMessage({
      profileNameError: "",
      usernameError: "",
      emailError: "",
      passError: "",
      passErrorRep: "",
      genderError: "",
      subjectError: "",
      backError: "",
    });
  };
  

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
                  onClick={handleSliderLoginClick}
                >
                  ورود
                </label>
                <label
                  htmlFor="signup"
                  className="slide signup"
                  onClick={handleSliderSignupClick}
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
                    className="email1_input"
                      type="text"
                      name="email"
                      placeholder="ایمیل"
                      error={errorMessage.emailError}
                      style={{
                        backgroundImage: `url(${email_icon})`,
                        backgroundRepeat: "no-repeat",
                        paddingRight: "40px",
                        backgroundPosition: "right",
                      }}
                    />
                   </div>
                      {errorMessage.emailError && 
                      (<div className="error_input" >{errorMessage.emailError}
                      </div>)}
                  <div className="field">
                    <input
                    className="password1_input"
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
                  {errorMessage.passError && 
                      (<div className="error_input" >{errorMessage.passError}
                      </div>)}
                  
                  <div className="pass_link">
                    <a href="#"> فراموشی رمز عبور</a>
                  </div>
                  <div className="field btn">
                    <div className="btn_layer"></div>
                    <input type="submit" value="ورود" onClick={handleLoginEnter}  />
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
                <form action="#" className="signup">
                <pre></pre>
                  {/*<div className="field">
                    <input type="text" placeholder='Name'/>
                  </div>*/}
                  <div className="field">
                    <input
                    className="email2_input"
                      type="text"
                      name="email"
                      placeholder="ایمیل"
                      error={errorMessage.emailError}
                      style={{
                        backgroundImage: `url(${email_icon})`,
                        backgroundRepeat: "no-repeat",
                        paddingRight: "40px",
                        backgroundPosition: "right",
                      }}
                    />
                   </div>
                      {errorMessage.emailError && 
                      (<div className="error_input" >{errorMessage.emailError}
                      </div>)}
                  <div className="field">
                    <input
                    className="password2_input"
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
                  {errorMessage.passError && 
                      (<div className="error_input" >{errorMessage.passError}
                      </div>)}
                  <div className="field">
                    <input
                    className="passwordConf_input"
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
                  {errorMessage.passErrorRep && 
                      (<div className="error_input" >{errorMessage.passErrorRep}
                      </div>)}
                  <div className="field btn">
                    <div className="btn_layer"></div>
                    <input type="submit" value="ثبت نام" onClick={handleSignupEnter}/>
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