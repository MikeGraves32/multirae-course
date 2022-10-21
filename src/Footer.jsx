import React, { useState } from "react";
import { Button } from "bootstrap";
import LsnPage01 from "./pages/Lesson00/01_introSplash";
import LsnPage02 from "./pages/Lesson00/02_vidSlide";
import LsnPage03 from "./pages/Lesson00/03_introduction";
import LsnPage04 from "./pages/Lesson00/04_choosePath";
import LsnPage05 from "./pages/Lesson00/05_avatarEnter";
import LsnPage06 from "./pages/Lesson00/06_avatarOption";
import LsnPage07 from "./pages/Lesson00/07_courseWelcome";
import LsnPage08 from "./pages/Lesson00/08_theoryOpsBook";

const array = [
  { id: 1, component: <LsnPage01 />, isVisible: true },

  { id: 2, component: <LsnPage02 />, isVisible: false },

  { id: 3, component: <LsnPage03 />, isVisible: false },

  { id: 4, component: <LsnPage04 />, isVisible: false },

  { id: 5, component: <LsnPage05 />, isVisible: false },

  { id: 6, component: <LsnPage06 />, isVisible: false },

  { id: 7, component: <LsnPage07 />, isVisible: false },

  { id: 8, component: <LsnPage08 />, isVisible: false },
];

const btn = Button;

export default function Footer() {
  const [items, setItems] = useState(array);

  const handleClickBack = (number) => {
    const triggeredItems = items.map((item) => {
      if (item.id !== number) {
        item.isVisible = !item.isVisible;
      }

      return item;
    });

    setItems(triggeredItems);
  };

  return (
    <div className="courseFooter row">
      <footer className="row">
        <div className="btnPrev col-1">
          {items.map(({ id, component, isVisible, info }) => (
            <btn
              key={id}
              onClick={() => handleClickBack(id - 1)}
              hidden={!isVisible}
              className="btn btn-primary btn-sm btn-prev">
              Back
            </btn>
          ))}{" "}
        </div>
        <div className="btnNext col-1">
          <btn className="btn btn-primary btn-sm btn-next">Next</btn>
        </div>
        <div>
          <p>This site is the footer area of the GUI</p>
          <p>&copy; L2 Defense 2022</p>
        </div>
      </footer>
    </div>
  );
}
