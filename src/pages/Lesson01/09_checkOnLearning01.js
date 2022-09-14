import React from "react";
// import QuizStart from "../../components/QuizStart";
// import Question from "../../components/Question";
import Questions from "../../components/Questions";
import LsnQuiz from "../../data/lsn01KC.json";
const pgTitle = "Lesson 01 - Learning Check";
function CheckOnLearning01() {
     return (
          <>
               <div className='row'>
                    <div className='col-12'>
                         <h2 className='pgTitle'>{pgTitle}</h2>
                    </div>
                    <div className='col-12'>
                         <Questions questionData={LsnQuiz} />
                    </div>
               </div>
          </>
     );
}

export default CheckOnLearning01;
