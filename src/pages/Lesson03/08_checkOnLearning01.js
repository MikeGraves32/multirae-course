import React from "react";
// import QuizStart from "../../components/QuizStart";
// import Question from "../../components/Question";
import Questions from "../../components/Questions";
import LsnQuiz from "../../data/lsn03KC.json";

function CheckOnLearning03() {
     return (
          <>
               <div className='col-12'>
                    Testing
                    <Questions questionData={LsnQuiz} />
               </div>
          </>
     );
}

export default CheckOnLearning03;
