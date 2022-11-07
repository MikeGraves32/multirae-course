import React from "react";
// import QuizStart from "../../../../components/QuizStart";
// import Question from "../../../../components/Question";
import Questions from "../../../components/Questions";
import lsn03KC from "../../../data/lsn03KC";
const pgTitle = "Lesson 03 - Learning Check";
const lsnQuiz = lsn03KC;

function CheckOnLearning03() {
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

export default CheckOnLearning03;
