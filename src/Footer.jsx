import React from "react";
import { Button } from "bootstrap";

export default function Footer() {
     return (
          <div className='courseFooter row'>
               <footer className='row'>
                    <div className='btnPrev col-1'>
                         <button className='btn btn-primary btn-sm btn-prev'>
                              Back
                         </button>
                    </div>
                    <div className='btnNext col-1'>
                         <button className='btn btn-primary btn-sm btn-next'>
                              Next
                         </button>
                    </div>
                    <div>
                         <p>This site is the footer area of the GUI</p>
                         <p>&copy; L2 Defense 2022</p>
                    </div>
               </footer>
          </div>
     );
}
