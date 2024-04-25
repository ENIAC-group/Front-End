import React, { useState, useEffect } from 'react';
import MBTI from './questions_MBTI';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Swal from 'sweetalert2';
import "./tests_lib_style.css";

const MBTITest = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(MBTI.questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    doneAnswers: 0,
    emptyAnswers: 0,
  });

  const { questions } = MBTI;
  const { question, choices } = questions[activeQuestion];


  useEffect(() => {
    // Ensure that the effect runs only when activeQuestion changes
    setSelectedAnswers(prevSelectedAnswers => {
      const updatedAnswers = [...prevSelectedAnswers];
      updatedAnswers[activeQuestion] = selectedAnswers[activeQuestion];
      return updatedAnswers;
    });
    console.log(selectedAnswers);
  }, [activeQuestion]);

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
      setShowResult(true);
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
        // Redirect to another page upon confirmation
        // window.location.href = '/another-page'; // Replace '/another-page' with the actual URL of the page you want to redirect to
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
        // Redirect to another page upon confirmation
        // window.location.href = '/another-page'; // Replace '/another-page' with the actual URL of the page you want to redirect to
      } else {
        // Handle the case when "ادامه می‌دهم" button is clicked (optional)
        // You can add any additional logic here, such as closing the dialog
      }
    });
  }
  

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="tests-lib-quiz-container">
      {!showResult && ( // Conditionally render content when not showing result
        <div>
          {activeQuestion === 0 && ( // Conditionally render the header for the first question
            <h2 style={{fontSize: "30px", color: "#9a94fb", marginBottom: "10px", textAlign: "center"}}>توجه!</h2>
          )}
          <div className="tests-lib-header">
            {activeQuestion !== 0 && ( // Conditionally render the counter starting from the second question
              <>
                <ProgressBar now={(activeQuestion + 1) * (100 / questions.length)} />
                <span className="tests-lib-active-question-no">{addLeadingZero(activeQuestion)}</span>
                <span className="tests-lib-total-question">/{addLeadingZero(questions.length - 1)}</span>
              </>
            )}
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((choice, index) => (
              <li
                key={index}
                className={selectedAnswers[activeQuestion] === index ? "tests-lib-selected-answer" : ""}
                onClick={() => onAnswerSelected(index)}
              >
                {choice.text}
              </li>
            ))}
          </ul>
          <div className="tests-lib-button-group">
            {activeQuestion === 0 ? (
              <>
                <button style={{width: "40px"}}onClick={onClickNext}>شروع آزمون</button>
                <button onClick={cancelTest}>انصراف</button>
              </>
            ) : (
              <>
                <button onClick={onClickNext} disabled={selectedAnswers[activeQuestion] === null}>
                  {activeQuestion === questions.length - 1 ? 'پایان آزمون' : 'بعدی'}
                </button>
                <span onClick={showConfirmSwal}className="tests-lib-complete-test">اتمام آزمون</span>
                <button onClick={onClickPrevious} disabled={activeQuestion === 0}>
                  قبلی
                </button>
              </>
            )}
          </div>
        </div>
      )}
      {showResult && ( // Conditionally render result
        <div className="tests-lib-result">
          <h3 style={{color: "#9a94fb", marginBottom: "10px"}}>آزمون شما به پایان رسید!</h3>
          <p>
            پاسخ‌های شما پردازش شد. برای دیدن نتیجۀ آزمون خود، برروی دکمۀ زیر کلیک کنید.
          </p>
          <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "120px", marginRight: "34%"}}onClick={onClickNext}>دیدن نتایج</button>
        </div>
      )}
    </div>
  );
  
};

export default MBTITest;
