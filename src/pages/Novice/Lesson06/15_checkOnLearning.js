import React from "react";
// import QuizStart from "../../../../components/QuizStart";
// import Question from "../../../../components/Question";
import Questions from "../../../components/Questions";
import lsn06KC from "../../../data/lsn06KC";
const pgTitle = "Lesson 06 - Learning Check";
const lsnQuiz = lsn06KC;
function CheckOnLearning01() {
     return (
          <>
               <div className='row'>
                    <div className='col-12'>
                         <h2 className='pgTitle'>{pgTitle}</h2>
                    </div>
                    <div className='col-12'>
                         <Questions questionData={lsnQuiz} />
                    </div>
               </div>
          </>
     );
}

export default CheckOnLearning01;
