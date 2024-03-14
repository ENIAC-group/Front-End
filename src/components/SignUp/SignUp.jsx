import React, { useState } from "react";
import './SignUp.css'

import user_icon from '../../assets/person.png'
import lock_icon from '../../assets/password.png'
import email_icon from '../../assets/email.png'
import gender_icon from '../../assets/gender.png'

const SignUp = () => {
    const [action, setAction] = useState("ثبت نام")
    const genderOptions = [
        { value: "F", label: "زن" },
        { value: "M", label: "مرد" },
    ];
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div> 
            <div className="inputs">
                {action === "ورود" ? <div></div> : <>
                    <div className="input"><img src={user_icon} alt="" /><input type="text" placeholder="نام" /></div>
                    <div className="input"><img src={user_icon} alt="" /><input type="text" placeholder="نام خانوادگی" /></div>
                </>} 

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="ایمیل" />
                </div>
                <div className="input">
                    <img src={lock_icon} alt="" />
                    <input type="password" placeholder="رمز عبور" />
                </div>
                {action === "ثبت نام" ? (
                <div className="input">
                    <img src={gender_icon} alt="" />
                    <select className="select" id="gender" name="gender" defaultValue="" required>
                        <option disabled value="">جنسیت</option>
                        {genderOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                ) : (
                <div className="forgot-password">
                    رمز عبور خود را فراموش کردید؟ <span>کلیک کنید</span>
                </div>
                )}
                <div className="submit-container">
                    <div className={action === "ثبت نام" ? "submit gray" : "submit"} onClick={() => {setAction("ورود")}}>ورود</div>
                    <div className={action === "ورود" ? "submit gray" : "submit"} onClick={() => {setAction("ثبت نام")}}>ثبت نام</div>
                </div>
            </div>
        </div>
    )
}

export default SignUp