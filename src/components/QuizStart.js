import React from "react";

import "../css/components/questions.css";

const QuizStart = ({ onQuizStart }) => {
     return (
          <div className='card'>
               <div className='card-content question-card'>
                    <div className='content'>
                         <h1>Begin the Knowledge Check</h1>
                         <p>Good Luck!</p>
                         <button
                              className='button is-info is-medium'
                              onClick={onQuizStart}
                         >
                              Start
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default QuizStart;
