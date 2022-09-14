import React, { useState, useEffect } from "react";
// import "./App.css";

import QuizStart from "./QuizStart";
import Question from "./Question";
import kcLsn01 from "../data/lsn01KC.json";
import QuizEnd from "./QuizEnd";
import QuizModal from "./QuizModal";

let interval;

export default function Lsn01KC({ questionData }) {
     const [step, setStep] = useState(1);
     const [activeQuestion, setActiveQuestion] = useState(0);
     const [answers, setAnswers] = useState([]);
     const [showQuizModal, setShowQuizModal] = useState(false);
     const [time, setTime] = useState(0);

     useEffect(() => {
          if (step === 3) {
               clearInterval(interval);
          }
     }, [step]);

     const quizStartHandler = () => {
          setStep(2);
          interval = setInterval(() => {
               setTime((prevTime) => prevTime + 1);
          }, 1000);
     };

     const resetClickHandler = () => {
          setActiveQuestion(0);
          setAnswers([]);
          setStep(2);
          setTime(0);
          interval = setInterval(() => {
               setTime((prevTime) => prevTime + 1);
          }, 1000);
     };

     return (
          <div className='row'>
               {step === 1 && <QuizStart onQuizStart={quizStartHandler} />}
               {step === 2 && (
                    <Question
                         data={questionData.data[activeQuestion]}
                         onAnswerUpdate={setAnswers}
                         numberOfQuestions={questionData.data.length}
                         activeQuestion={activeQuestion}
                         onSetActiveQuestion={setActiveQuestion}
                         onSetStep={setStep}
                    />
               )}

               {step === 3 && (
                    <QuizEnd
                         results={answers}
                         data={questionData.data}
                         onReset={resetClickHandler}
                         onAnswersCheck={() => setShowQuizModal(true)}
                         time={time}
                    />
               )}
               {showQuizModal && (
                    <QuizModal
                         onClose={() => setShowQuizModal(false)}
                         results={answers}
                         data={questionData.data}
                    />
               )}
          </div>
     );
}
