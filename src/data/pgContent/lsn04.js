import React from "react";
import LsnPage01 from "../../pages/Lesson04/01_lsnIntro";
import LsnPage02 from "../../pages/Lesson04/02_introSplash";
import LsnPage03 from "../../pages/Lesson04/03_objectives";
import LsnPage04 from "../../pages/Lesson04/04_capabilities";
import LsnPage05 from "../../pages/Lesson04/05_limitations";
import LsnPage06 from "../../pages/Lesson04/06_infographic";
import LsnPage07 from "../../pages/Lesson04/07_checkOnLearning";

const LsnContent04 = [
  { id: 0, lessonName: "Lesson04", component: <LsnPage01 />, isVisible: true },

  { id: 1, lessonName: "Lesson04", component: <LsnPage02 />, isVisible: false },

  { id: 2, lessonName: "Lesson04", component: <LsnPage03 />, isVisible: false },

  { id: 3, lessonName: "Lesson04", component: <LsnPage04 />, isVisible: false },

  { id: 4, lessonName: "Lesson04", component: <LsnPage05 />, isVisible: false },

  { id: 5, lessonName: "Lesson04", component: <LsnPage06 />, isVisible: false },

  { id: 6, lessonName: "Lesson04", component: <LsnPage07 />, isVisible: false },
];

export default LsnContent04;
