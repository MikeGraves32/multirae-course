import React from "react";
// import QuizStart from "../../components/QuizStart";
// import Question from "../../components/Question";
import Questions from "../../components/Questions";
import LsnQuiz from "../../data/lsn02KC.json";

function CheckOnLearning02() {
     return (
          <>
               <div className='col-12'>
                    Testing
                    <Questions questionData={LsnQuiz} />
               </div>
          </>
     );
}

export default CheckOnLearning02;
