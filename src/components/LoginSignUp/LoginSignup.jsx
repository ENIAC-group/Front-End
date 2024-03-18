import react from 'react'
import React, { useState } from 'react';
import './LoginSignup.css'

import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

import lock_icon from '../../assets/password.png'
import email_icon from '../../assets/email.png'


const LoginContainer = () => {
  const [loginLabelsColor, setLoginLabelsColor] = useState(false);
  const [_, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleSignupClick=() =>{
    const loginForm=document.querySelector("form.login");
    const loginText=document.querySelector(".header .login");
    loginForm.style.marginLeft="-50%";
    loginText.style.marginLeft="-50%";
    setIcon(eyeOff);
    setType('password')
    setPassword("");
  };

  const handleLoginClick=() =>{
    const loginForm= document.querySelector("form.login");
    const loginText=document.querySelector(".header .login");
    loginForm.style.marginLeft="0%";
    loginText.style.marginLeft="0%";
    setLoginLabelsColor(!loginLabelsColor); 
    setIcon(eyeOff);
    setType('password')
    setPassword("");

  };

  // const handleSignupLinkClick=(e) => {
  //   e.preventDefault();
  //   const signupBtn=document.querySelector("label.signup");
    
  //   signupBtn.click();
  // };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  return(
      <>
      <body className='bd'>
        <div className='hello'>
        <div className="wrapper">
          <div className="header">
            <div className="title login">ورود</div>
            <div className="title signup">ثبت نام</div>
          </div>

          <div className="form_container">
            <div className="slider_controls">
              <input type="radio" name="slide" id="login" defaultChecked/>
              <input type="radio" name="slide" id="signup"/>
            
              <label htmlFor="login" className='slide login' onClick={handleLoginClick}>ورود</label>
              <label htmlFor="signup" className='slide signup' onClick={handleSignupClick}>ثبت نام</label>
              <div className="slider_tab"></div>
            </div>
            <div className='form_details'>
            <form action="#" className='login'>
                <pre></pre>
                <div className="field">
                <input type="text" placeholder='ایمیل' 
                    style={{backgroundImage: `url(${email_icon})`, 
                            backgroundRepeat: 'no-repeat', 
                            paddingRight: '40px',
                            backgroundPosition: 'right'}}/>
                </div>
                <div className="field">
                <input id="pass"
                    type={type}
                    name="password"
                    placeholder='رمز عبور'
                    autoComplete="current-password" 
                    style={{backgroundImage: `url(${lock_icon})`, 
                            backgroundRepeat: 'no-repeat', 
                            paddingRight: '40px',
                            backgroundPosition: 'right'}}
                            />
                </div>
                
                <div className='pass_link'><a href="#" > فراموشی رمز عبور</a></div>
                <div className="field btn">
                    <div className='btn_layer'></div>
                    <input type="submit" value="ورود"/>
                </div>
                {/* <div className="signup_link"  > حساب کاربری ندارید؟ <a href="#" onClick={handleSignupLinkClick}> ثبت نام کنید</a></div> */}
              </form>
                {/*signup form*/}
                <form action="#">

                  {/*<div className="field">
                    <input type="text" placeholder='Name'/>
                  </div>*/}
                  <div className="field">
                  <input type="email" placeholder='ایمیل' 
                    style={{backgroundImage: `url(${email_icon})`, 
                            backgroundRepeat: 'no-repeat', 
                            paddingRight: '40px',
                            backgroundPosition: 'right'}}/>
                  </div>
                 
                  <div className="field">
                  <input id="pass"
                    type={type}
                    name="password"
                    placeholder='رمز عبور'
                    autoComplete="current-password" 
                    style={{backgroundImage: `url(${lock_icon})`, 
                            backgroundRepeat: 'no-repeat', 
                            paddingRight: '40px',
                            backgroundPosition: 'right'}}
                            />
                <span className="toggle-icon" onClick={handleToggle}>
                <Icon icon={icon} size={23} />
              </span>
              </div>
                  <div className="field">
                  <input type="password" placeholder='تکرار رمز عبور' 
                    style={{backgroundImage: `url(${lock_icon})`, 
                            backgroundRepeat: 'no-repeat', 
                            paddingRight: '40px',
                            backgroundPosition: 'right'}}/>
                  </div>
                  <div className="field btn">
                    <div className='btn_layer'></div>
                    <input type="submit" value="ثبت نام"/>
                    
                  </div>
                  {/* <div className="signup_link">  حساب کاربری دارید؟<a href='#' onClick={handleLoginClick}>  وارد شوید</a></div> */}

                </form>

            </div>

          </div>
        </div>
        </div>
        </body>
      </>



  )

}
  
 

export default LoginContainer;