import React, { useState, useEffect } from 'react';
import Glasser from './questions_Glasser';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Swal from 'sweetalert2';
import "./glasser_style.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar_SideBar from '../SidebarNabar/NavBar_SideBar';

const GlasserTest = () => {
  const navigate = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(Glasser.questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    doneAnswers: 0,
    emptyAnswers: 0,
  });

  const { questions } = Glasser;
  const { question, choices } = questions[activeQuestion];


  useEffect(() => {
    setSelectedAnswers(prevSelectedAnswers => {
      const updatedAnswers = [...prevSelectedAnswers];
      updatedAnswers[activeQuestion] = selectedAnswers[activeQuestion];
      return updatedAnswers;
    });
    console.log(selectedAnswers);
  }, [activeQuestion]);

  const sendAnswersToBack = async (data) => {
    try {
        const token = localStorage.getItem("accessToken");
        const dataString = JSON.stringify(data); // Convert data to a JSON string
        console.log(dataString);
        const response = await axios.post("http://127.0.0.1:8000/TherapyTests/glasser/", 
        {
            data: dataString // Send the JSON string as data
        },{
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          
        });
        
        if (response.status === 200) {
          setShowResult(true);
          Swal.fire({
            icon: "success",
            title: "موفقیت",
            background: "#473a67",
            color: "#b4b3b3",
            width: "26rem",
            height: "18rem",
            confirmButtonText: "تایید",
            customClass: {
              container: 'custom-swal-container'
            }
          });
        } else {
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
  }

  const onClickNext = () => {
    if (selectedAnswers[activeQuestion] !== null) {
      setResult(prev => ({
        ...prev,
        doneAnswers: prev.doneAnswers + 1
      }));
    } else {
      setResult(prev => ({
        ...prev,
        emptyAnswers: prev.emptyAnswers + 1
      }));
    }

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion(prev => prev + 1);
    } else {
    //   setShowResult(true);
      const updatedAnswersForBack = {}
      for (let i = 1; i < questions.length; i++){
        updatedAnswersForBack[i] = {"category": questions[i].category, "res": selectedAnswers[i] + 1}
      }
      sendAnswersToBack(updatedAnswersForBack);
    }
  };

  const onClickPrevious = () => {
    if (activeQuestion !== 0) {
      setActiveQuestion(prev => prev - 1);
    }
  };

  const onAnswerSelected = (index) => {
    console.log(activeQuestion);
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[activeQuestion] = index;
    setSelectedAnswers(updatedAnswers);

  };

  const showConfirmSwal = () => {
    Swal.fire({
      icon: "warning",
      title: "آیا از ادامۀ آزمون منصرف شده اید؟",
      html: "در صورت اتمام آزمون پاسخ‌های شما ثبت نمی‌شوند",
      background: "#473a67",
      color: "#b4b3b3",
      width: "29rem",
      height: "15rem",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "ادامه می‌دهم",
      customClass: {
        container: 'custom-swal-container'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      } else {
        // Handle the case when "ادامه می‌دهم" button is clicked (optional)
        // You can add any additional logic here, such as closing the dialog
      }
    });
  };

  const cancelTest = () => {
    Swal.fire({
      icon: "warning",
      title: "از انجام آزمون منصرف شده اید؟",
      background: "#473a67",
      color: "#b4b3b3",
      width: "26rem",
      height: "18rem",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "ادامه می‌دهم",
      customClass: {
        container: 'custom-swal-container'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      } else {
        // Handle the case when "ادامه می‌دهم" button is clicked (optional)
        // You can add any additional logic here, such as closing the dialog
      }
    });
  }
  

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  const convertToPersianNumbers = (number) => {
    return String(number).replace(/\d/g, (digit) => persianNumbers[digit]);
  };


  return (
    <>
    <NavBar_SideBar/>
    <body className='glasser-body'>
    <div className="glasser-quiz-container">
      {!showResult && ( // Conditionally render content when not showing result
        <div>
          {activeQuestion === 0 && ( // Conditionally render the header for the first question
            <h2 style={{fontSize: "30px", color: "#9a94fb", marginBottom: "10px", textAlign: "center"}}>توجه!</h2>
          )}
          <div className="glasser-header">
            {activeQuestion !== 0 && ( // Conditionally render the counter starting from the second question
              <>
                <ProgressBar animated className='mbti-progress-bar custom-color'now={(activeQuestion + 1) * (100 / questions.length)} />
                <span className="glasser-active-question-no">{addLeadingZero(activeQuestion)}</span>
                <span className="glasser-total-question">/{addLeadingZero(questions.length - 1)}</span>
              </>
            )}
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((choice, index) => (
              <li
                key={index}
                className={selectedAnswers[activeQuestion] === index ? "glasser-selected-answer" : ""}
                onClick={() => onAnswerSelected(index)}
              >
                {choice.text}
              </li>
            ))}
          </ul>
          <div className="glasser-button-group">
            {activeQuestion === 0 ? (
              <>
                <button style={{width: "40px", fontSize: "16px"}}onClick={onClickNext}>شروع آزمون</button>
                <button onClick={cancelTest}>انصراف</button>
              </>
            ) : (
              <>
               <button 
                  onClick={onClickNext} 
                  disabled={selectedAnswers[activeQuestion] === null}
                  title={selectedAnswers[activeQuestion] === null && activeQuestion !== questions.length - 1 ? "برای ادامه باید حتما یک گزینه را انتخاب کنید" : ""}
                >
                  {activeQuestion === questions.length - 1 ? 'پایان آزمون' : 'بعدی'}
                </button>

                <span onClick={showConfirmSwal}className="glasser-complete-test">اتمام آزمون</span>
                <button onClick={onClickPrevious} disabled={activeQuestion === 0}>
                  قبلی
                </button>
              </>
            )}
          </div>
        </div>
      )}
      {showResult && ( // Conditionally render result
        <div className="glasser-result">
          <h3 style={{color: "#9a94fb", marginBottom: "10px"}}>آزمون شما به پایان رسید!</h3>
          <p>
            پاسخ‌های شما پردازش شد. برای دیدن نتیجۀ آزمون خود، برروی دکمۀ زیر کلیک کنید.
          </p>
          <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "120px", marginRight: "34%"}}onClick={onClickNext}>دیدن نتایج</button>
        </div>
      )}
    </div>
    </body>
    </>
  );
  
};

export default GlasserTest;
