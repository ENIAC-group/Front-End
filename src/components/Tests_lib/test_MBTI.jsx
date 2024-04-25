import React, { useState, useEffect } from 'react';
import MBTI from './questions_MBTI';
import ProgressBar from 'react-bootstrap/ProgressBar';
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
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[activeQuestion] = index;
    setSelectedAnswers(updatedAnswers);
  };

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
                <button onClick={null}>انصراف</button>
              </>
            ) : (
              <>
                <button onClick={onClickNext} disabled={selectedAnswers[activeQuestion] === null}>
                  {activeQuestion === questions.length - 1 ? 'پایان آزمون' : 'بعدی'}
                </button>
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
