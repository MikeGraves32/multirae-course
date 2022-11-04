import React from "react";
// import QuizStart from "../../components/QuizStart";
// import Question from "../../components/Question";
import Questions from "../../components/Questions";
import lsn07KC from "../../data/lsn07KC";
const pgTitle = "Lesson 07 - Learning Check";
const lsnQuiz = lsn07KC;
function CheckOnLearning01() {
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

export default CheckOnLearning01;
