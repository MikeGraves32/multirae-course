import React from "react";
import LsnPage01 from "../../pages/Lesson00/01_introSplash";
import LsnPage02 from "../../pages/Lesson00/02_vidSlide";
import LsnPage03 from "../../pages/Lesson00/03_introduction";
import LsnPage04 from "../../pages/Lesson00/04_choosePath";
import LsnPage05 from "../../pages/Lesson00/05_avatarEnter";
import LsnPage06 from "../../pages/Lesson00/06_avatarOption";
import LsnPage07 from "../../pages/Lesson00/07_courseWelcome";
import LsnPage08 from "../../pages/Lesson00/08_theoryOpsBook";

const LsnContent00 = [
  { id: 0, lessonName: "Lesson00", component: <LsnPage01 />, isVisible: true },

  { id: 1, lessonName: "Lesson00", component: <LsnPage02 />, isVisible: false },

  { id: 2, lessonName: "Lesson00", component: <LsnPage03 />, isVisible: false },

  { id: 3, lessonName: "Lesson00", component: <LsnPage04 />, isVisible: false },

  { id: 4, lessonName: "Lesson00", component: <LsnPage05 />, isVisible: false },

  { id: 5, lessonName: "Lesson00", component: <LsnPage06 />, isVisible: false },

  { id: 6, lessonName: "Lesson00", component: <LsnPage07 />, isVisible: false },

  { id: 7, lessonName: "Lesson00", component: <LsnPage08 />, isVisible: false },
];

export default LsnContent00;
