import React from "react";
// import QuizStart from "../../../../components/QuizStart";
// import Question from "../../../../components/Question";
import Questions from "../../../components/Questions";
import lsn02KC from "../../../data/lsn02KC.json";
const pgTitle = "Lesson 02 - Learning Check";
const lsnQuiz = lsn02KC;

function CheckOnLearning02() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="pgTitle">{pgTitle}</h2>
        </div>
        <div className="col-12">
          <Questions questionData={lsnQuiz} />
        </div>
      </div>
    </>
  );
}

export default CheckOnLearning02;
