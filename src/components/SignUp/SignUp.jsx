import react from 'react'
import React, { useState } from 'react';
import './SignUp.css'
const LoginContainer = () => {

  const handleSignupClick=() =>{
    const loginForm=document.querySelector("form.login");
    const loginText=document.querySelector(".header .login");
    loginForm.style.marginLeft="-50%";
    loginText.style.marginLeft="-50%";
  };

  const handleLoginClick=() =>{
    const loginForm= document.querySelector("form.login");
    const loginText=document.querySelector(".header .login");
    loginForm.style.marginLeft="0%";
    loginText.style.marginLeft="0%";
  };

  const handleSignupLinkClick=(e) => {
    e.preventDefault();
    const signupBtn=document.querySelector("label.signup");
    signupBtn.click();
  };



  return(
      <>
        <div className="wrapper">
          <div className="header">
            <div className="title login">ورود</div>
            <div className="title signup">ثبت نام</div>
          </div>

          <div className="form_container">
            <div className="slider_controls">
              <input type="radio" name="slide" id="login" defaultChecked/>
              <input type="radio" name="slide" id="signup" defaultChecked/>
              <label htmlFor="login" className='slide login' onClick={handleLoginClick}>ورود</label>
              <label htmlFor="signup" className='slide signup' onClick={handleSignupClick}>ثبت نام</label>
              <div className="slider_tab"></div>
            </div>
            <div className='form_details'>
              <form action="#" className='login'>
                <pre></pre>
                <div className="field">
                  <input type="text" placeholder='ایمیل'/>
                </div>
                <div className="field">
                    <input type="password" placeholder='رمز عبور' />
                </div>
                <div className='pass_link'><a href="#" > فراموشی رمز عبور</a></div>
                <div className="field btn">
                    <div className='btn_layer'></div>
                    <input type="submit" value="ورود"/>
                </div>
                <div className="signup_link"  > اکانت ندارید : <a href="#" onClick={handleSignupLinkClick}> ثبت نام کنید</a></div>
              </form>
                {/*signup form*/}
                <form action="#">

                  {/*<div className="field">
                    <input type="text" placeholder='Name'/>
  </div>*/}
                  <div className="field">
                    <input type="text" placeholder='ایمیل'/>
                  </div>
                 
                  <div className="field">
                    <input type="password" placeholder='رمز عبور'/>
                  </div>
                  <div className="field">
                    <input type="password" placeholder='تکرار رمز عبور'/>
                  </div>
                  <div className="field btn">
                    <div className='btn_layer'></div>
                    <input type="submit" value="ثبت نام"/>
                    
                  </div>
                  <div className="signup_link">  اکانت دارید :<a href='#' onClick={handleLoginClick}> ورود به سایت </a></div>

                </form>

            </div>

          </div>
        </div>
      
      
      
      
      
      
      
      
      
      </>










  )

}
  
 

export default LoginContainer;