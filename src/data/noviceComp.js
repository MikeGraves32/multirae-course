import React, { useState } from "react";
import LsnPage01 from "../pages/Lesson00/01_introSplash";
import LsnPage02 from "../pages/Lesson00/02_vidSlide";
import LsnPage03 from "../pages/Lesson00/03_introduction";
import LsnPage04 from "../pages/Lesson00/04_choosePath";
import LsnPage05 from "../pages/Lesson00/05_avatarEnter";
import LsnPage06 from "../pages/Lesson00/06_avatarOption";
import LsnPage07 from "../pages/Lesson00/07_courseWelcome";
import LsnPage08 from "../pages/Lesson00/08_theoryOpsBook";

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

export const Test = () => {
  const [items, setItems] = useState(array);

  const handleClick = (number) => {
    const triggeredItems = items.map((item) => {
      if (item.id !== number) {
        item.isVisible = !item.isVisible;
      }

      return item;
    });

    setItems(triggeredItems);
  };

  //   const handleClickInner = (number) => {
  //     const triggeredItemsInner = items.info.map((item) => {
  //       if (item.id !== number) {
  //         item.isVisibleInfo = !item.isVisibleInfo;
  //       }

  //       return item;
  //     });

  //     setItems(triggeredItemsInner);
  //   };

  return (
    <div>
      {/* <div className="row text-center d-flex my-1"> */}
      {items.map(({ id, component, isVisible, info }) => (
        <div key={id} onClick={() => handleClick(id + 1)} hidden={!isVisible}>
          {component}

          {/* {info.map(({ id, component, isVisibleInfo }) => (
              <div
                key={id}
                className="col-lg-9 col-md-6 mb-4 justify-content-center"
                onClick={() => {
                  handleClickInner(id);
                }}
                hidden={isVisibleInfo}>
                {component}
              </div>
            ))} */}
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};
export default Test;
