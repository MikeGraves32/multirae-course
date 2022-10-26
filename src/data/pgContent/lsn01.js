import React from "react";
import LsnPage01 from "../../pages/Lesson01/01_lsnMenu";
import LsnPage02 from "../../pages/Lesson01/02_introSplash";
import LsnPage03 from "../../pages/Lesson01/03_objectives";
import LsnPage04 from "../../pages/Lesson01/04_devDescription";
import LsnPage05 from "../../pages/Lesson01/05_devFeatures";
import LsnPage06 from "../../pages/Lesson01/06_devDescriptionStatic";
import LsnPage07 from "../../pages/Lesson01/07_sensorCharacteristics";
import LsnPage08 from "../../pages/Lesson01/08_crossSensitivity";
import LsnPage09 from "../../pages/Lesson01/09_checkOnLearning01";

const LsnContent01 = [
  { id: 0, lessonName: "Lesson01", component: <LsnPage01 />, isVisible: false },

  { id: 1, lessonName: "Lesson01", component: <LsnPage02 />, isVisible: false },

  { id: 2, lessonName: "Lesson01", component: <LsnPage03 />, isVisible: false },

  { id: 3, lessonName: "Lesson01", component: <LsnPage04 />, isVisible: false },

  { id: 4, lessonName: "Lesson01", component: <LsnPage05 />, isVisible: false },

  { id: 5, lessonName: "Lesson01", component: <LsnPage06 />, isVisible: false },

  { id: 6, lessonName: "Lesson01", component: <LsnPage07 />, isVisible: false },

  { id: 7, lessonName: "Lesson01", component: <LsnPage08 />, isVisible: false },

  { id: 8, lessonName: "Lesson01", component: <LsnPage09 />, isVisible: false },
];

export default LsnContent01;
