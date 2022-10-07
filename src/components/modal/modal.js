import React, { useState } from "react";

function Modal() {
     const [closeModal, setCloseModal] = useState(false);
     return (
          <div className='modalBackground'>
               <div className='modalContainer'>
                    {/* <button onClick={() => openModal(true)}>X</button> */}
                    {/* <div className='modalTitle'>
                         <h1>Choosing Your Path</h1>
                    </div> */}
                    <div className='modalBody'>
                         <p>
                              In this course, you will choose your level of
                              knowledge on the Multi-RAE monitors –{" "}
                              <strong>Novice, Intermediate, or Advanced</strong>
                              .
                         </p>
                         The <strong>Novice</strong> path covers everything you
                         need to know about the Multi-RAE monitors.
                         <p>
                              The <strong>Intermediate</strong> path indicates
                              you have some knowledge and can begin working with
                              the device with some guided instruction
                         </p>
                         <p>
                              The <strong>Advanced</strong> path indicates you
                              are very familiar with the device and know how to
                              use it and there will be very little guidance in
                              the lesson.
                         </p>
                         <p></p>
                    </div>
                    <div className='footer'>
                         {/* <button
                              className='closeModalBtn'
                              onClick={() => {
                                   setCloseModal(true);
                              }}
                         >
                              Close
                         </button>
                         {closeModal && <Modal openModal={setCloseModal} />} */}

                         {/* <button onClick={() => openModal(true)}>Cancel</button>
                         <button>Continue</button> */}
                    </div>
               </div>
          </div>
     );
}

export default Modal;
