import React from "react";
// import QuizStart from "../../../../components/QuizStart";
// import Question from "../../../../components/Question";
import Questions from "../../../components/Questions";
import lsn04KC from "../../../data/lsn04KC";
const pgTitle = "Lesson 04 - Learning Check";
const lsnQuiz = lsn04KC;
function CheckOnLearning04() {
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

export default CheckOnLearning04;
