import React from "react";
import LsnPage01 from "../../pages/Novice/Lesson02/01_lsnMenu";
import LsnPage02 from "../../pages/Novice/Lesson02/02_lsnSplash";
import LsnPage03 from "../../pages/Novice/Lesson02/03_objectives";
import LsnPage04 from "../../pages/Novice/Lesson02/04_configMultiRae";
import LsnPage05 from "../../pages/Novice/Lesson02/05_sensorLEL";
import LsnPage06 from "../../pages/Novice/Lesson02/06_sensorO2";
import LsnPage07 from "../../pages/Novice/Lesson02/07_sensorCl2";
import LsnPage08 from "../../pages/Novice/Lesson02/08_sensorPID";
import LsnPage09 from "../../pages/Novice/Lesson02/09_sensorSO2";
import LsnPage10 from "../../pages/Novice/Lesson02/10_checkOnLearning";

const LsnContent02 = [
  { id: 0, lessonName: "Lesson02", component: <LsnPage01 />, isVisible: true },

  { id: 1, lessonName: "Lesson02", component: <LsnPage02 />, isVisible: false },

  { id: 2, lessonName: "Lesson02", component: <LsnPage03 />, isVisible: false },

  { id: 3, lessonName: "Lesson02", component: <LsnPage04 />, isVisible: false },

  { id: 4, lessonName: "Lesson02", component: <LsnPage05 />, isVisible: false },

  { id: 5, lessonName: "Lesson02", component: <LsnPage06 />, isVisible: false },

  { id: 6, lessonName: "Lesson02", component: <LsnPage07 />, isVisible: false },

  { id: 7, lessonName: "Lesson02", component: <LsnPage08 />, isVisible: false },

  { id: 8, lessonName: "Lesson02", component: <LsnPage09 />, isVisible: false },

  { id: 9, lessonName: "Lesson02", component: <LsnPage10 />, isVisible: false },
];

export default LsnContent02;
